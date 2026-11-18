# Release notes

This file is the only place user-facing release notes are written (tech-release-versioning
FR-6). `npm run release-notes` turns it into `src/core/release-notes/releaseNotes.generated.ts`,
which the app imports; `npm run release-notes:check` reports drift without writing. It is NOT
`docs/prd/CHANGELOG.md` — that file records PRD edits for maintainers; this one speaks to users.

How to write an entry (FR-9 — each rule is checkable by reading a single entry):

1. Describe what the app can now do, or what now works correctly, from the user's point of view.
2. One entry per user-visible change; leave out refactors, tooling and anything a user cannot see.
3. Name the screen or action the way the app labels it, not the code that implements it.
4. One line per entry — no continuation lines, no nested bullets, no sub-headings.

A released entry is never edited (FR-10). A correction is a new entry in a later version.

Structure, which `scripts/release-notes.mjs` enforces (FR-7, FR-16):

`## Unreleased` — exactly this heading, at most once; notes accumulate here and are never
emitted (FR-8). Move them under a version heading when that version is released.

`## <major>.<minor>.<patch> — <YYYY-MM-DD>` — one per released version (FR-11), newest at the
top by convention (the generator sorts by semver regardless, FR-17). Strict three-integer
semver: no `v` prefix, no `-beta`/`+build` suffix. The date is the release date and must be a
real calendar day.

`- New: <text>` or `- Fixed: <text>` — the marker is the category. Any other bullet, a bare
`-`, an indented or continuation line, or prose after the first `##` heading is malformed and
the generator refuses to write. Prose above the first `##` (this preamble) is ignored.

## Unreleased

## 0.10.0 — 2026-11-12

- New: The Home and Transactions headers shrink as you scroll, leaving more room for your list.
- New: New Transaction now starts with the amount.
- New: First-time setup suggests income categories and offers Require unlock.
- New: When you pick a category in Categorize, you choose expense or income first.
- New: Categorize's review is grouped into sections, with dates.
- New: This month's comparisons on Home now use the same days of last month.
- New: Net Worth shows each figure once and names the time period.
- New: Adding an account shows its currency in the balance box.
- New: When Home is empty, you can import transactions from a CSV file.
- New: TalkBack now reads dates in full.
- New: Buttons are now fully rounded.
- Fixed: Dragging on the Net Worth chart now reads values instead of switching currency.
- Fixed: Opening Arcula from a link while a sheet is open no longer leaves the sheet on screen, and keeps what you typed.
- Fixed: Restoring a backup keeps a transaction's split people or account links matching its type.
- Fixed: An empty month's Net is now shown in your main currency.
- Fixed: Home with no transactions now shows an empty ring chart.
- Fixed: Back on Sync conflicts no longer asks to cancel while another screen is on top.
- Fixed: Discarding after a CSV import no longer leaves Transactions selecting rows.
- Fixed: At large text sizes, the results heading no longer breaks "transactions" mid-word.
- Fixed: TalkBack now stops on screen titles and the results count, and keeps its place in sheets.
- Fixed: With a keyboard, Tab now moves through the results heading in the order shown.
- Fixed: When the keyboard opens in a sheet, the field you are typing in stays in view.
- Fixed: Reopening Arcula no longer shows a blank screen or an old screen.

## 0.9.0 — 2026-11-04

- New: While filters are on, Transactions shows "{n} matching transactions", each filter as a pill, and Clear search.
- New: The filter icon shows a badge with how many filters are on.
- New: While Arcula connects to a backup, Back up now, Restore and Disconnect wait, with a "Connecting…" note.
- New: After you connect to an empty backup folder, Arcula makes the first backup right away.
- New: If a backup folder holds only some year files, Arcula pauses backups and asks before replacing them.
- New: In a split, a pasted figure the box can't store stays in the box and is flagged, so you can fix it.
- Fixed: Amounts typed as .5 or .50 now read as 0.5 and 0.50.
- Fixed: Reconnecting to the backup this phone made no longer asks you to choose; it just shows Synced.
- Fixed: Reconnecting to a different OneDrive account with the same name no longer says "Backup folder missing".
- Fixed: Data sync & backup no longer says "Synced" before anything has been backed up.
- Fixed: A backup that stops responding now gives up after about 30 seconds instead of waiting forever.
- Fixed: Duplicate no longer copies a transaction's linked account or transfer accounts.
- Fixed: Duplicate and Record repayment no longer say an account link was removed when there wasn't one.
- Fixed: Paste from the menu over a selected amount now replaces it.
- Fixed: In amount boxes, a minus or separator that isn't allowed no longer eats or misplaces your next digits.
- Fixed: TalkBack now says whose share each amount box in a split belongs to.
- Fixed: A search with no results now says No matches, including with Uncategorized on.
- Fixed: After a batch action shortens the Transactions list, it no longer shows blank space at the bottom.
- Fixed: The uncategorized count on Home no longer includes future-dated transactions, so it matches the list.
- Fixed: Pressing Back with a menu open now closes just the menu.
- Fixed: Pressing Back in Import from CSV now goes to the previous step instead of leaving the import.
- Fixed: Long account names are no longer cut off on Accounts and Net Worth.
- Fixed: At very large text sizes, a person's avatar on Who owes me stays round and fits their initial.

## 0.8.0 — 2026-10-27

- New: Batch edit has a Clear all notes button, to remove the note from every selected transaction.
- New: Long transaction names now wrap onto a second line instead of being cut short.
- Fixed: Restoring a backup could count an account's linked transactions twice, drop them, or mix currencies.
- Fixed: On Sync conflicts, a transaction's type, currency, amount and linked accounts now stay together.
- Fixed: On Sync conflicts, amounts in different currencies now show their own currency code.
- Fixed: TalkBack now says the currency with every amount when you use more than one currency.
- Fixed: After changing text size, display size or bold text, the form you were filling in no longer jumps to Amount.
- Fixed: Pressing Back during a slow save no longer offers to discard a change that gets saved anyway.
- Fixed: With a keyboard, tapping an amount box now selects the whole amount.
- Fixed: Selected text in amount boxes is now Arcula's indigo instead of teal.

## 0.7.0 — 2026-10-20

- New: Select several transactions and tap Edit to change them all at once, then review before applying.
- New: Transactions now show one year at a time, in month sections, with a chip to switch years.
- New: Net Worth now works out an account's earlier value from its linked transactions.
- New: The Home header compares this month with last month, like "↗ 7.8% vs September".
- New: Auto Categorize now learns from the categories you pick by hand in the same session.
- New: Categorize tells you when a category you were using is deleted on another device.
- New: Creating a category now opens with the keyboard up, ready to type the name.
- New: Sync conflicts show colours as swatches, with clearer labels.
- Fixed: A backup with a currency Arcula doesn't know no longer crashes screens; those items are kept and fixable.
- Fixed: First-time setup no longer picks a currency Arcula can't show, which broke adding an account.
- Fixed: Changing text size, display size or bold text no longer closes the form you were filling in.
- Fixed: Transfers now always say "Transfer" under their name, and TalkBack skips empty details.
- Fixed: Pasting an amount that differs by one digit is no longer ignored.
- Fixed: The error icon on split shares is no longer cut off.
- Fixed: TalkBack no longer says "Synced" while a found backup is waiting for your choice.
- Fixed: A person whose name starts with an emoji now shows that emoji in their avatar.
- Fixed: A payment method restored with a broken icon now shows a standard one.
- Fixed: On Sync conflicts, the "Same — kept" tag stays on the line with its label.

## 0.6.0 — 2026-10-16

- New: Picking an account now opens one searchable list, grouped by type, with archived accounts marked.
- New: Transaction details now start with a Category row showing the category's colour and icon.
- New: Transactions linked to an account now show just the account name under the description.
- New: The backup card says "Not backed up" when recent changes are only on this phone.
- New: Arcula flags an amount over its limit, or split shares over 5,000, before you save.
- New: CSV import errors now say which row has the problem.
- New: On Categorize, rows Auto Categorize couldn't match are highlighted for you to check.
- Fixed: If your Dropbox or OneDrive backup folder is deleted or restored, Arcula now explains what to do.
- Fixed: Changing a split's or repayment's currency now asks first, and pasted amounts are no longer dropped.
- Fixed: The Edit transaction sheet no longer vanishes, and its Payment Method field can create a new one.
- Fixed: Creating a category or payment method mid-entry now keeps your entry, and its account, as you left it.
- Fixed: Touching a sheet while it was opening could close it, or stop it opening again.
- Fixed: Transactions linked to an archived account now show the link and keep it when edited.
- Fixed: Long-pressing a transaction now selects it.
- Fixed: Deleting a category no longer offers that same category, and Auto Categorize works right away.
- Fixed: In dark mode, expense amounts on selected rows are easier to read.
- Fixed: TalkBack now reads headings and text inside sheets, and whole dialog messages.
- Fixed: Very large balances no longer break mid-number, lose a digit on charts, or push buttons off screen.
- Fixed: Long account names now wrap at the top of the account screen, and header buttons line up with titles.
- Fixed: At large text sizes, many more screens, rows and dialogs no longer cut off or break words.

## 0.5.0 — 2026-10-07

- New: Tap a type in the Net Worth Assets or Liabilities chart to see its accounts, then tap one to open it.
- New: The Net Worth donut charts have a thicker ring that is easier to tap.
- New: The income and expense card shows each change with an up or down arrow, or "No change".
- New: Arcula tells you when your backup folder holds extra copies it cannot clear.
- Fixed: Backing up after reconnecting Google Drive could leave a second set of backup files.
- Fixed: Arcula could occasionally crash while opening.
- Fixed: After changing text size, a finished CSV import could come back ready to import again.
- Fixed: Changing a display setting could reopen a screen you had left, and Back then closed the app.
- Fixed: A strip of tiny text could show above the Net Worth and account charts.
- Fixed: The split editor's totals still showed while Hide Amounts was on.
- Fixed: Every sheet now shows a title, and TalkBack starts on it when the sheet opens.
- Fixed: TalkBack said nothing when a save was refused because of an error.
- Fixed: TalkBack read stray symbols on some buttons, chips, tabs and menu choices.
- Fixed: TalkBack gave the date fields' calendar button no name.
- Fixed: With a keyboard, focus could escape a sheet, skip its top controls, or get stuck in the split editor.
- Fixed: With a keyboard, picking a suggestion or adding a person threw focus back to the top.
- Fixed: With TalkBack and arrow keys, the chart's dates were skipped.
- Fixed: Some titles and labels were drawn smaller than needed, even when they fit.
- Fixed: At large text sizes, Home with no transactions could not scroll and its button was cut off.
- Fixed: At large text sizes, the split editor and repayment sheet now show full names, percentages and headings.
- Fixed: At large text sizes, adding or editing a transaction no longer cuts dates, fields or buttons short.
- Fixed: At large text sizes, the reminder and person screens no longer cut words or run off the edge.
- Fixed: At large text sizes, the savings rate ran off its card and "Liabilities" broke mid-word.

## 0.4.0 — 2026-09-30

- New: Settings → Manage → People lets you review and remove people, with Undo.
- New: Income and expense card collapses, and shows your savings rate.
- New: Net worth shows donut charts of what you own and what you owe.
- New: Send a payment reminder to someone who owes you, by message or copy.
- New: Splits show how much of the amount is still unassigned or overpaid.
- New: Leaving a new or edited account or transaction with unsaved changes asks first.
- Fixed: Opening a sheet could steal the keyboard or screen reader focus.
- Fixed: The undo bar was hidden behind the keyboard.
- Fixed: Split amounts showed while Hide Amounts was on.
- Fixed: Opening New Transaction could briefly show the wrong defaults.
- Fixed: Removed people showed blank names in splits and balances.
- Fixed: Donut chart colours were hard to tell apart for colour-blind users.

## 0.3.0 — 2026-09-23

- New: The account chart shows dates and amounts along its edges.
- New: Touch and drag the account chart to read the balance on any day.
- New: An account shows how much its balance went up or down over the chosen period.
- New: The disconnect warning now names the cloud service you are leaving.
- Fixed: The account balance chart could show up blank.
- Fixed: A loan or card chart that crossed zero showed the same amount owed twice.
- Fixed: Loan and card charts were covered in a grey wash.
- Fixed: Dragging across the chart could scroll the page instead.
- Fixed: TalkBack could not read the chart's dates or amounts.
- Fixed: At large text sizes, the period buttons were squashed or wrapped one letter per line.
- Fixed: At large text sizes, the split editor cut people's names short.
- Fixed: Discarding a split now asks the right question for new and edited splits.
- Fixed: Backup conflict labels read as a garbled sentence.
- Fixed: Scheduled backups only ran if you opened the app.
- Fixed: A scheduled backup could stop itself partway through.
- Fixed: Opening the app during a scheduled backup could fail with a "locked" error.
- Fixed: Disconnecting Google Drive on one phone also signed out your other phones.

## 0.2.0 — 2026-09-16

- New: Give a category its own colour and pick an emoji for it.
- New: Create a category without leaving the transaction you are entering.
- New: Amounts group themselves as you type, in the number format your phone uses.
- New: Start typing a description and Arcula suggests ones you have used before.
- New: If a year of your backup cannot be read, Arcula tells you and helps you replace it.
- New: Remove a year you no longer want from your backup.
- New: When a backup and your phone disagree about an account, Arcula says what it kept.
- Fixed: Very large amounts are no longer saved as a slightly different number.
- Fixed: A backup could land in your cloud's Trash and still say it had synced.
- Fixed: Changing a split or a repayment and going back now asks before discarding it.
- Fixed: Typing while the split sheet is open no longer changes the amount behind it.
- Fixed: At large text sizes, amounts and titles no longer break mid-word or run off the edge.
- Fixed: A negative amount now shows its minus sign in the right place.
- Fixed: The last row of a list no longer sits under the navigation bar.
- Fixed: The balance chart on an account now draws.
- Fixed: An expense is marked as split before anyone repays it.
- Fixed: Reconnecting your cloud no longer strands a backup year you removed.
- Fixed: Cancelling the backup frequency picker no longer leaves a choice you did not make.
- Fixed: An account with a very long history opens instead of showing a blank screen.

## 0.1.0 — 2026-09-08

- New: Keep track of your accounts and balances, on your phone and available offline.
- New: Record what you earn and spend, and find any of it again by date, category or payment method.
- New: Split an expense with other people and see who owes what.
- New: Watch your net worth change over time.
- New: Bring in transactions from a CSV file, and sort a batch of them into categories at once.
- New: Back up your data to your own cloud storage, and restore it on another phone.
- New: Turn on Require unlock, so Arcula asks for your fingerprint or screen lock before it opens.
- New: See what changed in each update under Settings → App info → Version History.
