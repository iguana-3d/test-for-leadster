import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'PlusJakartaSans';
  src: url('/static/fonts/PlusJakartaSans/PlusJakartaSans-Light.ttf')
    format('opentype');
  font-weight: 300;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url('/static/fonts/PlusJakartaSans/PlusJakartaSans-Regular.ttf')
    format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url('/static/fonts/PlusJakartaSans/PlusJakartaSans-Regular.ttf')
    format('opentype');
  font-weight: normal;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url('/static/fonts/PlusJakartaSans/PlusJakartaSans-Medium.ttf')
    format('opentype');
  font-weight: 500;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url('/static/fonts/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf')
    format('opentype');
  font-weight: 600;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url('/static/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf')
    format('opentype');
  font-weight: 700;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url('/static/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf')
    format('opentype');
  font-weight: bold;
}

*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
}

html {
   box-sizing: border-box;
   font-size: 62.5%; // 1 Rem === 10px
   scroll-behavior: smooth;
   @media ${(props) => props.theme.medias.laptopLarge} {//1440px
      font-size: 56.25%;//9px = 9/16 * 100
   }
   @media ${(props) => props.theme.medias.tablet} {//768px
      font-size: 50%;//8px = 8/16 * 100
   }
   @media ${(props) => props.theme.medias.mobile} {//600px
      font-size: 43.75%;//7px = 7/16 * 100
   }
}

body {
   font-family: 'PlusJakartaSans', sans-serif;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   font-size: 1.6rem;
   line-height: 1.6;
}

h1 {
   font-family: 'PlusJakartaSans', sans-serif;
   font-size: 4.8rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 5.2rem;
}

h2 {
   font-family: 'PlusJakartaSans', sans-serif;
   font-size: 3.2rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 4.4rem;
   margin-bottom: 1.6rem;
}

h3 {
   font-family: 'PlusJakartaSans', sans-serif;
   font-size: 2rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 4rem;
   margin-bottom: 1.6rem;
}

h4 {
   font-family: 'PlusJakartaSans', sans-serif;
   font-size: 1.6rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 3.2rem;
   margin-bottom: 1.6rem;
}

p {
   font-family: 'PlusJakartaSans', sans-serif;
   font-size: 1.6rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 2.4rem;
}

span {
   font-family: 'PlusJakartaSans', sans-serif;
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   font-size: 1.4rem;
}

label {
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
}

picture {
   line-height: 0;
}
`;
