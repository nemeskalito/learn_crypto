import { cryptoAssets, cryptoData } from "./data.js";

export const fakeFetchCrypto = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cryptoData), 2000);
  });
};
export const fetchAssets = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cryptoAssets), 2000);
  });
};
