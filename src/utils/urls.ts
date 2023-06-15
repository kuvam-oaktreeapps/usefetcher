export const getCleanUrl = (url: string) => {
  return url.replace(/\/$/g, "");
};

export const getSlashedUrl = (url: string) => {
  if (url.startsWith("/")) return url;
  return `/${url}`;
};
