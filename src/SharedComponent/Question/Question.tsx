'use client'

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questionsData = [
  { question: "What is iZones?",
     answer: "iZones is a colour imaginary umbrella to shed you with service in your day-to-day lives " },
  { question: "What is our vision?",
     answer: "Let's Connect worldwide and help each other shine" },
 
  // { question: "Why trust us?",
  //    answer: `Because we say NO!We are committed to provide you with what you deserve. We only offer services that we have skilled professionals for. If we cannot get your job done, we say NO` },
  { question: "What makes us special?",
     answer: `15 minutes make us special
Regardless of wanting to book IELTS courses with us, or making online appointments with us to get your Apple Account fixed, you can always schedule a 15 minutes online consultation with our experts and it’s absolutely FREE! ` },
{ question: "What services do we offer?",
  answer: `1.
We offer multiple educational courses online such as IELTS, GRE & TOEFL, CELPIP, ESL, Duo Lingo, English basics and so on

2. We offer Technical Support for any of your Apple devices over the phone. We are also specialized in resolving Apple Account issues` },
  { question: "How can you receive our services?",
     answer: `Please send us a message on WhatsApp and we will send you a Google Form to fill out. Once we receive the forms, our services will start knocking on your doors` },
     
];

function Question() {
  const [activeItem, setActiveItem] = useState("item-1");  // Keeps track of the open item

  return (
    <Accordion type="single" collapsible value={activeItem} onValueChange={setActiveItem} className="w-full mt-20">
      {questionsData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-xl font-bold">{item.question}</AccordionTrigger>
          <AccordionContent className=" dark:text-gray-300 text-gray-500 text-lg">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
  
    </Accordion>
  );
}

export default Question;
