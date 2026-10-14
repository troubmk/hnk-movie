import numeral from "numeral";

export const fCurrency = (number) => {
  if (!number) {
    return "0";
  }
  return numeral(number).format("0,0.00");
}

export const fPercent = (number) => {
  if (!number) {
    return "0";
  }
    return numeral(number).format("0.00%");
}

export const fNumber = (number) => {
  if (!number) {
    return "0";
  }
  return numeral(number).format("0,0.00");
}

export const fShortenNumber = (number) => {
  if (!number) {
    return "0";
  }
  return numeral(number).format("0.00a");
}