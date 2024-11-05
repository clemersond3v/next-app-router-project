import React from "react";

interface AboutLayoutProps {
  children: React.ReactNode; // Tipo que define o conteúdo da subpágina
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main> {/* Conteúdo específico de cada subpágina */}     
    </div>
  );
};

export default AboutLayout;
