import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutTeam from '../components/AboutTeam';
import AboutVisionMission from '../components/AboutVisionMission';
import AboutCoreValues from '../components/AboutCoreValues';
import AboutCTA from '../components/AboutCTA';

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam /> {/* <-- New Team Component Added Here */}
      {/* <AboutVisionMission />
      <AboutCoreValues />
      <AboutCTA /> */}
    </>
  );
}