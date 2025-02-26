import About from '@/components/About';
import Education from '@/components/Education';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Skill from '@/components/Skill';
import WorkExperience from '@/components/WorkExperience';

export default function Home() {
  return (
    <div className="pt-16 pb-16">
      <Hero />
      <Intro />
      <About />
      <Skill />
      <WorkExperience />
      <Education />
    </div>
  );
}