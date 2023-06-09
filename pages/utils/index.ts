export const isClientSide = typeof window !== 'undefined';

export const getClientURL = () => {
  if (isClientSide) {
    return window.location.href;
  }
  return null;
};
