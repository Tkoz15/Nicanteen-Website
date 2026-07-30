// Shopify cart-permalink integration.
//
// Cart permalinks pre-load a product into the buyer's cart and hand them off to
// Shopify's hosted, PCI-compliant checkout — no API keys or secrets required.
// Permalink format:  https://<store-domain>/cart/<variantId>:<quantity>

// The store's .myshopify.com domain. Override in production via env if needed.
export const SHOPIFY_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'nicanteen.myshopify.com'

// The numeric variant ID for the Nicanteen carrier (single "Black" version).
// How to get it once the product is published to the Online Store:
//   visit  https://nicanteen.myshopify.com/products/<handle>.json
//   and copy  variants[0].id
// TODO: paste the real variant ID here (buttons fall back to the /cart page until then).
export const NICANTEEN_VARIANT_ID = ''

/**
 * Build a Shopify cart permalink that loads `quantity` of `variantId` into the
 * cart and sends the buyer to Shopify's hosted checkout.
 * Falls back to the store's cart page while no variant is configured.
 */
export function buyNowUrl(
  variantId: string = NICANTEEN_VARIANT_ID,
  quantity = 1
): string {
  if (!variantId) return `https://${SHOPIFY_DOMAIN}/cart`
  return `https://${SHOPIFY_DOMAIN}/cart/${variantId}:${quantity}`
}
