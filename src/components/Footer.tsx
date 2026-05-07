export function Footer() {
  return (
    <footer className="relative px-6 py-12">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
          <a
            href="mailto:ezhong99@gmail.com"
            className="transition-colors hover:text-accent"
          >
            ezhong99@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/eric-z-422556192"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EricBZhong"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="/Eric_Zhong_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Resume
          </a>
        </div>
        <p className="text-xs text-muted/40">
          &copy; {new Date().getFullYear()} Eric Zhong
        </p>
      </div>
    </footer>
  );
}
