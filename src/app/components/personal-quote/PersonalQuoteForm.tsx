import { Mail, Phone } from "lucide-react";
import { Controller } from "react-hook-form";

import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Form } from "@/app/components/ui/form";
import {
  PERSONAL_QUOTE_FIELD_ICONS,
  PERSONAL_QUOTE_SERVICES,
} from "@/constants/personalQuote";
import { usePersonalQuoteForm } from "@/hooks/usePersonalQuoteForm";
import { sanitizePhoneInput } from "@/lib/personalQuote/phoneInput";
import {
  PERSONAL_QUOTE_CARD_CLASS,
  PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS,
  PERSONAL_QUOTE_FIELD_ICON_CLASS,
  PERSONAL_QUOTE_FORM_GROUPS_GAP_CLASS,
  PERSONAL_QUOTE_SERVICE_CARD_CLASS,
  PERSONAL_QUOTE_SUBMIT_CLASS,
  PERSONAL_QUOTE_TEXTAREA_CLASS,
} from "@/lib/personalQuote/layout";

import { QuoteFormGroup } from "./QuoteFormGroup";
import { QuoteFieldIcon, QuoteTextField } from "./QuoteField";
import { QuoteDateRangeField, QuoteGuestsField, QuoteRoomSelect } from "./QuoteStayFields";
import { cn } from "../ui/utils";

export function PersonalQuoteForm() {
  const { form, onSubmit } = usePersonalQuoteForm();
  const { control, register } = form;

  const { onChange: onPhoneChange, ...phoneField } = register("phone");

  return (
    <Form {...form}>
      <form className={PERSONAL_QUOTE_CARD_CLASS} onSubmit={onSubmit} noValidate>
        <div className={PERSONAL_QUOTE_FORM_GROUPS_GAP_CLASS}>
          <QuoteFormGroup label="Your Details">
            <div className={cn("grid md:grid-cols-2", PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS)}>
              <QuoteTextField
                icon={<QuoteFieldIcon src={PERSONAL_QUOTE_FIELD_ICONS.user} />}
                placeholder="First Name"
                autoComplete="given-name"
                {...register("firstName")}
              />
              <QuoteTextField
                icon={<QuoteFieldIcon src={PERSONAL_QUOTE_FIELD_ICONS.user} />}
                placeholder="Last Name"
                autoComplete="family-name"
                {...register("lastName")}
              />
              <QuoteTextField
                icon={
                  <Mail
                    className={PERSONAL_QUOTE_FIELD_ICON_CLASS}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                }
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                {...register("email")}
              />
              <QuoteTextField
                icon={
                  <Phone
                    className={PERSONAL_QUOTE_FIELD_ICON_CLASS}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                }
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone Number"
                {...phoneField}
                onChange={(event) => {
                  const el = event.currentTarget;
                  const next = sanitizePhoneInput(el.value);
                  if (next !== el.value) {
                    el.value = next;
                  }
                  void onPhoneChange(event);
                }}
              />
            </div>
          </QuoteFormGroup>

          <QuoteFormGroup label="Stay">
            <div className={cn("flex flex-col", PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS)}>
              <div className={cn("grid md:grid-cols-2", PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS)}>
                <Controller
                  name="dateRange"
                  control={control}
                  render={({ field }) => (
                    <QuoteDateRangeField
                      dateRange={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="guests"
                  control={control}
                  render={({ field }) => (
                    <QuoteGuestsField value={field.value} onChange={field.onChange} />
                  )}
                />
              </div>
              <Controller
                name="roomId"
                control={control}
                render={({ field }) => (
                  <QuoteRoomSelect value={field.value} onChange={field.onChange} />
                )}
              />
            </div>
          </QuoteFormGroup>

          <QuoteFormGroup label="Additional Services">
            <div className={cn("grid sm:grid-cols-2", PERSONAL_QUOTE_FORM_FIELDS_GAP_CLASS)}>
              {PERSONAL_QUOTE_SERVICES.map((service) => (
                <label key={service.id} className={PERSONAL_QUOTE_SERVICE_CARD_CLASS}>
                  <input
                    type="checkbox"
                    className="size-4 shrink-0 rounded-[4px] border border-[#3232321A] accent-[#A49781]"
                    {...register(`services.${service.id}`)}
                  />
                  <span className="text-[16px] font-normal leading-[150%] text-[#323232]">
                    {service.label}
                  </span>
                </label>
              ))}
            </div>
          </QuoteFormGroup>

          <QuoteFormGroup label="Special Requests">
            <Textarea
              placeholder="Anniversary, dietary preferences, arrival time..."
              className={PERSONAL_QUOTE_TEXTAREA_CLASS}
              {...register("specialRequests")}
            />
          </QuoteFormGroup>

          <div className="flex w-full md:justify-end">
            <Button type="submit" className={PERSONAL_QUOTE_SUBMIT_CLASS}>
              Submit Request
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
