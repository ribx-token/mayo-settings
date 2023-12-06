import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MayoSettingsProviderProps {
  children: ReactNode;
}
interface ModalState {
  id: string;
  isOpen: boolean;
}

interface MayoSettingsContextProps {
  modalStates: ModalState[];
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
}

const MayoSettingsContext = createContext<MayoSettingsContextProps | undefined>(undefined);

export const MayoSettingsProvider: React.FC<MayoSettingsProviderProps> = ({ children }) => {
  const [modalStates, setModalStates] = useState<ModalState[]>([]);

  const openModal = (id: string) => {
    setModalStates(prev => [...prev.filter(modal => modal.id !== id), { id, isOpen: true }]);
  };

  const closeModal = (id: string) => {
    setModalStates(prev => prev.map(modal => modal.id === id ? { ...modal, isOpen: false } : modal));
  };

  return (
    <MayoSettingsContext.Provider value={{ modalStates, openModal, closeModal }}>
      {children}
    </MayoSettingsContext.Provider>
  );
};

export const useMayoSettings = (): MayoSettingsContextProps => {
  const context = useContext(MayoSettingsContext);
  if (!context) {
    throw new Error("useMayoSettings must be used within a MayoSettingsProvider");
  }
  return context;
};