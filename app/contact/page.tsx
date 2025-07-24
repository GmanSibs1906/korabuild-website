import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-[100px]">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  )
}
