#!/usr/bin/env bash
# PreToolUse hook (Bash): blocks git commits and GitHub PR create/edit commands
# whose message or body carries Claude attribution (Co-Authored-By: Claude,
# Claude-Session trailer, claude.ai session link, "Generated with Claude Code").
# Checks the command text and any message/body file it references.
set -euo pipefail

cmd=$(jq -r '.tool_input.command // ""')

# Only inspect commands that write commit messages or PR descriptions.
if ! grep -qE '(^|[[:space:];&|(])(git[[:space:]]+(commit|commit-tree|tag|merge)|gh[[:space:]]+pr[[:space:]]+(create|edit|merge))([[:space:]]|$)' <<<"$cmd"; then
  exit 0
fi

pattern='Co-Authored-By:[[:space:]]*Claude|Claude-Session:|claude\.ai/code/session|Generated with \[?Claude Code'

text="$cmd"
# Pull in files passed via -F/--file (git) or --body-file/-F (gh), unless stdin (-).
while read -r f; do
  [[ -n "$f" && "$f" != "-" && -f "$f" ]] && text+=$'\n'"$(cat -- "$f")"
done < <(grep -oE '(-F|--file|--body-file)[[:space:]=]+[^[:space:];&|]+' <<<"$cmd" | sed -E 's/^(-F|--file|--body-file)[[:space:]=]+//; s/^["'\'']//; s/["'\'']$//')

if grep -qiE "$pattern" <<<"$text"; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "This repo forbids Claude attribution in commits and PR descriptions. Remove any Co-Authored-By: Claude, Claude-Session:, claude.ai/code/session link, or \"Generated with Claude Code\" line and retry."
    }
  }'
fi
exit 0
