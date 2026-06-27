export function FooterSection() {
  return (
    <footer className="border-t border-border/30 py-8 bg-background">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-medium">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} StudyFlow. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6 tracking-wide">
          {/* TODO: make clickable soon */}
          <span className="hover:text-primary cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-primary cursor-pointer transition-colors">
            Terms of Service
          </span>
          <span className="hover:text-primary cursor-pointer transition-colors">
            Support
          </span>
        </div>
      </div>
    </footer>
  );
}
