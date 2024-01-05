import React, {useRef} from 'react';
import { Image, View, ScrollView, Text, TouchableOpacity, Modal, StyleSheet, PanResponder } from 'react-native';
import {MayoSettingsModalProps} from './MayoSettingsModalProps';

const GenericModal: React.FC<MayoSettingsModalProps> = ({ visible, onClose, onLogout, children, config }) => {
  // Initialize PanResponder
  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      // You can add logic here if you want to respond to the moving gesture
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dy > 50) { // Adjust this threshold to your liking
        onClose(); // Close the modal if a downward swipe is detected
      }
    },
  })).current;
  
  // Default configuration
  const defaultConfig = {
    headerTitle: 'Settings',
    logoutButtonText: 'Logout',
    showFooter: false
  };
  
  // Merge default config and provided config
  const { headerTitle, logoutButtonText, showFooter } = { ...defaultConfig, ...config };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={modalStyles.overlay}>
        <View style={modalStyles.container}>
          
          {/* Modal Header */}
          <View style={modalStyles.header} {...panResponder.panHandlers}>
            <Text style={modalStyles.headerTitle}>{headerTitle}</Text>
            <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
              <Text style={{color: 'black', fontSize: 18}}>X</Text>
            </TouchableOpacity>
          </View>

          {/* New Section for Display Name and Avatar */}
          <View style={modalStyles.displayNameContainer}>
            <Text style={modalStyles.displayNameText}>{config?.displayName}</Text>
            <Image 
              source={{ uri: config?.photoURL }}
              style={modalStyles.avatarImage}
            />
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
    height: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50, 
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
    flex: 1,
    padding: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
    paddingLeft: 30,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  displayNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  displayNameText: {
    fontSize: 16,
    // color: '#yourTextColor',
    marginRight: 10, // Space between text and avatar
  },
  avatarImage: {
    width: 40, // Adjust size as needed
    height: 40, // Adjust size as needed
    borderRadius: 20, // Half of width/height to make it round
  },
});

export default GenericModal;