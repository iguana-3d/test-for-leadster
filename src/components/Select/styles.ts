import styled, { css } from 'styled-components';

interface IProps {
  disabled: boolean;
}

export const SelectContainer = styled.div<IProps>`
  width: 100%;

  select {
    position: relative;
    width: 100%;
    min-width: 24rem;
    height: 4rem;
    padding: 0.4rem 6rem 0.4rem 2rem;
    outline: 0;
    display: block;
    font-size: inherit;
    border: 1px solid ${(props) => props.theme.pallete.colors.others.gray[2]};
    border-radius: 100px;
    font-family: inherit;
    background-color: ${(props) => props.theme.pallete.colors.common.white};
    ${(props) => props.theme.mixins.textElipsis};
    cursor: pointer;
    background-position: calc(100% - 2.75rem) center !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    appearance: none !important;
  }

  .label {
    color: ${(props) => props.theme.pallete.colors.others.gray[7]};
    font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
    line-height: 5rem;
    font-size: 1.6rem;
  }

  .select-box::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3rem;
    z-index: 1;
    width: 0.8rem;
    height: 0.8rem;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-top: 0.8rem solid
      ${(props) => props.theme.pallete.colors.others.gray[7]};
    pointer-events: none;
  }

  .textfield-error {
    color: ${(props) => props.theme.pallete.colors.error.main};
    padding: 0.4rem 2rem 0;
  }

  .option {
    padding: 1.2rem 2rem;
    cursor: pointer;

    &:hover {
      background-color: #62baea;
      color: #fff;
    }
  }

  .select-box {
    position: relative;
    ${(props) =>
      props.disabled &&
      css`
        pointer-events: none;
        user-select: none;
      `}
  }

  .select:focus-within ~ .custom-arrow::before {
    opacity: 0;
  }

  .select:focus-within ~ .custom-arrow::after {
    opacity: 1;
  }
`;
