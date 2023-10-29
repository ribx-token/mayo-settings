import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MayoSettingsContextProps {
  isMayoSettingsOpen: boolean;
  handleOpenMayoSettings: () => void;
  handleCloseMayoSettings: () => void;
}

const MayoSettingsContext = createContext<MayoSettingsContextProps | undefined>(undefined);

interface MayoSettingsProviderProps {
  children: ReactNode;
}

export const MayoSettingsProvider: React.FC<MayoSettingsProviderProps> = ({ children }) => {
  const [isMayoSettingsOpen, setIsMayoSettingsOpen] = useState(false);

  const handleOpenMayoSettings = () => {
    setIsMayoSettingsOpen(true);
  };
  const handleCloseMayoSettings = () => setIsMayoSettingsOpen(false);

  return (
    <MayoSettingsContext.Provider value={{ isMayoSettingsOpen, handleOpenMayoSettings, handleCloseMayoSettings }}>
      {children}
    </MayoSettingsContext.Provider>
  );
};

export const useMayoSettings = (): MayoSettingsContextProps => {
  const context = useContext(MayoSettingsContext);
  if (!context) {
    throw new Error("useMayoSettings must be used within an MayoSettingsProvider");
  }
  return context;
};
