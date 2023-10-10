import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {UserPreferenceModalProps} from './UserPreferenceModalProps';

const GenericModal: React.FC<UserPreferenceModalProps> = ({ visible, onClose, onLogout, children, showFooter, config }) => {
  // Default configuration
  const defaultConfig = {
    headerTitle: 'Settings',
    logoutButtonText: 'Logout',
    // ...any other defaults...
  };
  
  // Merge default config and provided config
  const { headerTitle, logoutButtonText } = { ...defaultConfig, ...config };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={modalStyles.overlay}>
        <View style={modalStyles.container}>
          
          {/* Modal Header */}
          <View style={modalStyles.header}>
            <Text style={modalStyles.headerTitle}>{headerTitle}</Text>
            <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
              <Text style={{color: 'black', fontSize: 18}}>X</Text>
            </TouchableOpacity>
          </View>
          
          {/* Modal Content */}
          <ScrollView style={modalStyles.content}>
            {children}
          </ScrollView>
          
          {/* Footer with Logout */}
          {showFooter && (
            <TouchableOpacity style={modalStyles.logoutButton} onPress={onLogout}>
              <Text style={{color: 'red', fontSize: 16}}>{logoutButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 7,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(200,200,200,0.3)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    minHeight: 600,
    maxHeight: 600,
    padding: 10,
  },
  logoutButton: {
    padding: 15,
    paddingLeft: 30,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default GenericModal;