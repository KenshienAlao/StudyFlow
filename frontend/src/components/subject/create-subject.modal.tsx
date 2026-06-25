import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
  Button,
} from "@/components/ui";
import { AlertCircle, Loader2 } from "lucide-react";

type CreateSubjectModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isCreateSubjectPending: boolean;
  errorCreateSubject: Error | null;
  handleCreateSubject: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function CreateSubjectModal({
  isOpen,
  setIsOpen,
  isCreateSubjectPending,
  errorCreateSubject,
  handleCreateSubject,
}: CreateSubjectModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !isCreateSubjectPending && setIsOpen(open)}
    >
      <DialogContent className="max-w-md rounded-2xl border-border/60 bg-card p-6 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">
            Create New Subject
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Set up a subject to keep your study materials organized.
          </DialogDescription>
        </DialogHeader>

        {errorCreateSubject && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium flex gap-2 items-center">
            <AlertCircle className="w-4 h-4" />
            <span>{errorCreateSubject.message || "Something went wrong."}</span>
          </div>
        )}

        <form onSubmit={handleCreateSubject} className="space-y-5 pt-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Subject Name
            </label>
            <Input
              name="name"
              placeholder="e.g., Data Structures and Algorithms"
              required
              disabled={isCreateSubjectPending}
              className="h-10 border-border/80 focus:border-primary placeholder:text-muted-foreground/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
              Description
            </label>
            <Input
              name="description"
              placeholder="e.g., Analysis of runtime complexities, core fundamental structures, and optimization methods"
              disabled={isCreateSubjectPending}
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
                defaultValue="#6FAF8F"
                disabled={isCreateSubjectPending}
                className="w-10 h-10 rounded-lg border border-border/80 bg-transparent cursor-pointer overflow-hidden shrink-0"
              />
              <div className="text-xs text-muted-foreground leading-normal">
                Choose a unique color to make the card indicators easier to see.
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-border/60 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isCreateSubjectPending}
              className="h-10 border-border"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isCreateSubjectPending}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/10 h-10 px-5 font-semibold flex items-center gap-2 min-w-[120px]"
            >
              {isCreateSubjectPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Create Subject"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
