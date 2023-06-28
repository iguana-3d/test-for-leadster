import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  border-radius: 2rem;
  box-shadow: ${(props) => props.theme.pallete.shadows.default.n12};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  @media ${(props) => props.theme.medias.mobile} {
    justify-self: center;
  }

  &:hover h3 {
    color: ${(props) => props.theme.pallete.colors.others.blue[6]};
  }

  &:hover .icon-play-box {
    opacity: 1;
  }

  h3 {
    padding: 1.6rem 3rem;
    margin: 0;
    line-height: 2.8rem;
    transition: all 0.2s;
  }

  img {
    width: 100%;
  }

  picture {
    position: relative;
  }

  .icon-play-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      `rgba(${props.theme.functions.parseToRgb(
        props.theme.pallete.colors.others.blue[2]
      )}, 0.3)`};
    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.pallete.colors.common.white};
      transition: all 0.2s;
    }
  }
`;
