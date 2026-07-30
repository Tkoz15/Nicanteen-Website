# Shopify cart-permalink integration

Branch: `feature/shopify-cart-permalink`

## Plan
- [x] Add `lib/shopify.ts` — store domain + variant ID config + `buyNowUrl()` helper (cart permalink, no API keys)
- [x] Wire all "Shop Now" / "Buy Now" buttons in `app/page.tsx` (header, hero, product) to `buyNowUrl()`
- [x] Wire the "Shop Now" button in `components/layout/mobile-menu.tsx`
- [x] Update `.env.local.example` (`NEXT_PUBLIC_SHOPIFY_DOMAIN`)
- [x] Lint + build pass

## Blocked on user
- [ ] Paste the real **variant ID** into `lib/shopify.ts` (`NICANTEEN_VARIANT_ID`). Until then, buttons fall back to `https://nicanteen.myshopify.com/cart`.
  - Get it via `https://nicanteen.myshopify.com/products/<handle>.json` → `variants[0].id`, or have Claude fetch it once the product is published (store password must be off).

## Follow-ups (separate PRs)
- [ ] Add product **price** to the page (needs the price from Shopify).
- [ ] Reconcile the color UI: the product section shows 4 color swatches (Black/Green/Gray/White) but only **Black** exists — trim to Black or make it accurate.
- [ ] Replace product/hero placeholders with real photos + the video.
- [ ] Legal pages (Privacy, Terms, Shipping, Returns) — footer links are dead `#`.
- [ ] Age gate (21+) for a nicotine-adjacent product.

## Review
Cart-permalink chosen over the Storefront API for a single-SKU launch — zero keys/secrets, ships immediately, checkout stays on Shopify's hosted PCI-compliant page. The old `NEXT_PUBLIC_SHOPIFY_URL` + raw `window.open` links were replaced by the `buyNowUrl()` helper so there is one place to update the domain/variant. Safe fallback to the store cart page while the variant ID is unset.
