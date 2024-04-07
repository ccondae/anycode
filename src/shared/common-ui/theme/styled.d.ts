import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      tabBar: string,
      main:string,
      secondary:string,
      action:string,
      white: string,
      gray: string;
      black:string,
      view: string,
      answer: string,
      like: string,
      gray:string,
    },
    fontSize: {
      headline1: string,
      headline2: string,
      headline3:string,
      headline4: string,
      headline5: string,
      headline6: string,
      subtitle1: string,
      subtitle2: string,
      body1:string,
      body2: string,
      button:string,
      caption: string,
    },
  }
}