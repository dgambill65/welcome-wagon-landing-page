
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "You get full access to all features for 14 days, no credit card required. You can upgrade, downgrade, or cancel anytime during or after the trial period."
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be charged or credited the prorated amount."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. Our average response time is under 2 hours."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. We use bank-grade encryption, regular security audits, and comply with SOC 2 Type II, GDPR, and other major compliance standards."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes! Professional plans include access to our API, and Enterprise plans include custom integration development by our team."
    },
    {
      question: "What happens if I cancel?",
      answer: "You can cancel anytime. Your account will remain active until the end of your billing period, and you can export all your data before cancellation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-gray-900 hover:no-underline hover:bg-gray-50 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
