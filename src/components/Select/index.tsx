import React, { forwardRef, SelectHTMLAttributes } from 'react';
import { SelectContainer } from './styles';

interface IOptions {
  optionValue: string;
  optionName: string;
}

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  textLabel: string;
  options: IOptions[];
  disabled?: boolean;
  error?: string;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, IProps> = (
  { options, textLabel, disabled, error, ...props },
  ref
) => {
  return (
    <SelectContainer disabled={!!disabled}>
      <label className="label">{!!textLabel && `${textLabel}`}</label>
      <div className="select-box">
        <select
          ref={ref}
          value={props.value}
          onChange={props.onChange}
          {...props}
        >
          <option className="option" value="">
            Selecione uma opção
          </option>
          {options.map((option) => {
            return (
              <option
                key={option.optionName}
                value={option.optionValue}
                className="option"
              >
                {option.optionName}
              </option>
            );
          })}
        </select>
      </div>
      {!!error && <span className="textfield-error">{error}</span>}
    </SelectContainer>
  );
};

export default forwardRef(Select);
