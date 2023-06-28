import styled from 'styled-components';

export interface IDownloadItemsModalProps {
  textBackground: string;
  iconBackground: string;
  textAndIconColor: string;
}

export const DownloadItemsModalContainer = styled.button<IDownloadItemsModalProps>`
  background: transparent;
  border: none;
  display: flex;
  align-items: stretch;
  width: max-content;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.pallete.shadows.default.n12};
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.pallete.shadows.default.n4};
  }

  svg {
    display: flex;
    color: ${(props) => props.textAndIconColor};
  }

  .download-items-icon-box {
    background: ${(props) => props.iconBackground};
    padding: 0.4rem 0.8rem;
    display: flex;
    align-items: center;
  }

  .download-items-text {
    color: ${(props) => props.textAndIconColor};
    font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
    padding: 0.4rem 0.8rem;
    background: ${(props) => props.textBackground};
    display: flex;
    align-items: center;
  }
`;
