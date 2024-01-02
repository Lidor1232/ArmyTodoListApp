import {COLORS} from '../colors/colors';

export const darkSystemColors = {
  white: '#e7e7e7',
  black: '#1c1c1e',
  grey: '#48484e',
  lightGrey: '#898989',
  purple: '#c05bf2',
  deepPurple: '#6e0a9c',
  blue: '#0e84fc',
  green: '#65d35a',
  indigo: '#5e5be6',
  orange: '#f49e31',
  pink: '#ec495c',
  red: '#f02d1c',
  teal: '#5ed4ff',
  yellow: '#fcd633',
};

export const themeColors = {
  title: COLORS.black,
  subtitle: COLORS.black,
  text: COLORS.black,
  background: COLORS.white,
};

export const appTheme = {
  dark: true,
  colors: {
    primary: darkSystemColors.black,
    background: themeColors.background,
    card: themeColors.background,
    text: themeColors.text,
    border: 'transparent',
    notification: 'rgb(255, 69, 58)',
  },
};
