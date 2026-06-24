import { AlertCircle, Loader2, Trash2 } from "lucide-react";
import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui";
import { Subject } from "@/model";

export interface DeleteConfirmationModalProps {
    subjectToDelete: Subject | null;
    isDeleteSubjectPending: boolean;
    errorDeleteSubject: Error | null;
    setSubjectToDelete: (subjectToDelete: Subject | null) => void;
    handleConfirmDelete: (id: number) => void;
}

export function DeleteConfirmationModal({subjectToDelete, isDeleteSubjectPending, errorDeleteSubject, setSubjectToDelete, handleConfirmDelete}: DeleteConfirmationModalProps){
  return (
            <Dialog open={!!subjectToDelete} onOpenChange={(open) => !isDeleteSubjectPending && setSubjectToDelete(null)}>
          <DialogContent className="max-w-md rounded-2xl border-border/60 bg-card p-6 shadow-2xl">
            <DialogHeader>
              <div className="w-10 h-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-2">
                <Trash2 className="w-5 h-5" />
              </div>
              <DialogTitle className="text-xl font-bold tracking-tight">Delete Subject</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground leading-normal">
                Are you absolutely sure you want to delete <span className="font-bold text-foreground">"{subjectToDelete?.name}"</span>? This action cannot be undone and all associated module data will be lost permanently.
              </DialogDescription>
            </DialogHeader>

            {errorDeleteSubject && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium flex gap-2 items-center">
                <AlertCircle className="w-4 h-4" />
                <span>{errorDeleteSubject.message || "Failed to remove subject."}</span>
              </div>
            )}

            <div className="pt-4 border-t border-border/60 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSubjectToDelete(null)}
                disabled={isDeleteSubjectPending}
                className="h-10 border-border"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={() => handleConfirmDelete(Number(subjectToDelete?.id))}
                disabled={isDeleteSubjectPending}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg shadow-destructive/10 h-10 px-5 font-semibold flex items-center gap-2 min-w-[140px] justify-center"
              >
                {isDeleteSubjectPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  "Confirm Delete"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
  );
}