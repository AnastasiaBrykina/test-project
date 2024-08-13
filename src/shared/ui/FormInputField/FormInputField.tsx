import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

interface FormInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const FormInputField = (props: FormInputFieldProps) => {
  const { name, label, ...rest } = props;
  const { register, getFieldState, formState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <TextField
      {...register(name)}
      label={label}
      variant="standard"
      error={!!error}
      helperText={error?.message}
      inputProps={{ ...rest }}
      margin="normal"
    />
  );
};
