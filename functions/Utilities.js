export function formatPrice(price, currency) {
  return Number(price).toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
}
