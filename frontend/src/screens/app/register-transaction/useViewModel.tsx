import { useForm } from "react-hook-form";

export default function useViewModel() {
  const { control, handleSubmit } = useForm();

  return { control };
}
