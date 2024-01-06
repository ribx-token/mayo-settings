"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const GenericModal = ({ visible, onClose, onLogout, children, config }) => {
    // Initialize PanResponder
    const panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
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
    const { headerTitle, logoutButtonText, showFooter } = Object.assign(Object.assign({}, defaultConfig), config);
    return (react_1.default.createElement(react_native_1.Modal, { visible: visible, animationType: "slide", transparent: true, onRequestClose: onClose },
        react_1.default.createElement(react_native_1.View, { style: modalStyles.overlay },
            react_1.default.createElement(react_native_1.View, { style: modalStyles.container },
                react_1.default.createElement(react_native_1.View, Object.assign({ style: modalStyles.header }, panResponder.panHandlers),
                    react_1.default.createElement(react_native_1.Text, { style: modalStyles.headerTitle }, headerTitle),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: modalStyles.closeButton, onPress: onClose },
                        react_1.default.createElement(react_native_1.Text, { style: { color: 'black', fontSize: 24 } }, "x"))),
                (config === null || config === void 0 ? void 0 : config.displayName) && (react_1.default.createElement(react_native_1.View, { style: modalStyles.displayNameContainer },
                    react_1.default.createElement(react_native_1.Text, { style: modalStyles.displayNameText }, config.displayName),
                    react_1.default.createElement(react_native_1.Image, { source: { uri: config.photoURL }, style: modalStyles.avatarImage }))),
                react_1.default.createElement(react_native_1.ScrollView, { style: modalStyles.content }, children),
                showFooter && (react_1.default.createElement(react_native_1.TouchableOpacity, { style: modalStyles.logoutButton, onPress: onLogout },
                    react_1.default.createElement(react_native_1.Text, { style: { color: 'red', fontSize: 16 } }, logoutButtonText)))))));
};
const modalStyles = react_native_1.StyleSheet.create({
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
        width: 40,
        height: 40,
        borderRadius: 20, // Half of width/height to make it round
    },
});
exports.default = GenericModal;
