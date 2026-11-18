# Arcula — Privacy Policy

**Effective date:** 24 July 2026
**Last updated:** 24 July 2026

---

## The short version

Arcula is an offline-first personal finance app. **Your financial data stays on your
device.** There is no Arcula account to create, no Arcula server, and we do not collect,
receive, see, or sell your data.

- Everything you enter — accounts, balances, transactions, categories, and settings — is
  stored **only on your device**, encrypted.
- Backing up to the cloud is **optional**. If you turn it on, your data is saved as a single
  file in **your own** cloud account (Google Drive, OneDrive, Dropbox, or iCloud). We never
  see it.
- There are **no analytics, no ads, no trackers, and no third-party data collection** in
  the app.

The rest of this policy explains the detail.

---

## 1. Who this policy is for

This policy describes how the Arcula mobile app ("Arcula", "the app", "we", "us") handles
your information. Arcula is published by **Amy Lo**.

It applies to the Arcula app on Android and, when released, iOS. It does not cover the
third-party cloud services you may connect the app to — those are governed by their own
privacy policies (see Section 6).

## 2. Our approach: on-device by design

Arcula has **no backend server and no user accounts.** We do not operate a service that
stores your data. Because of this, in normal use we never receive your financial
information at all — it never leaves your device unless *you* choose to back it up to your
own cloud (Section 5) or share a file yourself.

## 3. The information in the app and where it lives

Everything below is stored **locally on your device**, in a database that is **encrypted at
rest**. The encryption key is held in your device's secure hardware-backed keystore
(Android Keystore / iOS Keychain), not in the app's code or ordinary settings.

| What | Examples | Where it's stored |
|------|----------|-------------------|
| Financial data you enter | Accounts and their balances over time, transactions, amounts, categories, notes | On your device, encrypted |
| Preferences | Currencies, display defaults, the "hide amounts" setting | On your device |
| Imported files | Rows from a CSV file you choose to import | Read on your device; the parsed data is stored like any other financial data |
| Cloud connection tokens | The access token for the one cloud provider you connect for backup | On your device, in the secure keystore (see Section 5) |

We do **not** collect names, email addresses, phone numbers, contacts, location, advertising
identifiers, or any device identifiers for tracking. The app does not ask you to sign in to
Arcula, because there is nothing to sign in to.

## 4. Importing a CSV file

If you import transactions from a CSV file, the app reads the file **you pick** and processes
it entirely on your device. The file is not uploaded anywhere by Arcula.

## 5. Optional cloud backup

Backup is off until you turn it on. When you connect a cloud provider so the app can protect
your data against loss:

- **It's your cloud.** The backup is a single file saved to **your own** account with the
  provider you choose — on Android: Google Drive, OneDrive, or Dropbox; on iOS: iCloud,
  OneDrive, or Dropbox. Arcula does not have its own copy and does not receive the file.
- **Minimal access.** The app requests only the permission needed to read and write its own
  backup file in an app-designated folder (for example, Google's `drive.file` scope, a
  Dropbox App folder, or OneDrive's app-folder scope). It cannot browse the rest of your
  cloud storage.
- **You own and control the file.** The backup lives in a folder you can open in your cloud
  account. You can copy, move, or delete it yourself at any time. Because it is your file,
  you are responsible for keeping it.
- **The backup file is not encrypted by the app, by design.** It contains balances and
  transactions over time — not card numbers, account numbers, or login credentials. It is
  protected by your own cloud account's security. (Your *on-device* data remains encrypted
  at rest regardless.)
- **Only backup tokens are kept, on your device.** To keep the backup current, the app stores
  the provider's access token in your device's secure keystore. It is scoped only to the
  backup file, and it is **deleted when you disconnect** the provider. No other provider
  credentials are retained.
- **Disconnecting.** You can disconnect the provider at any time from Settings. This stops
  backups and clears the stored token. Your on-device data is unaffected.

Authorising a provider happens through that provider's own standard sign-in. We do not see
your cloud password.

## 6. Third-party services

The only third parties Arcula interacts with are the **cloud storage providers you choose to
connect** for backup. When you connect one, your use of that provider is governed by its own
terms and privacy policy:

- Google Drive — https://policies.google.com/privacy
- Microsoft OneDrive — https://privacy.microsoft.com/privacystatement
- Dropbox — https://www.dropbox.com/privacy
- Apple iCloud — https://www.apple.com/legal/privacy/

Arcula does **not** include third-party analytics, advertising, crash-reporting, or tracking
SDKs.

## 7. Diagnostics

Arcula keeps a small, local technical log (app version, operating system, and recent error
messages) to help troubleshoot problems. This log lives **only on your device** and **never
contains your financial data.**

It is shared only if **you** tap **Export Diagnostics** in Settings → About and then choose,
in your device's share sheet, where to send it. Nothing is sent automatically, and it is not
sent to us unless you deliberately send it to us.

## 8. Permissions the app uses

Arcula requests only what its features need:

- **Files / document picker** — so you can select a CSV to import and so the app can write its
  backup file to your chosen cloud.
- **Network access** — used only when you connect a provider or back up/restore; the app is
  otherwise fully usable offline.
- **A secure in-app browser** — to complete the cloud provider's sign-in when you connect a
  backup.

Arcula does not request access to your camera, microphone, location, contacts, or photos.

## 9. Data retention and deletion

- **Local data** stays on your device until you delete it in the app or uninstall Arcula.
  Uninstalling removes the app's on-device data, including the encrypted database and the
  stored backup token.
- **Your cloud backup** is your file. To remove it, delete it from your cloud account (and/or
  disconnect the provider in Settings). Uninstalling the app does not delete a backup already
  saved in your cloud, because that copy belongs to you.

Because we hold none of your data ourselves, there is nothing on our side to request, export,
or delete — it is already entirely in your hands.

## 10. Security

- On-device data is stored in an **encrypted (SQLCipher) database**; the key is kept in the
  operating system's secure keystore.
- Cloud backup tokens are stored in the secure keystore and are limited to the backup file.
- Connections to your cloud provider use the provider's standard, encrypted OAuth sign-in.

No method of storage or transmission is perfectly secure, but Arcula's on-device-first design
means there is no central store of user data to breach.

## 11. Children's privacy

Arcula is a general-audience finance tool and is not directed at children. It does not
knowingly collect information from children under the age required by the law of **Canada**.
Because the app does not collect data to begin with, it holds no such information.

## 12. Changes to this policy

If we change how the app handles data, we will update this policy and revise the "Last
updated" date above. Material changes will be reflected in the app before the changed
behaviour takes effect.

## 13. Contact

Questions about this policy or about privacy in Arcula:

**Amy Lo** — **amy.arcula@gmail.com**
