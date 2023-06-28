import styled from 'styled-components';

export const WebinarSectionContainer = styled.section`
  ${(props) => props.theme.mixins.containerGridDefault};
  background: ${(props) => props.theme.pallete.colors.others.blue[1]};

  .content {
    grid-column: center-start / center-end;
    padding: 12rem 0;

    .webinar-span {
      text-transform: uppercase;
      padding: 0.8rem 3rem;
      color: ${(props) => props.theme.pallete.colors.others.blue[6]};
      font-weight: ${(propss) => propss.theme.typeFaceWeight.bold};
      font-size: 1.6rem;
      border: 3px solid ${(props) => props.theme.pallete.colors.others.blue[6]};
      border-top-left-radius: 100px;
      border-top-right-radius: 100px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 100px;
      margin: 0 auto 3rem;
      display: block;
      width: max-content;
    }

    .heading-2 {
      text-align: center;
      display: flex;
      gap: 3rem;
      flex-direction: column;
      margin: 0 auto 3rem;

      > :nth-child(1) {
        color: ${(props) => props.theme.pallete.colors.others.blue[4]};
        font-size: 4rem;
        font-weight: ${(propss) => propss.theme.typeFaceWeight.semiBold};
      }

      > :nth-child(2) {
        color: ${(props) => props.theme.pallete.colors.others.blue[2]};
        font-size: 7.2rem;
        font-weight: ${(propss) => propss.theme.typeFaceWeight.bold};
        position: relative;
        padding-bottom: 3rem;

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          display: inline-block;
          width: max-content;
          height: 1px;
          background: ${(props) => props.theme.pallete.colors.others.blue[5]};
          width: 100%;
          max-width: 64rem;
          transform: translateX(-50%);
        }

        span {
          color: ${(props) => props.theme.pallete.colors.others.blue[2]};
          font-size: 7.2rem;
          font-weight: ${(propss) => propss.theme.typeFaceWeight.bold};
          position: relative;

          img {
            position: absolute;
            top: 0;
            right: -2.4rem;

            @media ${(props) => props.theme.medias.mobile} {
              width: 100%;
              max-width: 6rem;
            }
          }
        }
      }
    }

    .content-paragraph {
      text-align: center;
      font-weight: ${(propss) => propss.theme.typeFaceWeight.semiBold};
      font-size: 2rem;
    }
  }
`;
