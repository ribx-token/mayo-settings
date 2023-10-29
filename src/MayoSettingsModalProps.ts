export interface MayoSettingsModalProps {
    visible: boolean;
    onClose: () => void;
    onLogout?: () => void;
    children?: React.ReactNode;
    showFooter?: boolean;
    config?: ModalConfig;
  }

export interface ModalConfig {
  headerTitle?: string;
  logoutButtonText?: string;
  // any other configurations...
}
  