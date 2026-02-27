export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-accent flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">BZ</span>
          </div>
          <span className="font-mono text-[11px] text-text-muted">&copy; {new Date().getFullYear()} BravoZoom</span>
        </div>
        <div className="flex gap-5 text-[11px] text-text-muted">
          <a href="#" className="hover:text-text-secondary transition-colors">Privacy</a>
          <a href="#" className="hover:text-text-secondary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
