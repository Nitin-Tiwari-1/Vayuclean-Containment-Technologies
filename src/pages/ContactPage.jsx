import Contact from '../components/sections/Contact';
import PageHero from '../components/ui/PageHero';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        tag="Contact Us"
        title={<>Get in <span className="highlight">Touch</span></>}
        subtitle="Share your containment requirements and our engineers will recommend the right solution for your facility."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <Contact />
    </main>
  );
}
