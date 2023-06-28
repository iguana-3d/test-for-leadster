import React, { HTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isUppercase?: boolean;
  buttonSize?: number;
  isFullWidth?: boolean;
}

const Button: React.FC<IProps> = ({
  buttonText,
  isUppercase,
  buttonSize,
  isFullWidth,
  ...props
}) => {
  return (
    <ButtonContainer
      isUppercase={isUppercase}
      buttonSize={buttonSize}
      isFullWidth={isFullWidth}
    >
      {buttonText}
    </ButtonContainer>
  );
};

export default Button;
