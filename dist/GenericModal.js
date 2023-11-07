"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const GenericModal = ({ visible, onClose, onLogout, children, config }) => {
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
                react_1.default.createElement(react_native_1.View, { style: modalStyles.header },
                    react_1.default.createElement(react_native_1.Text, { style: modalStyles.headerTitle }, headerTitle),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { style: modalStyles.closeButton, onPress: onClose },
                        react_1.default.createElement(react_native_1.Text, { style: { color: 'black', fontSize: 18 } }, "X"))),
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
});
exports.default = GenericModal;
