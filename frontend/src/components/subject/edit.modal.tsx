import { Input, Button, Modal } from "@/components/ui";
import { Subject } from "@/model";
import { AlertCircle, Loader2, Edit2 } from "lucide-react";
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
    <Modal
      isOpen={!!subjectToEdit}
      onClose={() => setSubjectToEdit(null)}
      title="Edit Subject Details"
      icon={<Edit2 className="size-3" />}
      disabled={isEditSubjectPending}
    >
      <div className="p-4 sm:p-5">
        <div className="text-sm text-muted-foreground mb-4">
          Update parameters for your chosen study category module.
        </div>
        {errorEditSubject && (
          <div className="p-3 mb-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium flex gap-2 items-center">
            <AlertCircle className="w-4 h-4" />
            <span>
              {errorEditSubject.message || "Failed to update subject."}
            </span>
          </div>
        )}

        <form
          onSubmit={(e) => handleEditSubject(e, Number(subjectToEdit?.id))}
          className="space-y-4"
        >
          <fieldset disabled={isEditSubjectPending} className="space-y-4">
            <div>
              <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display mb-1.5 block">
                Subject Name
              </label>
              <Input
                name="name"
                defaultValue={subjectToEdit?.name}
                placeholder="e.g., Data Structures and Algorithms"
                required
                className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display mb-1.5 block">
                Description
              </label>
              <Input
                name="description"
                defaultValue={subjectToEdit?.description}
                placeholder="e.g., Analysis of runtime complexities, core fundamental structures, and optimization methods"
                className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display mb-2 block">
                Accent Color
              </label>
              <div className="flex items-center gap-3 bg-muted/10 border border-border/60 rounded-md p-3">
                <input
                  type="color"
                  name="color"
                  defaultValue={subjectToEdit?.color || "#6FAF8F"}
                  className="w-8 h-8 rounded border border-border/80 bg-transparent cursor-pointer overflow-hidden shrink-0"
                />
                <div className="text-[11px] text-muted-foreground leading-normal">
                  Choose a unique color to make the card indicators easier to
                  see.
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end gap-2.5 border-t border-border/40 pt-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setSubjectToEdit(null)}
                className="h-9 rounded-md border border-border/40 px-4 text-xs font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex h-9 items-center gap-1.5 rounded-md px-4 text-xs font-semibold shadow-xs active:scale-[0.98]"
              >
                {isEditSubjectPending ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </Modal>
  );
}
