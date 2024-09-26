const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
};
export const useId = (namespace: string = "xzw"): string => {
  const iDfn = () => `${namespace}-id-${defaultIdInjection.prefix}-${defaultIdInjection.current++}`;
  return iDfn();
};
export default useId;
