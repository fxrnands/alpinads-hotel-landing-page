import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm, type FieldErrors, type UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import { collectFormErrorMessages } from "@/lib/personalQuote/formErrorMessages";
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
      const messages = collectFormErrorMessages(errors);
      if (messages.length === 0) {
        toast.error("Please check the form and try again.");
      } else if (messages.length === 1) {
        toast.error(messages[0]);
      } else {
        toast.error("Please correct the form.", {
          description: messages.join("\n"),
        });
      }

      onSubmitError?.(errors);
    },
    [onSubmitError],
  );

  const onSubmit = form.handleSubmit(handleValidSubmit, handleInvalidSubmit);

  return { form, onSubmit };
}
