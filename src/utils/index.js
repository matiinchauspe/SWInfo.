import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => twMerge(clsx(inputs));

export const formatNumber = (number) => new Intl.NumberFormat().format(number);

export const buildUrl = (url, params) => {
  const urlObject = new URL(url);

  Object.keys(params).forEach((key) => {
    urlObject.searchParams.set(key, params[key]);
  });

  return urlObject.toString();
};
