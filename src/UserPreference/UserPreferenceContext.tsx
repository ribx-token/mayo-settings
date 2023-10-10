import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserPreferenceContextProps {
  isUserPreferenceOpen: boolean;
  handleOpenUserPreference: () => void;
  handleCloseUserPreference: () => void;
}

const UserPreferenceContext = createContext<UserPreferenceContextProps | undefined>(undefined);

interface UserPreferenceProviderProps {
  children: ReactNode;
}

export const UserPreferenceProvider: React.FC<UserPreferenceProviderProps> = ({ children }) => {
  const [isUserPreferenceOpen, setIsUserPreferenceOpen] = useState(false);

  const handleOpenUserPreference = () => {
    setIsUserPreferenceOpen(true);
  };
  const handleCloseUserPreference = () => setIsUserPreferenceOpen(false);

  return (
    <UserPreferenceContext.Provider value={{ isUserPreferenceOpen, handleOpenUserPreference, handleCloseUserPreference }}>
      {children}
    </UserPreferenceContext.Provider>
  );
};

export const useUserPreference = (): UserPreferenceContextProps => {
  const context = useContext(UserPreferenceContext);
  if (!context) {
    throw new Error("useUserPreference must be used within an UserPreferenceProvider");
  }
  return context;
};
