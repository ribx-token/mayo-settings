import React from 'react';
import GenericModal from '../GenericModal';
import {UserPreferenceModalProps} from '../UserPreferenceModalProps';
import { useUserPreference } from './UserPreferenceContext';

export const UserPreferenceModal: React.FC<UserPreferenceModalProps> = ({onLogout, children, config}) => {
  const {
    isUserPreferenceOpen,
    handleCloseUserPreference,
  } = useUserPreference();

  return (
    <GenericModal 
    visible={isUserPreferenceOpen} 
    onClose={handleCloseUserPreference}
    onLogout={onLogout} showFooter={true}
    config={config}>
      {children}
    </GenericModal>
  );
};