import Hero         from '../components/sections/Hero';
import TrustStrip   from '../components/sections/TrustStrip';
import Categories   from '../components/sections/Categories';
import Products     from '../components/sections/Products';
import WhyChooseUs  from '../components/sections/WhyChooseUs';
import Industries   from '../components/sections/Industries';
import StatsStrip   from '../components/sections/StatsStrip';
import Compliance   from '../components/sections/Compliance';
import Testimonials from '../components/sections/Testimonials';
import CtaSection   from '../components/sections/CtaSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Categories />
      <Products />
      <WhyChooseUs />
      <Industries />
      <StatsStrip />
      <Compliance />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
