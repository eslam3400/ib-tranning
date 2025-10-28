import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Community } from './components/sections/Community';
import { Why } from './components/sections/Why';
import { Team } from './components/sections/Team';
import { Success } from './components/sections/Success';
import { Join } from './components/sections/Join';
import { Packages } from './components/sections/Packages';
import { ProgramsModal } from './components/sections/ProgramsModal';
import { StoryModal } from './components/sections/StoryModal';
import { TeamModal } from './components/sections/TeamModal';
import { RegistrationModal } from './components/sections/RegistrationModal';

export const App: React.FC = () => {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<string|null>(null);
  const [activeTeam, setActiveTeam] = useState<string|null>(null);
  const [registrationOpen, setRegistrationOpen] = useState(false);

  // lock body scroll when any modal open
  const anyModalOpen = programsOpen || !!activeStory || !!activeTeam || registrationOpen;
  React.useEffect(()=> {
    if (anyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [anyModalOpen]);

  return (
    <>
      <Navbar onOpenPrograms={()=> setProgramsOpen(true)} />
      <Hero onOpenPrograms={()=> setProgramsOpen(true)} />
      <Community />
      <Why onOpenRegistration={()=> setRegistrationOpen(true)} />
      <Success onOpenStory={setActiveStory} />
      <Team onOpenMember={setActiveTeam} />
      <Packages onOpenRegistration={()=> setRegistrationOpen(true)} />
      <Join />
      <Footer />
      <ProgramsModal open={programsOpen} onClose={()=> setProgramsOpen(false)} />
      <StoryModal storyId={activeStory} onClose={()=> setActiveStory(null)} />
      <TeamModal memberId={activeTeam} onClose={()=> setActiveTeam(null)} />
      <RegistrationModal open={registrationOpen} onClose={()=> setRegistrationOpen(false)} />
    </>
  );
};
