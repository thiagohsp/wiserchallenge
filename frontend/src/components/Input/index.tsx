import React, {
  InputHTMLAttributes,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiX } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  label,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setFocused(false);
    setFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Label>{label}</Label>}
      <Container
        style={containerStyle}
        hasError={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
        data-testid="input-container"
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && <FiX color="#FF377F" size={20} />}
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
};
export default Input;
