import type {} from '@mui/material/themeCssVarsAugmentation';
import { PaletteMode } from '@mui/material/styles';
import { getDesignTokens } from './themePrimitives';
import { datePickersCustomizations } from './customizations/datePicker';


export default function getTheme(mode: PaletteMode){
  return {
    ...getDesignTokens(mode),
    cssVariables: true,
    components: {
      ...datePickersCustomizations
    }, 
  };
}