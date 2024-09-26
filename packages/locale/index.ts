export { default as en } from "./en";
export { default as zhCn } from "./zh-cn";

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair;
};

export type Language = {
  name: string;
  el: TranslatePair;
};
