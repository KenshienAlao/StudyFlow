import { AlertCircle, Loader2, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

type CreateSubjectModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  isCreateSubjectPending: boolean;
  errorCreateSubject: Error | null;
  handleCreateSubject: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function CreateSubjectModal({
  isModalOpen,
  setIsModalOpen,
  isCreateSubjectPending,
  errorCreateSubject,
  handleCreateSubject,
}: CreateSubjectModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Create Subject"
      icon={<BookOpen className="size-3" />}
      disabled={isCreateSubjectPending}
    >
      <div className="p-4 sm:p-5">
        <div className="text-sm text-muted-foreground mb-4">
          Set up a subject to keep your study materials organized.
        </div>
        {errorCreateSubject && (
          <div className="p-3 mb-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium flex gap-2 items-center">
            <AlertCircle className="w-4 h-4" />
            <span>{errorCreateSubject.message || "Something went wrong."}</span>
          </div>
        )}

        <form onSubmit={handleCreateSubject} className="space-y-4">
          <fieldset disabled={isCreateSubjectPending} className="space-y-4">
            <div>
              <label
                htmlFor="create-subject-name"
                className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display mb-1.5 block"
              >
                Subject Name
              </label>
              <Input
                id="create-subject-name"
                name="name"
                placeholder="e.g., Data Structures and Algorithms"
                required
                className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="create-subject-desc"
                className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display mb-1.5 block"
              >
                Description
              </label>
              <Input
                id="create-subject-desc"
                name="description"
                placeholder="e.g., Analysis of runtime complexities, core fundamental structures, and optimization methods"
                className="h-9.5 border-border/60 bg-muted/10 text-xs shadow-xs transition-colors focus-visible:bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="create-subject-color"
                className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-display mb-2 block"
              >
                Accent Color
              </label>
              <div className="flex items-center gap-3 bg-muted/10 border border-border/60 rounded-md p-3">
                <input
                  id="create-subject-color"
                  type="color"
                  name="color"
                  defaultValue="#6FAF8F"
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
                onClick={() => setIsModalOpen(false)}
                className="h-9 rounded-md border border-border/40 px-4 text-xs font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex h-9 items-center gap-1.5 rounded-md px-4 text-xs font-semibold shadow-xs active:scale-[0.98]"
              >
                {isCreateSubjectPending ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  "Create Subject"
                )}
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </Modal>
  );
}
