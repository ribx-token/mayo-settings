"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferenceModal = void 0;
const react_1 = __importDefault(require("react"));
const GenericModal_1 = __importDefault(require("../GenericModal"));
const UserPreferenceContext_1 = require("./UserPreferenceContext");
const UserPreferenceModal = ({ onLogout, children, config }) => {
    const { isUserPreferenceOpen, handleCloseUserPreference, } = (0, UserPreferenceContext_1.useUserPreference)();
    return (react_1.default.createElement(GenericModal_1.default, { visible: isUserPreferenceOpen, onClose: handleCloseUserPreference, onLogout: onLogout, showFooter: true, config: config }, children));
};
exports.UserPreferenceModal = UserPreferenceModal;
