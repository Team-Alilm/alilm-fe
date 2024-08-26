import { type HTMLAttributes } from 'react';

import Button from '../button';
import Flex from '../flex';
import Input from '../input';

interface ButtonInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: VoidFunction;
  buttonText: string;
}

const ButtonInput = ({
  label,
  description,
  onChange,
  onButtonClick,
  buttonText,
  ...props
}: ButtonInputProps) => {
  return (
    <Flex align="flex-end" gap={8}>
      <Input onChange={onChange} label={label} {...props} />
      <Button onClick={onButtonClick} description={description}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default ButtonInput;
