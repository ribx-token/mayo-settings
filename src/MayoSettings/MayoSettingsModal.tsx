import React from 'react';
import GenericModal from '../GenericModal';
import {MayoSettingsModalProps} from '../MayoSettingsModalProps';
import { useMayoSettings } from './MayoSettingsContext';

const MayoSettingsModal: React.FC<MayoSettingsModalProps & { id: string }> = ({ id, onLogout, children, config }) => {
  const { modalStates, closeModal } = useMayoSettings();
  const currentModal = modalStates.find(modal => modal.id === id) || { isOpen: false };

  return (
    <GenericModal 
      visible={currentModal.isOpen} 
      onClose={() => closeModal(id)}
      onLogout={onLogout}
      config={config}>
        {children}
    </GenericModal>
  );
};

export default MayoSettingsModal;