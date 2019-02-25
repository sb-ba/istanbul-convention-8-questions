const SCREEN_SIZES = [['phone', 500], ['desktop', 1024]];

export const colors = {
  answer1: '#123751',
  answer2: '#00838F',
  answer3: '#1B7EAC',
  brand: 'rgb(18, 55, 81)',
  darkGrey: '#4A4A4A',
  lightGrey: '#E5E4E4',
  green: '#118566',
  red: '#D4310D'
};

export const fonts = {
  bitter: {
    family: 'Bitter, serif',
    weight: {
      bold: 700
    }
  },

  openSans: {
    family: 'Open Sans, sans-serif',
    weight: {
      semibold: 600,
      bold: 700,
      extraBold: 800
    }
  }
};

export const mq = SCREEN_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});
