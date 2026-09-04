# Tortex OTT — Complete GitHub Starter

## Included
- `index.html` — public OTT homepage
- `style.css` / `script.js` — public UI and interactions
- `admin/index.html` — Admin dashboard
- `admin/admin.css` / `admin/admin.js` — Admin UI and demo actions
- `assets/tortex-logo.png` — provided Tortex logo

## Admin Panel
Open `admin/index.html` locally to preview the dashboard.

The admin interface includes:
- Dashboard metrics
- Content library
- Movie/series management UI
- Add/edit/delete content dialogs
- Banner quick action
- Users
- Subscription plans
- Analytics
- Settings

## GitHub Pages
Upload the project to a GitHub repository and enable Pages from the `main` branch and root folder. The public site will be available at the repository Pages URL. The admin preview is under `/admin/`.

## Production backend still required
This is a frontend GitHub starter, not a production streaming backend. For a real OTT service, connect:
- Authentication and roles
- Database
- Secure video storage/CDN
- Video transcoding and adaptive streaming
- DRM where required
- Payment gateway and subscription webhooks
- Admin API
- Signed media URLs
- Rate limiting, logging and security
- Legal content/distribution rights
