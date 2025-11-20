# Portfolio Website

A personal portfolio website built with Astro and Tailwind CSS, hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The site is configured for GitHub Pages with automatic deployment via GitHub Actions.

### Setup Instructions:

1. **Update `astro.config.mjs`:**
   - Change `site` to your GitHub Pages URL (e.g., `https://yourusername.github.io`)
   - If your repository is named `yourusername.github.io`, change `base` to `/`
   - If your repository is named `Portfolio` (or anything else), keep `base` as `/Portfolio`

2. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Push to GitHub:**
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy your site

4. **Access your site:**
   - Your site will be available at `https://yourusername.github.io/Portfolio` (or just `https://yourusername.github.io` if base is `/`)

