# Tortex OTT — Final Fixed GitHub Version

This version fixes the broken logo and admin login shown in the mobile screenshot.

## Admin
Open `admin/index.html`.

Username: `Rohan`
Password: `Rohan@5566`

The admin login now:
- Shows the correct Tortex logo using an embedded image (no relative-path 404).
- Pre-fills the requested credentials.
- Accepts the Sign In button and Enter key.
- Keeps a demo session in `sessionStorage`.

## Public site
`index.html` has the Tortex logo embedded as well, so it will still display even if the root logo file is moved. The root `tortex-logo.png` is also included.

## GitHub upload
Upload all files from the ZIP directly into the repository root:
- `index.html`
- `style.css`
- `script.js`
- `tortex-logo.png`
- `admin/`

Do not upload the ZIP itself as the website.

## Important
This is still a frontend/demo authentication system. Do not use the hard-coded admin password for a production OTT. Connect Supabase/Firebase/backend authentication for real security.
