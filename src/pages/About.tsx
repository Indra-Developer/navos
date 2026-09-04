import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutTeam from '../components/AboutTeam';


export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam /> {/* <-- New Team Component Added Here */}
     
    </>
  );
}