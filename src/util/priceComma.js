import { PRICE_COMMA, PRICE_UNCOMMA } from "../constant/regex";

export function PRICE_COMMA_SETTING(priceValue) {
  const comma = (priceValue) => {
    priceValue = String(priceValue);
    return priceValue.replace(PRICE_COMMA, "$1,");
  };
  const unComma = (priceValue) => {
    priceValue = String(priceValue);
    return priceValue.replace(PRICE_UNCOMMA, "");
  };
  return comma(unComma(priceValue));
}
