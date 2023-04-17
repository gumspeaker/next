import { FC } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function App() {
  const methods = useFormContext();
  return <form onSubmit={methods.handleSubmit(() => {})}></form>;
}
// type
export default function Wrapper({ children }) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <App></App>
    </FormProvider>
  );
}
