//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const Noir = definePreset(Aura, {
  semantic: {
    // primary: {
    //   50: '{zinc.50}',
    //   100: '{zinc.100}',
    //   200: '{zinc.200}',
    //   300: '{zinc.300}',
    //   400: '{zinc.400}',
    //   500: '{zinc.500}',
    //   600: '{zinc.600}',
    //   700: '{zinc.700}',
    //   800: '{zinc.800}',
    //   900: '{zinc.900}',
    //   950: '{zinc.950}',
    // },
    tpurple:"#9147ff",
    colorScheme: {
      light: {
        primary: {
          color: '#09090b',
          inverseColor: '#f6f6f4',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}',
        },
        secondary: {
          color: '#18181b',
          inverseColor: '#e7e7e4',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}',
          lightColor: '#53535f61',
          lightInverseColor: '#efeff1',
        },

        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '#f6f6f4',
          inverseColor: '#09090b',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}',
        },
        secondary: {
          color: '#e7e7e4',
          inverseColor: '#18181b',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}',
          lightColor: '#efeff1',
          lightInverseColor: '#53535f61',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
});
