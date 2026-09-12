import { X } from 'lucide-react';
import { PagePreview } from '../types';

interface ImageModalProps {
  page: PagePreview | null;
  onClose: () => void;
}

export default function ImageModal({ page, onClose }: ImageModalProps) {
  if (!page) return null;

  return (
    <div
      id="image-modal-backdrop"
      className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-[2px] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="image-modal-dialog"
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${page.tagColor}`}
            >
              {page.category}
            </span>
            <h3 className="text-sm font-bold text-neutral-900 truncate">
              {page.title}
            </h3>
          </div>
          <button
            id="close-image-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 bg-neutral-50 flex justify-center">
          <img
            id="modal-preview-image"
            src={page.imageSrc}
            alt={page.title}
            className="max-h-[65vh] w-auto rounded-lg shadow-xs object-contain border border-neutral-200/80"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-4 bg-white border-t border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {page.description}
          </p>
        </div>
      </div>
    </div>
  );
}
