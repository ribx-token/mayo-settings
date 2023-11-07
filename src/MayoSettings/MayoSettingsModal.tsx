import React from 'react';
import GenericModal from '../GenericModal';
import {MayoSettingsModalProps} from '../MayoSettingsModalProps';
import { useMayoSettings } from './MayoSettingsContext';

const MayoSettingsModal: React.FC<MayoSettingsModalProps> = ({onLogout, children, config}) => {
  const { isMayoSettingsOpen, handleCloseMayoSettings } = useMayoSettings();

  return (
    <GenericModal 
    visible={isMayoSettingsOpen} 
    onClose={handleCloseMayoSettings}
    onLogout={onLogout}
    config={config}>
      {children}
    </GenericModal>
  );
};

export default MayoSettingsModal;