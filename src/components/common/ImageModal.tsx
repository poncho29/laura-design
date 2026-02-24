import { useEffect } from 'react';
import '../../styles/components/common/ImageModal.css';

type Props = {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageModal = ({ isOpen, imageUrl, title, onClose }: Props): JSX.Element | null => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <img src={imageUrl} alt={title} className="modal-image" />
      </div>
    </div>
  );
};
