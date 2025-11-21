# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ad4b17d0-96b2-4ebe-9c1c-94a5496a9297

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ad4b17d0-96b2-4ebe-9c1c-94a5496a9297) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Environment variables

Search-console verification tokens and Airtable credentials are injected at build time. Copy `env.example` to `.env` (or set the variables in your hosting provider) and replace the placeholders with your real values:

```
VITE_GSC_VERIFICATION=your-google-search-console-token
VITE_BING_VERIFICATION=your-bing-webmaster-token
VITE_AIRTABLE_TOKEN=your-airtable-personal-access-token
VITE_AIRTABLE_BASE_ID=your-airtable-base-id
VITE_AIRTABLE_TABLE_ID=your-airtable-table-id
```

Once the values are provided, redeploy so the `<meta>` tags in `index.html` are accurate and the contact form can sync leads to Airtable.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Lovable publish button
Open [Lovable](https://lovable.dev/projects/ad4b17d0-96b2-4ebe-9c1c-94a5496a9297) and click Share → Publish for a quick hosted preview (no custom domain on the free plan).

### GitHub Pages (with custom domain support)
This repo now ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the Vite app and deploys `dist` to GitHub Pages.

Steps:
1. Push this repository to GitHub.
2. In the repo settings → **Pages**, set “Source” to **GitHub Actions**.
3. Add the required secrets in **Settings → Secrets → Actions** so the workflow can embed runtime values:  
   - `VITE_GSC_VERIFICATION`  
   - `VITE_BING_VERIFICATION`  
   - `VITE_AIRTABLE_TOKEN`  
   - `VITE_AIRTABLE_BASE_ID`  
   - `VITE_AIRTABLE_TABLE_ID`
4. Every push to `main` will automatically build and deploy to Pages. The workflow output lists the live URL.

### Pointing your HostGator domain at GitHub Pages
Once the Pages URL is live:
1. In GitHub → Settings → Pages, enter your custom domain (e.g. `abs-automation.com`). GitHub will show the exact DNS records it expects.
2. In HostGator, open the DNS editor for the domain and add:
   - **A** records for `@` pointing to the four GitHub Pages IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).
   - **CNAME** for `www` pointing to `<your-username>.github.io`.
3. Wait for propagation (usually within an hour), then click “Check again” in GitHub Pages to issue SSL.

From there, both `https://yourdomain.com` and `https://www.yourdomain.com` will serve the site deployed from this repo.
