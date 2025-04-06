import { useState } from "react";

type UseBooleanReturn = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
};

export default function useBoolean(initialValue?: boolean): UseBooleanReturn {
  const [value, setValue] = useState<boolean>(initialValue ?? false);

  const setTrue = () =>{
    setValue(true);
  }

  const setFalse = () => {
    setValue(false);
  }

  return {
    setTrue,
    setFalse,
    value
  }
}