import { createStitches } from '@stitches/core';

const { css } = createStitches({
  theme: {
    colors: {
      $white: '#ffffff',
      '$gray-100': '#f9fbfd',
      '$gray-200': '#edf2f9',
      '$gray-300': '#e3ebf6',
      '$gray-400': '#d2ddec',
      '$gray-500': '#b1c2d9',
      '$gray-600': '#95aac9',
      '$gray-700': '#6e84a3',
      '$gray-800': '#3b506c',
      '$gray-900': '#283e59',
      $black: '#12263f',
    },
  },
});

export default css;
