import React, { useEffect, useRef, useState } from 'react';

interface NavbarProps { onOpenPrograms?: ()=> void }

// IDs of sections that correspond to navbar anchors (order matters for active detection)
// Order must match actual section rendering order in App.tsx for intuitive highlighting
const SECTION_IDS = ['community','why','success','team','packages','join'];

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrograms }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(()=> {
    // Use IntersectionObserver for robust section detection (center focus)
    const opts: IntersectionObserverInit = { root: null, rootMargin: '-45% 0px -50% 0px', threshold: 0 }; // section considered active when its middle area intersects viewport center band
    observerRef.current = new IntersectionObserver((entries)=> {
      // Collect intersecting section ids preserving DOM order
      const visible = entries.filter(e=> e.isIntersecting).map(e=> e.target.id);
      if (visible.length) {
        // Pick first in SECTION_IDS order present in visible
        for (const id of SECTION_IDS) if (visible.includes(id)) { setActive(id); break; }
      } else {
        // Fallback: find the section whose top is just above midpoint
        const mid = window.innerHeight / 2;
        let candidate: string | null = null;
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= mid) candidate = id;
        }
        setActive(candidate);
      }
    }, opts);
    const obs = observerRef.current;
    SECTION_IDS.forEach(id=> {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return ()=> { obs.disconnect(); };
  }, []);

  const desktopLink = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={`relative transition px-1 py-2 ${active===id ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'}`}
    >
      {label}
      {active===id && <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded" />}
    </a>
  );
  const mobileLink = (id: string, label: string) => (
    <a
      onClick={()=> setOpen(false)}
      href={`#${id}`}
      className={`block px-3 py-2 text-base font-medium transition rounded ${active===id ? 'text-primary font-semibold bg-gray-50' : 'text-gray-800 hover:text-primary'}`}
    >{label}</a>
  );

  const mobileBtnCls = 'block px-3 py-2 text-base font-medium transition text-gray-800 hover:text-primary';

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold text-primary tracking-tight">IB Training</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 text-base font-medium">
              <button onClick={onOpenPrograms} className="text-gray-800 hover:text-primary transition">Programs</button>
              {desktopLink('community','Community')}
              {desktopLink('why','Why IB Training')}
              {desktopLink('success','Success Stories')}
              {desktopLink('team','Our Team')}
              {desktopLink('packages','Packages')}
              {desktopLink('join','How To Join')}
            </div>
          </div>
          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={()=> setOpen(o=>!o)} className="text-gray-800 hover:text-primary focus:outline-none">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button onClick={()=> { onOpenPrograms?.(); setOpen(false); }} className={mobileBtnCls}>Programs</button>
            {mobileLink('community','Community')}
            {mobileLink('why','Why IB Training')}
            {mobileLink('success','Success Stories')}
            {mobileLink('team','Our Team')}
            {mobileLink('packages','Packages')}
            {mobileLink('join','How To Join')}
          </div>
        </div>
      )}
    </nav>
  );
};
