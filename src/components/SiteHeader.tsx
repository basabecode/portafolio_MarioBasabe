import React from "react";
import Navbar from "./Navbar";

type Props = { activeSection?: string };

const SiteHeader: React.FC<Props> = ({ activeSection = "home" }) => {
  return (
    <header aria-label="Sitio navegación">
      <Navbar activeSection={activeSection} />
    </header>
  );
};

export default SiteHeader;
