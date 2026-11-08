# Jeremiah Benigno — Portfolio Website

A responsive portfolio for Jeremiah Benigno, Software Developer and Automation & AI Integration Developer. It includes seven project case studies, a resume PDF, and a certification gallery.

## Open locally

Double-click `index.html` to open it in your browser. No build tools, accounts, or API keys required. All website logic is static JavaScript and CSS.

For a development server (optional):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html` — home, featured projects, expertise, experience, and contact.
- `project.html?id=...` — detailed case studies generated from safe project descriptions in `case-studies.js`.
- `certificates.html` — credential cards and supplied certificate images.
- `resume.html` — embedded resume and PDF download.
- `styles.css` — site design, breakpoints, reduced-motion styling.
- `app.js` — navigation, filters, certificate preview.
- `case-studies.js` — project copy and case-study metadata.
- `assets/` — optimized images, favicon, public resume PDF.

## Publish with GitHub Pages

1. Create a **new personal portfolio repository** (do not push the original internal AI application source code).
2. Upload this website's contents to the repository root.
3. In the GitHub repository, go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select your primary branch and the root (`/`) folder, then save.
5. Once GitHub publishes the URL, test all pages on desktop and mobile.

## Customize

- Change the email and LinkedIn URL in the HTML files if needed.
- To edit project information, change the matching entry in `case-studies.js`, as well as the overview card in `index.html`.
- To add certificate images, place optimized image files in `assets/`, then add a matching card in `certificates.html`.
- Replace `assets/Jeremiah_Benigno_Resume.PDF` after revising your resume. Keep the filename capitalization for GitHub Pages.
- Keep the status on the overview card and the case study aligned when a workflow moves from pilot to production.

## Publication and confidentiality checklist

- [ ] Confirm company authorization for each included internal-project description or image.
- [ ] The original confidential AI project name **must remain omitted**.
- [ ] Do not publish internal source code, environment files, secrets, service credentials, production databases, or API tokens.
- [ ] Avoid client names, private workflow filters, personal customer data, internal URLs, and raw company exports.
- [ ] The Meta insights scenario is marked **inactive/prototype**; do not relabel as a live automation without validation.
- [ ] Keep outcome statements tied to evidence; do not invent performance metrics.
- [ ] Check every uploaded certificate for any identifiers you do not want public.

The included site uses generalized workflow diagrams built in HTML/CSS instead of sensitive internal scenario screenshots.

## New Zapier & IBM credentials

Six credentials were added to the certification gallery:
- Zapier Academy: Jumpstart (June 29, 2026), Building Basic Zaps (June 29, 2026), Building Intermediate Zaps (July 7, 2026).
- IBM SkillsBuild: Information Technology Fundamentals, Project Management Fundamentals, and AI Literacy (June 2026).

**Certificate originals were shown in chat but were not supplied as individual files in this build workspace.** For now, each entry uses clearly marked illustrative portfolio artwork. Original certificate images are not simulated.

To activate the six **real certificate image** previews, save each original screenshot in `assets/` using the following **base names** and any supported extension (`.png`, `.jpg`, `.jpeg`, or `.webp`):

```text
zapier-intermediate.png
zapier-basic.png
zapier-jumpstart.png
ibm-it.png
ibm-project.png
ibm-ai.png
```

The website will automatically load the original image and enable its **View certificate** button. No code edits are needed. The site checks PNG, JPG, JPEG, and WebP automatically. No conversion is needed. To protect privacy, consider removing embedded metadata before publishing.
