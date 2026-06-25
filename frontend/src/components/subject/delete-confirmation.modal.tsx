import { AlertCircle, Loader2, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { Subject } from "@/model";
import { cn } from "@/lib/utils";

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
    <Dialog
      open={!!subjectToDelete}
      onOpenChange={() => !isDeleteSubjectPending && setSubjectToDelete(null)}
    >
      <DialogContent className="max-w-md rounded-2xl border border-neutral-200/80 dark:border-neutral-800/50 bg-background p-0 shadow-2xl overflow-hidden tracking-normal">
        <div className="p-8 space-y-7">
          <DialogHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 transition-all duration-300"
                style={{ boxShadow: `0 8px 20px -6px ${themeColor}40` }}
              >
                <Trash2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400 stroke-2" />
              </div>
            </div>

            <div className="space-y-2">
              <DialogTitle className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Delete Subject
              </DialogTitle>

              <DialogDescription className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                Are you sure you want to permanently delete this record?
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/40">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: themeColor }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate mt-0.5">
                {subjectToDelete?.name}
              </p>
            </div>
          </div>

          {errorDeleteSubject && (
            <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/30 rounded-xl text-red-600 dark:text-red-400 text-xs font-medium flex gap-2.5 items-start">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 stroke-2" />
              <span className="leading-normal">
                {errorDeleteSubject.message || "Failed to remove subject."}
              </span>
            </div>
          )}

          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={() => setSubjectToDelete(null)}
              disabled={isDeleteSubjectPending}
              className="w-full sm:w-auto h-10 px-4 text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl transition-all duration-200 disabled:opacity-50 outline-none select-none"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => handleConfirmDelete(Number(subjectToDelete?.id))}
              disabled={isDeleteSubjectPending}
              className={cn(
                "w-full sm:w-auto h-10 px-5 text-xs font-semibold tracking-wide text-white rounded-xl flex items-center gap-2 min-w-[130px] justify-center transition-all duration-200 select-none outline-none shadow-sm shadow-red-950/10",
                "bg-red-600 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-600 active:scale-[0.98] disabled:opacity-50",
              )}
            >
              {isDeleteSubjectPending ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin stroke-[2.5]" />
                </>
              ) : (
                <span>Confirm</span>
              )}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
