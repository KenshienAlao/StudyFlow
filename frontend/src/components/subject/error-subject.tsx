import { AlertCircle } from "lucide-react";

export function Error({error}: {error: Error}) {
    return(
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex gap-3 items-center text-destructive text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="font-medium">
                      {error.message}
                    </span>
                  </div>
    )
}