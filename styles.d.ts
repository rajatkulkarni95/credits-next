// import original module declarations
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    sizing: {
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
      six: string;
      seven: string;
      eight: string;
    };
    colors: {
      text: {
        default: string;
        secondary: string;
        active: string;
        negative: string;
        highlight: string;
        disabled: string;
      };
      layout: {
        background: string;
        foreground: string;
        border: string;
        accent: string;
      };
    };
  }

  export interface FontTheme {
    face: string;
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xxl: string;
    };
    weights: {
      regular: number;
      medium: number;
      bold: number;
    };
  }
}
