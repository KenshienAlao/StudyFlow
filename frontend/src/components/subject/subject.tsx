import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Subject } from "@/model/subject.model";
import { BookOpen, MoreVertical, Edit2, Trash2 } from "lucide-react";

interface SubjectCardProps {
  subjects: Subject[];
  activeMenuId: number | null;
  setActiveMenuId: (id: number | null) => void;
  setSubjectToEdit: (subject: Subject) => void;
  setSubjectToDelete: (subject: Subject) => void;
}

export function SubjectCard({
  subjects,
  activeMenuId,
  setActiveMenuId,
  setSubjectToEdit,
  setSubjectToDelete,
}: SubjectCardProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {subjects.map((subject) => {
        const themeColor = subject.color;
        const subjectId = Number(subject.id);
        const isMenuOpen = activeMenuId === subjectId;
        return (
          <Card
            key={subjectId}
            className={cn(
              "p-6 border-0 shadow-md flex flex-col justify-between h-48 relative overflow-hidden text-white cursor-pointer",
            )}
            style={
              {
                backgroundColor: themeColor,
                "--card-shadow": `${themeColor}25`,
                "--card-shadow-hover": `${themeColor}40`,
              } as React.CSSProperties
            }
          >
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              <div className="flex items-start justify-between mb-4 relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md shadow-inner">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(isMenuOpen ? null : subjectId);
                    }}
                    className="p-2 bg-white/0 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-all cursor-pointer outline-none"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 top-9 w-40 rounded-xl border border-border/40 p-1 bg-card shadow-2xl z-30 animate-fade-in text-foreground">
                      <button
                        type="button"
                        onClick={() => setSubjectToEdit(subject)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer text-left hover:bg-muted transition-colors focus:bg-muted outline-none"
                      >
                        <Edit2 className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Edit details</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubjectToDelete(subject)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer text-left text-destructive hover:bg-destructive/10 transition-colors focus:bg-destructive/10 outline-none"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-1 line-clamp-1">
                {subject.name}
              </h3>
            </div>

            <p className="text-sm text-white/85 line-clamp-2 mt-auto font-medium">
              {subject.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
