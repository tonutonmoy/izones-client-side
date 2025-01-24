'use client'

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questionsData = [
  { question: "What is iZones?", answer: "Yes. It adheres to the WAI-ARIA design pattern.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum suscipit hic, aperiam, a ab commodi, iste placeat sequi doloremque repudiandae quidem dicta perferendis recusandae. Non totam aperiam perferendis maiores minus?" },
  { question: "What is our goal?", answer: "Yes. It comes with default styles that matches the other components' aesthetic.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum suscipit hic, aperiam, a ab commodi, iste placeat sequi doloremque repudiandae quidem dicta perferendis recusandae. Non totam aperiam perferendis maiores minus?" },
  { question: "What is our service?", answer: "Yes. It's animated by default, but you can disable it if you prefer.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum suscipit hic, aperiam, a ab commodi, iste placeat sequi doloremque repudiandae quidem dicta perferendis recusandae. Non totam aperiam perferendis maiores minus?" },
  { question: "Why you will trust us?", answer: "Yes. It's animated by default, but you can disable it if you prefer.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum suscipit hic, aperiam, a ab commodi, iste placeat sequi doloremque repudiandae quidem dicta perferendis recusandae. Non totam aperiam perferendis maiores minus?" },
  { question: "How do we solve your problem?", answer: "Yes. It's animated by default, but you can disable it if you prefer.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum suscipit hic, aperiam, a ab commodi, iste placeat sequi doloremque repudiandae quidem dicta perferendis recusandae. Non totam aperiam perferendis maiores minus?" },
];

function Question() {
  const [activeItem, setActiveItem] = useState("item-1");  // Keeps track of the open item

  return (
    <Accordion type="single" collapsible value={activeItem} onValueChange={setActiveItem} className="w-full mt-20">
      {questionsData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-xl font-bold">{item.question}</AccordionTrigger>
          <AccordionContent className="text-gray-500 text-lg">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
  
    </Accordion>
  );
}

export default Question;
