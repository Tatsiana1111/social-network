import 'styled-components';
import { ITheme, ThemeEnum } from '../ui/theme/ThemeType';


declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum,
  }
}
//   https://habr.com/ru/post/591381/


// https://gist.github.com/fdaciuk/71f8b3946d65d94fcc3422d6a7e5f2f9

//Don't forget to define on your tsconfig.json to make absolute imports from src
// "include": ["./src/**/*", "ThemeType.d.ts"],
//"baseUrl": "src"