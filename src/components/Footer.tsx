export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
          <a
            href="mailto:ezhong99@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            ezhong99@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/eric-z-422556192"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EricBZhong"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="/Eric_Zhong_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Resume
          </a>
        </div>
        <p className="text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Eric Zhong
        </p>
      </div>
    </footer>
  );
}
