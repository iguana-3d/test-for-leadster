import styled from 'styled-components';

interface IProps {
  customLightboxWidth?: string;
}

export const LightBoxVideoContainer = styled.div<IProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${(props) => props.theme.mixins.containerGridDefault};

  .buttons-bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: max-content;
    height: max-content;
    background-color: ${(props) =>
      props.theme.pallete.colors.backgrounds.neutral};
    z-index: 1200;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media ${(props) => props.theme.medias.laptopSmall} {
      display: none;
    }
  }

  .background-above {
    position: absolute;
    top: -0.5rem;
    left: 0;
    width: 100%;
    height: 1rem;
    background: ${(props) => props.theme.pallete.colors.others.blue[6]};
  }

  .light-box-content {
    grid-column: center-start / center-end;
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: ${(props) =>
      !!props.customLightboxWidth ? props.customLightboxWidth : '100%'};
    min-height: 20rem;
    max-height: 85vh;
    background-color: ${(props) =>
      props.theme.pallete.colors.backgrounds.neutral};
    border-radius: 2rem;
    padding: 3rem 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1200;

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.pallete.colors.others.gray[3]};
      border: 4px solid transparent;
      border-radius: 8px;
      background-clip: padding-box;
      padding: 1rem 0;
    }

    ::-webkit-scrollbar {
      width: 16px;
    }
  }

  .icon-box {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.8rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.pallete.colors.common.black};
    }
  }

  .light-box-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${(props) =>
      `rgba(${props.theme.functions.parseToRgb(
        props.theme.pallete.colors.others.blue[4]
      )}, 0.6)`};
    z-index: 1100;
  }

  .delete-creative-trigger-container {
    h3 {
      text-align: center;
      margin-bottom: 3rem;
    }
  }

  .delete-creative-trigger-button-group {
    display: flex;
    gap: 1.6rem;
    justify-content: center;
  }
`;
