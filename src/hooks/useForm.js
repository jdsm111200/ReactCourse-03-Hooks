import { useState } from "react";

export const useForm = (formObject = {}) => {
  const [form, setForm] = useState(formObject);

  const onInputChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const onResetForm = () => {
    setForm(formObject);
  };

  return {
    ...form,
    form,
    onInputChangeForm,
    onResetForm,
  };
};
