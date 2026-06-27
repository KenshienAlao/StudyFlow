import { X } from "lucide-react";
import { ReactNode, useRef } from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
};

export function Modal({
  isOpen,
  onClose,
  title,
  icon,
  children,
  disabled,
}: ModalProps) {
  if (!isOpen) return null;

  const handleClose = () => {
    if (!disabled) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 drop-shadow-2xl">
      <button
        aria-label="Close modal"
        type="button"
        className="absolute inset-0 bg-background/40 backdrop-blur-md animate-fade-in"
        onClick={handleClose}
      />

      <dialog
        aria-label="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-border/80 bg-card shadow-xl animate-in fade-in-50 zoom-in-95"
      >
        <div className="h-1 w-full bg-linear-to-r from-primary/30 via-primary to-primary/30" />

        <div className="flex items-center justify-between border-b border-border/40 bg-muted/5 p-4 sm:p-5">
          <div className="flex items-center gap-2">
            {icon && (
              <div className="flex h-5 w-5 items-center justify-center rounded border border-primary/20 bg-primary/10 text-primary">
                {icon}
              </div>
            )}
            <h2 className="font-display text-sm font-bold tracking-tight sm:text-base">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={disabled}
            className="cursor-pointer rounded-md p-1 text-muted-foreground/60 transition hover:bg-muted/40 hover:text-foreground disabled:opacity-50"
          >
            <X className="size-4" />
          </button>
        </div>

        {children}
      </dialog>
    </div>
  );
}
