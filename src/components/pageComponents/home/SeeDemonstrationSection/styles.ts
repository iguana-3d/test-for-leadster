import styled from 'styled-components';

export const SeeDemonstrationSectionContainer = styled.div`
  margin: 6rem 0;
  ${(props) => props.theme.mixins.containerGridDefault};
  background: ${(props) => props.theme.pallete.colors.others.blue[1]};
  padding: 3rem 0;
  position: relative;
  overflow: hidden;

  .see-demonstration-background-icon-box {
    position: absolute;
    left: -48rem;
    bottom: -70rem;
    z-index: 1;

    img {
      width: 160rem;
      transform: rotate(270deg);
    }
  }

  .content {
    grid-column: full-start / full-end;
    max-width: 144rem;
    margin: 0 auto;
    padding: 0 9rem;

    display: flex;
    gap: 3rem;
    z-index: 2;

    @media ${(props) => props.theme.medias.laptopSmall} {
      flex-direction: column-reverse;
    }

    @media ${(props) => props.theme.medias.mobile} {
      padding: 0 3rem;
    }

    .content-left {
      width: 100%;

      .nav-bar-image {
        width: 100%;
      }
    }

    .content-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;

      h2 {
        display: flex;
        flex-direction: column;

        > :nth-child(1) {
          font-weight: ${(props) => props.theme.typeFaceWeight.medium};
        }

        @media ${(props) => props.theme.medias.laptopSmall} {
          text-align: center;
        }

        span {
          font-size: 4rem;
        }
      }

      .see-demonstration-paragraph {
        font-size: 2rem;
        font-weight: ${(props) => props.theme.typeFaceWeight.medium};

        @media ${(props) => props.theme.medias.laptopSmall} {
          text-align: center;
        }
      }

      .separate-line {
        width: 100%;
        height: 1px;
        background: ${(props) => props.theme.pallete.colors.others.gray[3]};
        margin: 3rem 0;
      }

      .button-box {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.6rem;
        margin-bottom: 1.6rem;

        @media ${(props) => props.theme.medias.laptopSmall} {
          justify-content: center;
        }

        @media ${(props) => props.theme.medias.mobile} {
          flex-direction: column;
          gap: 3rem;
        }
      }

      .see-demonstration-bottom-texts {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.8rem;
      }

      .texts-1 {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      .texts-2 {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
    }
  }
`;
