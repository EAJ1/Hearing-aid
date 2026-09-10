# Aawaj Hearing Aid Company Website

A static website presenting hearing devices, accessories, services, and contact information. Built with HTML, CSS, and vanilla JavaScript, with Roboto loaded from Google Fonts when online.

## Getting started

Open `index.html` in a modern browser. No build step or server is required.

## Project structure

- `index.html`: page content and contact configuration
- `styles.css`: layout, responsive styles, and CSS animations
- `script.js`: email draft handling
- `TODO.md`: remaining launch checks
- Image files (`.jpg`, `.jpeg`, `.webp`) live in the project root.

## Contact configuration

Contact details and opening hours are placeholders pending confirmation. The form is disabled by default to avoid losing inquiries.

Set `data-contact-email=""` on the form in `index.html` to a verified email address and update the displayed contact details. JavaScript then enables the form. Submitting opens an email draft in the visitor's configured email application; the visitor must send it there. This website does not send or store inquiries and has no backend. Without JavaScript, the form remains disabled.

## Design and accessibility

The site has responsive product and service grids, a single-column contact section on smaller screens, wrapping navigation, labeled form controls, and keyboard focus indicators. CSS respects reduced-motion preferences and includes a forced-colors adjustment. Browser and assistive-technology testing are still required before claiming full accessibility support.

## Customization

Edit content and local image paths in `index.html`, and colors and layout in `styles.css`. The main mobile breakpoint is 768px. Unverified testimonials, statistics, certification badges, warranty, and support promises have been removed; only publish verified business claims and authorized customer stories.

## Validation

Run `node --check script.js` to check JavaScript syntax. Before launch, test keyboard navigation, narrow and desktop layouts, reduced motion, and the configured email draft flow in real browsers. Confirm contact information and image usage rights.

## License

This project is proprietary to Aawaj Hearing Aid Company.

## Deploy to GitHub Pages

The repository is `https://github.com/EAJ1/Hearing-aid`.

1. Commit and push the website files to `main`.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/(root)**, then click **Save**.
5. Wait for the Pages deployment to finish in the **Actions** tab.

The expected site address is https://EAJ1.github.io/Hearing-aid/. Future pushes to `main` redeploy the site automatically once Pages is enabled. The root `.nojekyll` file tells Pages to serve the static files without Jekyll processing.

The contact form remains disabled until a verified recipient is configured; deployment does not add an email backend.

### Browser checks completed

Headless Chrome checks passed at viewport widths of 320, 375, 768, 1024, and 1440 pixels: no horizontal overflow or JavaScript runtime errors, a working first-tab skip link, and a single-column contact section at mobile widths. Reduced-motion and forced-colors modes were exercised. Safari, Firefox, screen-reader testing, and sending through a configured email application remain unverified.
