# CacaoGuard

AI-powered Black Pod Disease detection dashboard for Initao Cacao Farm — rebuilt with **React + Vite**.

## Pages

| Area | Pages |
| --- | --- |
| Public | Landing (`/`), Login, Sign up, Forgot password |
| Admin | Dashboard, Monitoring, Farm, Farm detail, Reports, Alerts, Users, Settings |
| Farmer (`/farmer/...`) | Dashboard, Monitoring, My Farm, Scan History, Alerts, Profile |

Demo login: any email containing `admin` opens the admin dashboard; anything else opens the farmer dashboard.

## Project structure

```
src/
  App.jsx              routes
  components/          AppShell (sidebar + top bar), AdminLayout, FarmerLayout, Icon, Img, Toast
  context/             FarmerAlerts (shared alert state + sidebar badge)
  pages/               auth/, admin/, farmer/, shared/, Landing.jsx
  styles/              site.css (landing + login pages), app.css (dashboards)
public/images/         photos used by the pages
```

## Run it on your computer

```
npm install
npm run dev
```

## Publish on GitHub Pages

1. Upload everything in this folder to your repository (do **not** upload `node_modules`).
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to turn green (about a minute).
5. Your site will be at `https://<your-username>.github.io/cacaoguard-site/`.

The site uses `#` URLs (for example `.../#/login`) so page refreshes work on GitHub Pages.

## Images

`hero.jpg` and the small `icon-*.png` files are not in `public/images/` yet. Until you add them,
the site loads them from the original online links (same as before). See `public/images/README.txt`.
