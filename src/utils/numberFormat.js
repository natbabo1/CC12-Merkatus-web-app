export const toBaht = (input) =>
  new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0
  }).format(+input);

export const toComma = (input) => new Intl.NumberFormat("th-TH").format(+input);
