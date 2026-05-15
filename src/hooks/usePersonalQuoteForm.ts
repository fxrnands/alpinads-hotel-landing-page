import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm, type FieldErrors, type UseFormReturn } from "react-hook-form";

import {
  personalQuoteFormDefaultValues,
  personalQuoteFormSchema,
  toSubmitPayload,
  type PersonalQuoteFormValues,
  type PersonalQuoteSubmitPayload,
} from "@/lib/personalQuote/schema";

type UsePersonalQuoteFormOptions = {
  onSubmitSuccess?: (payload: PersonalQuoteSubmitPayload) => void;
  onSubmitError?: (errors: FieldErrors<PersonalQuoteFormValues>) => void;
};

type UsePersonalQuoteFormReturn = {
  form: UseFormReturn<PersonalQuoteFormValues>;
  onSubmit: ReturnType<UseFormReturn<PersonalQuoteFormValues>["handleSubmit"]>;
};

export function usePersonalQuoteForm({
  onSubmitSuccess,
  onSubmitError,
}: UsePersonalQuoteFormOptions = {}): UsePersonalQuoteFormReturn {
  const form = useForm<PersonalQuoteFormValues>({
    resolver: zodResolver(personalQuoteFormSchema),
    defaultValues: personalQuoteFormDefaultValues,
    mode: "onSubmit",
  });

  const handleValidSubmit = useCallback(
    (values: PersonalQuoteFormValues) => {
      const payload = toSubmitPayload(values);

      if (onSubmitSuccess) {
        onSubmitSuccess(payload);
        return;
      }

      console.log("Personal quote form submitted:", payload);
    },
    [onSubmitSuccess],
  );

  const handleInvalidSubmit = useCallback(
    (errors: FieldErrors<PersonalQuoteFormValues>) => {
      if (onSubmitError) {
        onSubmitError(errors);
        return;
      }

      console.error("Personal quote validation failed:", errors);
    },
    [onSubmitError],
  );

  const onSubmit = form.handleSubmit(handleValidSubmit, handleInvalidSubmit);

  return { form, onSubmit };
}
