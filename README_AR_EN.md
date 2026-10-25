# Red Roosters — refactored package

## Files
- `index.html`: page markup, SEO metadata, Restaurant/Menu JSON-LD, links to external assets.
- `style.css`: all original inline CSS consolidated into one file, preserving original cascade order, plus accessibility/performance rules.
- `app.js`: original inline JavaScript consolidated in original order, plus menu-data hydration and service-worker registration.
- `menu.json`: structured catalog extracted from the current website cards; includes `id`, `section`, `name`, `nameEn`, `description`, `price`, `priceLabel`, `image`, `classes`.
- `manifest.webmanifest`, `service-worker.js`, `icons/`: installable PWA starter and same-origin asset caching.
- `analytics-config.js`: opt-in placeholder; sends no tracking data until configured.
- `optimize_images.py`: optional script to download and generate WebP image variants on a machine with internet access.
- `Red_Roosters_Menu.xlsx`: the source menu spreadsheet is included separately in the ZIP.

## Important compatibility note
The current website contains specialized layouts (offers, trays, school deals) and scripts that rely on the existing DOM. To avoid breaking ordering, cart, favorites, and the loyalty flow, the HTML cards are retained as a server-rendered fallback and `menu.json` hydrates the standard card fields when it loads. This is a safe first migration step; it means the full menu is not yet rendered exclusively from JSON. The next step for a truly single-source catalog is to migrate specialized card templates one category at a time and remove their duplicated HTML only after browser regression tests.

## Deploy
1. Upload all files and folders together to the same hosting directory (GitHub Pages root for this site).
2. Keep `index.html`, `style.css`, `app.js`, `menu.json`, `manifest.webmanifest`, and `service-worker.js` at the same relative paths.
3. The PWA service worker requires HTTPS; GitHub Pages provides HTTPS.
4. After publishing, test cart, item modal, search, favorites, WhatsApp checkout, coupon flow, loyalty points, and phone-size layout. Clear site cache once after deployment if old CSS/JS is retained.

## Images
Images still reference the existing postimg/ibb hosts because this package cannot upload to a third-party image CDN on your behalf. Run `python optimize_images.py` from an internet-connected environment to create WebP variants; then upload the generated `images/` folder and review the resulting `menu.json` paths. The script currently writes desktop/mobile files, but production responsive `<picture>` markup should be enabled after those files are hosted.

## Security / operations
- Client-side JavaScript cannot protect a public Google Apps Script endpoint from fake requests. Keep manual order confirmation while traffic is small. Before scaling, validate requests server-side, add idempotency/rate limits and secret-backed verification (never embed a secret in `app.js`), and consider phone OTP through an SMS/WhatsApp provider.
- WhatsApp text messages are not a central order-management system. A dashboard with server-side order storage and order statuses is a separate backend project.
- Analytics remains disabled until you supply a real property/domain ID and consent/privacy requirements are confirmed.
- Restaurant structured data includes the currently coded phone number and website URL. Verify the details and branch-specific address/hours before launch; no branch address was inferred into Schema.
