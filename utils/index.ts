export const isClientSide = typeof window !== 'undefined';

export const getClientURL = () => {
  if (isClientSide) {
    return window.location.href;
  }
  return null;
};


export const calculateContrastColor = (background: string) => {
  const [r, g, b] = background.match(/\w\w/g).map(hex => parseInt(hex, 16));
  // Calculate the relative luminance of the background color
  const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
  // Determine the contrast color based on the luminance value
  const contrastColor = luminance > 0.7 ? '#000000' : '#FFFFFF';
  return contrastColor;
}
