import { useState } from "react";

const useInput = (callback, defaultValue = '', clearInputOnSubmit = true) => {
  const [val, setValue] = useState(defaultValue);

  const handleSubmit = (e, v) => {
    e.preventDefault();
    callback(v);
    if (clearInputOnSubmit) {
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [val, handleChange, handleSubmit];
};

export default useInput;