import { Loader2 } from "lucide-react";

export function SubjectLoader() {
  return (
    <div className="py-24 flex flex-col items-center justify-center gap-3">
      <Loader2 className="w-10 h-10 text-primary animate-spin" />
      <p className="text-sm font-medium text-muted-foreground">
        Please wait, loading subjects...
      </p>
    </div>
  );
}
