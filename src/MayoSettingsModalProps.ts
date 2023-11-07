export interface MayoSettingsModalProps {
    visible: boolean;
    onClose: () => void;
    onLogout?: () => void;
    children?: React.ReactNode;
    config?: ModalConfig;
  }

export interface ModalConfig {
  headerTitle?: string;
  logoutButtonText?: string;
  showFooter?: boolean;
}