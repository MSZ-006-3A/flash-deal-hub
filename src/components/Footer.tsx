export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="font-bold">Flash Deal</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Affiliate Disclosure</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <p className="text-xs text-muted-foreground text-center md:text-right">
            © 2024 Flash Deal. All rights reserved.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            Flash Deal is an affiliate platform. We earn commissions from purchases made through our links. 
            Prices and availability are subject to change. Deals are updated every 5-10 minutes.
          </p>
        </div>
      </div>
    </footer>
  );
};
