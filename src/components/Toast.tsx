import {RichSnackbar} from '@walmart/ld-kit';

interface ToastProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export default function Toast({open, message, onClose}: ToastProps) {
  return (
    <RichSnackbar
      open={open}
      message={message}
      color="brand"
      contentVariant="left-regular"
      duration={3000}
      position="bottom-center"
      onClose={onClose}
      a11yAnnouncement={message}
    />
  );
}
