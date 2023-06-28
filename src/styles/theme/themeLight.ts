import { lighten } from 'polished';
import baseTheme from './baseTheme';
//TYPES
import { IShadowOptions, ICustomShadowOptions } from './theme.types';
//Name color identify in: https://www.color-name.com/hex

const others = {
  yellow: {
    1: '#a68e1c',
    2: '#fff1a0',
    3: '#fff8d0',
  },
  blue: {
    1: '#F0F8FF',
    2: '#0077F4',
    3: '#1F76F0',
    4: '#1C3C50',
    5: '#C8D4DD',
    6: '#0083ff',
    7: '#70cff7',
    8: '#0083ee',
    9: '#a1d9ff',
    10: '#c2e6ff',
  },
  purple: {
    1: '#623CEA',
    2: '#4923D2',
    3: '#3715B0',
  },
  red: {
    1: '#D92B6A',
  },
  brown: {
    1: '#57001F',
    2: '#4B330E',
  },
  pink: {
    1: '#FFADCB',
  },
  green: {
    1: '#7CD3A1',
    2: '#00b78f',
    3: '#9fefdf',
    4: '#c2f4ea',
  },
  gray: {
    1: '#f7f8fb',
    2: '#838eab',
    3: '#d5d9dd',
    4: '#A6A6A6',
    5: '#929292',
    6: '#808080',
    7: '#5B5B5B',
    8: '#353535',
    9: '#1C1B1F',
    10: '#3D3D3D',
    11: '#3F3F3F',
    12: '#0B0B0B',
    13: '#F2F2F2',
    14: '#919EAB',
    15: '#121212',
    16: '#EBEBEB',
    17: '#77848c',
    18: '#d0dee7',
    19: '#e8eef3',
  },
};

const primary = {
  main: others.yellow[1],
};

const info = {
  main: others.blue[2],
};

const success = {
  main: others.green[1],
};

const warning = {
  main: others.yellow[1],
};

const error = {
  main: others.red[1],
};

const common = {
  black: '#000000',
  white: '#FFFFFF',
};

const text = {
  primary: common.black,
  secondary: others.gray[7],
  disabled: 'rgba(91, 91, 91, 0.8)',
};

const background = {
  paper: others.gray[1],
  default: others.gray[1],
  neutral: common.white,
};

//***********************************************
// GRADIENTS
//***********************************************

const gradients = {
  gradient01: `linear-gradient(86.46deg, ${others.yellow[1]} 0%, ${others.yellow[1]} 65.35%)`,
};

//***********************************************
// COLORS
//***********************************************

const colors = {
  common: common,
  primary: primary,
  error: error,
  warning: warning,
  info: info,
  success: success,
  others: others,
  text: text,
  backgrounds: background,
};

//***********************************************
// SHADOWS
//***********************************************

const createShadows = (color: string): IShadowOptions => {
  const transparent = lighten(0.2, color);

  return {
    n1: `0 1px 2px 0 ${transparent}`,
    n4: `0 4px 8px 0 ${transparent}`,
    n8: `0 8px 16px 0 ${transparent}`,
    n12: `0 12px 24px -4px ${transparent}`,
    n16: `0 16px 32px -4px ${transparent}`,
    n20: `0 20px 40px -4px ${transparent}`,
    n24: `0 24px 48px 0 ${transparent}`,
    primary: `0 15px 30px 0 ${lighten(0.2, others.gray[6])}`,
    info: `0 8px 16px 0 ${lighten(0.2, colors.info.main)}`,
    success: `0 8px 16px 0 ${lighten(0.2, colors.success.main)}`,
    warning: `0 8px 16px 0 ${lighten(0.2, colors.warning.main)}`,
    error: `0 8px 16px 0 ${lighten(0.2, colors.error.main)}`,
  };
};

const customShadows = (color: string): ICustomShadowOptions => {
  const transparent = lighten(0.2, color);

  return {
    n1: `0 1px 2px 0 ${transparent}`,
    n4: `0 4px 8px 0 ${transparent}`,
    n8: `0 8px 16px 0 ${transparent}`,
    n12: `0 12px 24px -4px ${transparent}`,
    n16: `0 16px 32px -4px ${transparent}`,
    n20: `0 20px 40px -4px ${transparent}`,
    n24: `0 24px 48px 0 ${transparent}`,
  };
};

//***********************************************
// THEME
//***********************************************

const theme = {
  components: {
    inputs: {},
    button: {
      backgrounds: {
        gradient: `linear-gradient(180deg, ${others.yellow[1]}  0%, ${others.yellow[1]} 100%)`,
      },
    },
  },
  pallete: {
    colors: colors,
    gradients: gradients,
    shadows: {
      default: createShadows(others.gray[5]),
      custom: customShadows,
    },
  },
};

const themeLight = { ...baseTheme, ...theme };

export default themeLight;
