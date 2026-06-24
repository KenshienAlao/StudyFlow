import { Card } from "@/components/ui";
import { Subject } from "@/model";
import { BookOpen, MoreVertical, Edit2, Trash2 } from "lucide-react";

interface SubjectCardProps {
    subjects: Subject[];
    activeMenuId: string | null;
    setActiveMenuId: (id: string | null) => void;
    setSubjectToEdit: (subject: Subject) => void;
    setSubjectToDelete: (subject: Subject) => void;
}

export function SubjectCard({ subjects, activeMenuId, setActiveMenuId, setSubjectToEdit, setSubjectToDelete }: SubjectCardProps) {
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {subjects.map((subject) => {
                const themeColor = subject.color || "#6FAF8F";
                const subjectId = subject.id;
                const isMenuOpen = activeMenuId === subjectId;
        
                      return (
                        <Card key={subjectId} className="p-6 border border-border/60 bg-card hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between h-48">
                          <div>
                            <div className="flex items-start justify-between mb-4 relative">
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${themeColor}15` }}
                              >
                                <BookOpen
                                  className="w-5 h-5"
                                  style={{ color: themeColor }}
                                />
                              </div>
        
                              {/* Native Absolute Mini-Menu Block */}
                              <div className="relative">
                                <button 
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveMenuId(isMenuOpen ? null : subjectId);
                                  }}
                                  className="p-2 hover:bg-muted/80 rounded-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer outline-none"
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </button>
        
                                {isMenuOpen && (
                                  <div className="absolute right-0 top-9 w-40 rounded-xl border border-border/60 p-1 bg-card shadow-xl z-30 animate-fade-in">
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
        
                            <h3 className="text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">
                              {subject.name}
                            </h3>
                          </div>
        
                          {/* Description Render Node */}
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
                            {subject.description || "No description provided for this subject."}
                          </p>
                        </Card>
                      );
                    })}
                  </div>
    )
}