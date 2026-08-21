# Harshil — Premium Portfolio

## Run locally in VS Code

1. Open this folder in VS Code.
2. Install the **Live Server** extension, or use any local static server.
3. Right-click `index.html` → **Open with Live Server**.
4. Replace all `[PLACEHOLDER]` content before publishing.

## Structure

- `index.html` — main page and SEO metadata
- `404.html` — custom 404 page
- `robots.txt` — crawler rules
- `sitemap.xml` — sitemap
- `assets/css/style.css` — design system and responsive styles
- `assets/js/main.js` — navigation, theme, reveal animation, filtering and form validation
- `assets/images/` — put project/profile/OG images here

## Personalization

Search the project for `[YOUR` and replace:
- Name / email / phone
- GitHub / LinkedIn / Instagram URLs
- Education, internships and certifications
- Verified project titles, screenshots and links
- Real statistics and testimonials

The Ahmedabad copy is already written naturally; edit it if your actual service area differs.

## Images

Put optimized WebP/AVIF/JPG files in `assets/images/`. Replace placeholder project thumbnails in `index.html` or the project renderer in `assets/js/main.js` with `<img loading="lazy" ...>` when adding real screenshots.

Recommended:
- profile: WebP, roughly 800px wide
- project screenshots: WebP/AVIF, roughly 1200px wide
- social/OG cover: JPG/PNG, 1200×630

## Contact form / security

The included form performs browser-side validation only. It does **not** send email. For production, connect it to a server-side endpoint or trusted form service.

Server-side processing should:
- Validate and sanitize every field again.
- Apply rate limiting / anti-spam protection.
- Use HTTPS.
- Keep API keys and SMTP credentials on the server only.
- Never trust client-side validation alone.
- Return safe, generic success/error messages.

Do not place private API keys in `main.js`.

## SEO launch checklist

1. Replace every `https://example.com/` URL with the real canonical domain.
2. Update the title and description to match the final positioning.
3. Create a real OG image at `assets/images/og-cover.jpg`.
4. Verify Person/ProfessionalService structured data with your actual public details.
5. Generate/update `sitemap.xml` with the real domain.
6. Submit the sitemap to Google Search Console and Bing Webmaster Tools.
7. Run Lighthouse on mobile and desktop.
8. Add real, descriptive image alt text.
9. Keep headings in a logical H1 → H2 → H3 hierarchy.
10. Publish only genuine testimonials, experience and measurable results.

## Deployment

### Netlify / Vercel
Upload the folder or connect the Git repository. No build command is needed because this is a static website.

### GitHub Pages
Push the files to a repository, then enable Pages from the repository's Pages settings.

### Traditional hosting
Upload the contents to `public_html` and configure your domain/HTTPS. Configure the server to serve `404.html` for missing pages.

## Performance notes

The site uses minimal JavaScript, CSS animations, responsive layouts, Bootstrap only for layout/navbar behavior, and deferred visual work. For production, self-host or optimize fonts where appropriate and serve compressed images over HTTPS.
