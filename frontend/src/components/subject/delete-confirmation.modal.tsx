import { AlertCircle, Loader2, Trash2 } from "lucide-react";
import { Subject } from "@/model/subject.model";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

export interface DeleteConfirmationModalProps {
  subjectToDelete: Subject | null;
  isDeleteSubjectPending: boolean;
  errorDeleteSubject: Error | null;
  setSubjectToDelete: (subjectToDelete: Subject | null) => void;
  handleConfirmDelete: (id: number) => void;
}

export function DeleteConfirmationModal({
  subjectToDelete,
  isDeleteSubjectPending,
  errorDeleteSubject,
  setSubjectToDelete,
  handleConfirmDelete,
}: DeleteConfirmationModalProps) {
  const themeColor = subjectToDelete?.color || "#6b7280";

  return (
    <Modal
      isOpen={!!subjectToDelete}
      onClose={() => setSubjectToDelete(null)}
      title="Delete Subject"
      icon={<Trash2 className="size-3" />}
      disabled={isDeleteSubjectPending}
    >
      <div className="p-4 sm:p-5">
        <div className="text-sm text-muted-foreground mb-4">
          Are you sure you want to permanently delete this record?
        </div>

        <div className="flex items-center gap-3 p-3 mb-4 rounded-xl bg-muted/10 border border-border/60">
          <div
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: themeColor }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate mt-0.5">
              {subjectToDelete?.name}
            </p>
          </div>
        </div>

        {errorDeleteSubject && (
          <div className="p-3 mb-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium flex gap-2 items-center">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-normal">
              {errorDeleteSubject.message || "Failed to remove subject."}
            </span>
          </div>
        )}

        <div className="mt-5 flex items-center justify-end gap-2.5 border-t border-border/40 pt-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setSubjectToDelete(null)}
            disabled={isDeleteSubjectPending}
            className="h-9 rounded-md border border-border/40 px-4 text-xs font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => handleConfirmDelete(Number(subjectToDelete?.id))}
            disabled={isDeleteSubjectPending}
            variant="destructive"
            className="flex h-9 items-center gap-1.5 rounded-md px-4 text-xs font-semibold shadow-xs active:scale-[0.98]"
          >
            {isDeleteSubjectPending ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              "Confirm"
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
