import { type InputHTMLAttributes } from 'react';

import Button from '../button';
import Flex from '../flex';
import Input from '../input';

interface ButtonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onButtonClick: VoidFunction;
  buttonText: string;
  label?: string;
  isButtonDisabled?: boolean;
}

const ButtonInput = ({
  onButtonClick,
  buttonText,
  label,
  isButtonDisabled,
  ...props
}: ButtonInputProps) => {
  return (
    <Flex align="flex-end" gap={8}>
      <Input label={label} {...props} />
      <Button type="button" onClick={onButtonClick} disabled={isButtonDisabled}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default ButtonInput;
