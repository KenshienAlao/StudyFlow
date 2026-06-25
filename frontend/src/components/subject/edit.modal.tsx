import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
} from "@/components/ui";
import { Subject } from "@/model";
import { AlertCircle, Loader2 } from "lucide-react";
import { FormEvent } from "react";

export interface EditModalProps {
  subjectToEdit: Subject | null;
  setSubjectToEdit: (subject: Subject | null) => void;
  handleEditSubject: (e: FormEvent<HTMLFormElement>, id: number) => void;
  isEditSubjectPending: boolean;
  errorEditSubject: Error | null;
}

export function EditModal({
  subjectToEdit,
  setSubjectToEdit,
  handleEditSubject,
  isEditSubjectPending,
  errorEditSubject,
}: EditModalProps) {
  return (
    <Dialog
      open={!!subjectToEdit}
      onOpenChange={(open) =>
        !open && !isEditSubjectPending && setSubjectToEdit(null)
      }
    >
      <DialogContent className="max-w-md rounded-2xl border-border/60 bg-card p-6 shadow-2xl">
        <form onSubmit={(e) => handleEditSubject(e, Number(subjectToEdit?.id))}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold tracking-tight">
              Edit Subject Details
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Update parameters for your chosen study category module.
            </DialogDescription>
          </DialogHeader>

          {errorEditSubject && (
            <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium flex gap-2 items-center">
              <AlertCircle className="w-4 h-4" />
              <span>
                {errorEditSubject.message || "Failed to update subject."}
              </span>
            </div>
          )}

          <div className="space-y-5 pt-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Subject Name
              </label>
              <Input
                name="name"
                defaultValue={subjectToEdit?.name}
                placeholder="e.g., Data Structures and Algorithms"
                required
                disabled={isEditSubjectPending}
                className="h-10 border-border/80 focus:border-primary placeholder:text-muted-foreground/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Description
              </label>
              <Input
                name="description"
                defaultValue={subjectToEdit?.description}
                placeholder="e.g., Analysis of runtime complexities, core fundamental structures, and optimization methods"
                disabled={isEditSubjectPending}
                className="h-10 border-border/80 focus:border-primary placeholder:text-muted-foreground/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Accent Color
              </label>
              <div className="flex items-center gap-3 bg-muted/40 border border-border/60 rounded-xl p-3">
                <input
                  type="color"
                  name="color"
                  defaultValue={subjectToEdit?.color || "#6FAF8F"}
                  disabled={isEditSubjectPending}
                  className="w-10 h-10 rounded-lg border border-border/80 bg-transparent cursor-pointer overflow-hidden shrink-0"
                />
                <div className="text-xs text-muted-foreground leading-normal">
                  Choose a unique color to make the card indicators easier to
                  see.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubjectToEdit(null)}
              disabled={isEditSubjectPending}
              className="h-10 border-border"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isEditSubjectPending}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/10 h-10 px-5 font-semibold flex items-center gap-2 min-w-[140px] justify-center"
            >
              {isEditSubjectPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
