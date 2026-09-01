import HomeHero from '../components/HomeHero';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import HomeWhyChoose from '../components/HomeWhyChoose';
import HomeHowConnects from '../components/HomeHowConnects';
import HomeHighlights from '../components/HomeHighlights';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeCTA from '../components/HomeCTA';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeWhyChoose />
      <HomeHowConnects />
      <HomeHighlights />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}