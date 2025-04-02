"use client";

import PortalNav from "../components/portalNav";

export default function ComingSoon() {
  return (
    <PortalNav>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center coming-soon-container">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 title-animation">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-black/80 subtitle-animation">
            Something amazing is in the works
          </p>
        </div>
      </div>
    </PortalNav>
  );
}
