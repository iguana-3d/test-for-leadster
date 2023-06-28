import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
   font-family: 'Open Sans', sans-serif;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   font-size: 1.6rem;
   line-height: 1.6;
   background-image: url('/static/images/background.jpg');
   background-attachment: fixed;
   background-size: cover;
   background-position: center;
}

h1 {
   font-family: 'Open Sans', sans-serif;
   font-size: 4.8rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 5.2rem;
}

h2 {
   font-family: 'Open Sans', sans-serif;
   font-size: 3.2rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 4.4rem;
   margin-bottom: 1.6rem;
}

h3 {
   font-family: 'Open Sans', sans-serif;
   font-size: 2rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 4rem;
   margin-bottom: 1.6rem;
}

h4 {
   font-family: 'Open Sans', sans-serif;
   font-size: 1.6rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.bold};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 3.2rem;
   margin-bottom: 1.6rem;
}

p {
   font-family: 'Open Sans', sans-serif;
   font-size: 1.6rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   color: ${(props) => props.theme.pallete.colors.others.blue[4]};
   line-height: 2.4rem;
}

span {
   font-family: 'Open Sans', sans-serif;
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
