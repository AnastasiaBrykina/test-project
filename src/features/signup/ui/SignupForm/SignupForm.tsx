import { css } from "@linaria/core";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type SignupFormSchema,
  signupFormSchema,
} from "@features/signup/model/SignupFormSchema";
import { FormInputField } from "@shared/ui/FormInputField";

const formContainer = css`
  width: 50%;
  max-width: 550px;
  padding: 15px;
  border: 1px solid grey;
`;

const form = css`
  display: flex;
  flex-direction: column;
`;

export const SignupForm = () => {
  const methods = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
  });
  const { handleSubmit } = methods;

  const onSubmitHandler = (data: SignupFormSchema) => {
    console.log(data);
  };

  return (
    <div className={formContainer}>
      <h1>Signup Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)} className={form}>
          <FormInputField name="username" label="Name" type="text" />
          <FormInputField name="email" label="Email" type="email" />
          <FormInputField name="password" label="Password" type="password" />
          <FormInputField
            name="confirmPassword"
            label="Confirm password"
            type="password"
          />
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
