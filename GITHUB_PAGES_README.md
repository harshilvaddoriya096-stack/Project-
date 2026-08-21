# Harshil Premium Portfolio — GitHub Pages

## 1. Create GitHub repository

Create a new repository, for example:

`harshil-portfolio`

For a normal project repository, GitHub Pages URL will be:

`https://YOUR-USERNAME.github.io/harshil-portfolio/`

If you create a repository named exactly `YOUR-USERNAME.github.io`, the URL becomes:

`https://YOUR-USERNAME.github.io/`

## 2. Upload the files

Upload these files/folders to the ROOT of the repository:

- `index.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`
- `assets/`

Do NOT put `index.html` inside another folder.

Correct:

```text
harshil-portfolio/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── css/
    ├── js/
    └── images/
```

## 3. Enable GitHub Pages

Open your repository:

`Settings → Pages`

Under **Build and deployment**:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`
- Click `Save`

Wait a little while.

## 4. Your live URL

For repository `harshil-portfolio`:

```text
https://YOUR-USERNAME.github.io/harshil-portfolio/
```

Replace `YOUR-USERNAME` with your real GitHub username.

## 5. Important: update SEO URLs

Search `YOUR-USERNAME.github.io/YOUR-REPOSITORY` in `index.html`, `robots.txt`, and `sitemap.xml`.

Replace it with your actual GitHub Pages URL.

Example:

```text
https://harshilvaddoriya.github.io/harshil-portfolio/
```

## 6. Add your real information

Replace placeholders such as:

```text
[YOUR EMAIL]
[YOUR PHONE]
[YOUR GITHUB]
[YOUR LINKEDIN]
[YOUR PROJECT]
[YOUR PHOTO]
[YOUR VERIFIED EDUCATION]
```

Also replace sample testimonials with genuine testimonials only.

## 7. Add images

Put your files in:

```text
assets/images/
```

Example:

```text
assets/images/profile.webp
assets/images/project-01.webp
assets/images/project-02.webp
assets/images/og-cover.jpg
```

Then use them in the HTML with descriptive `alt` text.

## 8. GitHub Pages limitation

GitHub Pages is static hosting.

The current contact form validates in the browser but does not send email.

For a real contact form, connect the frontend to a secure backend or a form/email service. Never put private API keys, SMTP passwords, or secret credentials in JavaScript.

## 9. Custom domain

GitHub Pages supports custom domains.

Repository:

`Settings → Pages → Custom domain`

Then configure the DNS records at your domain provider.

## 10. Recommended publishing flow

```text
VS Code
   ↓
Git
   ↓
GitHub repository
   ↓
GitHub Pages
   ↓
HTTPS website
   ↓
Custom domain
```
