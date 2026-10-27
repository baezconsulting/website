# Baez Consulting website

React + Vite + Tailwind CSS + Motion. Static site, no database.

## Run locally (Mac)

```bash
cd ~/Downloads/baez-consulting
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

1. Run `npm run build`.
2. Upload the contents of `dist/` (not the folder itself) to the site root using the control panel's File Manager or FTP.
3. On each update, rebuild and replace the old `assets` folder.
