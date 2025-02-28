//import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Mail, Phone } from "lucide-react"

const Help = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password.",
    },
    {
      question: "How can I track my course progress?",
      answer:
        "You can track your course progress on your dashboard. Each course will show a progress bar indicating how much of the course you've completed.",
    },
    {
      question: "Can I download course materials for offline viewing?",
      answer:
        "Yes, most course materials are available for download. Look for the download icon next to each course resource.",
    },
    {
      question: "How do I obtain my certificate after completing a course?",
      answer:
        "Once you've completed all required modules and passed the final assessment, you can access your certificate from the 'Certifications' page in your account.",
    },
    {
      question: "How do I contact support if I have technical issues?",
      answer:
        "If you experience any technical issues, you can contact our support team through the 'Help' section in your account or by emailing support@nurseshelf.com.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal mb-6">Help & Support</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="text-teal mr-3" size={20} />
            <span>support@nurseshelf.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="text-teal mr-3" size={20} />
            <span>1-800-NURSE-HELP</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Help

