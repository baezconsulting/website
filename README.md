# Baez Consulting website

React + Vite + Tailwind CSS + Motion. Static site, no database.

## Run locally (Mac)

```bash
cd ~/projects/baez-consulting
npm install
npm run dev
```

Open http://localhost:5173.

## Edit content

All copy, services, expertise and the bio are in `src/site.js`.

- **Headshot:** `public/emilio.png`. To swap it, replace that file (or point `leader.photo` at a new one).

## Contact form

1. Create a free form at https://formspree.io with contact@baezconsulting.io as the recipient.
2. Create a `.env` file in the project root containing `VITE_FORMSPREE_ID=your_form_id`.
3. Rebuild.

Without a Formspree ID, the form opens the visitor's email app addressed to contact@baezconsulting.io.

## Deploy to SmarterASP.NET

Deployment is automatic: every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads `dist/` to SmarterASP.NET over FTPS using lftp. You can also run it by hand from the repo's **Actions** tab.

The FTP host (`winXXXX.site4now.net`) is set in the workflow file. Required GitHub repo secrets (Settings → Secrets and variables → Actions):

- `FTP_USERNAME` / `FTP_PASSWORD` – the site's FTP account
- `VITE_FORMSPREE_ID` – optional, enables the contact form

Optional repo variable `FTP_SERVER_DIR` if the FTP login doesn't land in the site root (e.g. `/site1/`). Defaults to `./`.
