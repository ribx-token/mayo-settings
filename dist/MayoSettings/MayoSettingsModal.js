"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GenericModal_1 = __importDefault(require("../GenericModal"));
const MayoSettingsContext_1 = require("./MayoSettingsContext");
const MayoSettingsModal = ({ onLogout, children, config }) => {
    const { isMayoSettingsOpen, handleCloseMayoSettings } = (0, MayoSettingsContext_1.useMayoSettings)();
    return (react_1.default.createElement(GenericModal_1.default, { visible: isMayoSettingsOpen, onClose: handleCloseMayoSettings, onLogout: onLogout, config: config }, children));
};
exports.default = MayoSettingsModal;
