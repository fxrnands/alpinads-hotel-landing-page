"use client";

import { useState } from "react";

import { FAQ_DEFAULT_OPEN_ID, FAQ_ITEMS, type FaqItem } from "@/constants/faq";
import {
  FAQ_ACCORDION_CONTENT_CLASS,
  FAQ_ACCORDION_GAP_CLASS,
  FAQ_ACCORDION_ITEM_CLASS,
  FAQ_ACCORDION_RADIUS_CLASS,
  FAQ_ACCORDION_TRIGGER_CLASS,
  FAQ_ANSWER_TEXT_CLASS,
  FAQ_QUESTION_TEXT_CLASS,
} from "@/lib/faq";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "../ui/utils";

type FaqAccordionProps = {
  items?: FaqItem[];
};

export function FaqAccordion({ items = FAQ_ITEMS }: FaqAccordionProps) {
  const [openItemId, setOpenItemId] = useState<string>(FAQ_DEFAULT_OPEN_ID);

  return (
    <Accordion
      type="single"
      collapsible
      value={openItemId}
      onValueChange={setOpenItemId}
      className={cn("flex flex-col", FAQ_ACCORDION_GAP_CLASS)}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className={cn(FAQ_ACCORDION_ITEM_CLASS, FAQ_ACCORDION_RADIUS_CLASS)}
        >
          <AccordionTrigger
            className={cn(FAQ_ACCORDION_TRIGGER_CLASS, FAQ_QUESTION_TEXT_CLASS)}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={cn(FAQ_ACCORDION_CONTENT_CLASS, FAQ_ANSWER_TEXT_CLASS)}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
