import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Input } from "@/components/ui";
import { Subject } from "@/model";
import { FormEvent } from "react";

export interface EditModalProps {
  subjectToEdit: Subject | null;
  setSubjectToEdit: (subject: Subject | null) => void;
  handleEditSubject: (e: FormEvent<HTMLFormElement>, id: number) => void;
}

export function EditModal({ subjectToEdit, setSubjectToEdit, handleEditSubject }: EditModalProps) {
    return(
                  <Dialog open={!!subjectToEdit} onOpenChange={(open) => !open && setSubjectToEdit(null)}>
                  <DialogContent className="max-w-md rounded-2xl border-border/60 bg-card p-6 shadow-2xl">
                    <form onSubmit={(e) => handleEditSubject(e, Number(subjectToEdit?.id))}>
                      <DialogHeader>
                      <DialogTitle className="text-xl font-bold tracking-tight">Edit Subject Details</DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground">
                        Update parameters for your chosen study category module.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-2">
                      <Input name="name" defaultValue={subjectToEdit?.name} placeholder="Subject Name" className="h-10" />
                      <Input name="description" defaultValue={subjectToEdit?.description} placeholder="Description" className="h-10" />
                    </div>
                    <div className="pt-4 border-t border-border/60 flex items-center justify-end gap-3">
                      <Button variant="outline" onClick={() => setSubjectToEdit(null)} className="h-10">Cancel</Button>
                      <Button type="submit" className="bg-primary text-primary-foreground h-10">Save Changes</Button>
                    </div>
                    </form>
                  </DialogContent>
                </Dialog>
    );
}