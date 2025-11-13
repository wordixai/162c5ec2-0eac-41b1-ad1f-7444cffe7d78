import { ShoppingCart, Heart, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary dots-pattern-pink py-6 comic-border border-x-0 border-t-0 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="bg-card px-8 py-3 comic-border rotate-[-2deg] pop-shadow animate-wiggle">
            <h1 className="title-font text-4xl text-foreground">
              POP SHOP
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search awesome stuff..."
                className="w-full px-6 py-3 comic-border bg-card text-foreground handwritten text-lg
                  focus:outline-none focus:ring-4 focus:ring-secondary"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary p-2 comic-border
                hover:scale-110 transition-transform">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="bg-card p-4 comic-border hover:bg-secondary transition-all
              hover:rotate-12 hover:scale-110 active:scale-95 relative group">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-6 h-6
                rounded-full flex items-center justify-center text-xs font-bold comic-border
                group-hover:animate-bounce-pop">
                3
              </span>
            </button>

            <button className="bg-secondary p-4 comic-border hover:bg-accent transition-all
              hover:rotate-[-12deg] hover:scale-110 active:scale-95 relative group">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6
                rounded-full flex items-center justify-center text-xs font-bold comic-border
                group-hover:animate-bounce-pop">
                5
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
