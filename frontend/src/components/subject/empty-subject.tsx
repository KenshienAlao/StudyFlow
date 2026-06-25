import { BookOpen, Plus } from "lucide-react";
import { Button } from "../ui";

export function EmptySubject({setIsOpen}: {setIsOpen: (open: boolean) => void}) {
    return(
          <div className="text-center border-2 border-dashed border-border/80 rounded-2xl p-16 bg-card/40 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">No subjects created yet</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              Create your first subject track to organize your workspace modules and study workflows.
            </p>
            <Button onClick={() => setIsOpen(true)} variant="outline" className="border-border hover:bg-muted/50">
              <Plus className="w-4 h-4 mr-2" /> Create Subject
            </Button>
          </div>
    )
}