import styled, { css } from 'styled-components';
import { pixelsToRemUnit } from '../../../utils/sizesCalcs';

interface IProps {
  isUppercase?: boolean;
  buttonSize?: number;
  isFullWidth?: boolean;
}

export const ButtonContainer = styled.button<IProps>`
  ${(props) =>
    props.isUppercase &&
    css`
      text-transform: uppercase;
    `}
  background: ${(props) => props.theme.pallete.colors.others.blue[6]};
  color: ${(props) => props.theme.pallete.colors.common.white};
  min-height: 5rem;
  width: ${(props) =>
    props.isFullWidth
      ? '100%'
      : !!props.buttonSize
      ? pixelsToRemUnit(props.buttonSize)
      : 'max-content'};
  min-width: min-content;
  padding: 2.4rem 3rem;
  border-radius: 100px;
  border: none;
  transition: all 0.2 ease-in-out;
  position: relative;
  white-space: nowrap;
  user-select: none;
  font-size: 2rem;
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
`;
