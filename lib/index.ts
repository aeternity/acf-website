import getConfig from "next/config";

const assetPrefix = getConfig().publicRuntimeConfig.assetPrefix;
export const assetUrl = (url: string) => {
  return `${assetPrefix}${url}`;
};
