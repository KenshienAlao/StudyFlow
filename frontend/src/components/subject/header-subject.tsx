import { Plus } from "lucide-react";
import { Button } from "@/components/ui";

export function Header({setIsOpen}: {setIsOpen: (open: boolean) => void}) {
    return(
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-foreground tracking-tight">Subjects</h1>
            <p className="text-muted-foreground text-sm">
              Manage your academic focus points and course categories.
            </p>
          </div>
          <Button 
            onClick={() => setIsOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-semibold"
          >
            <Plus className="w-4 h-4 mr-2 stroke-3" />
            Add Subject
          </Button>
        </div>

    );
}