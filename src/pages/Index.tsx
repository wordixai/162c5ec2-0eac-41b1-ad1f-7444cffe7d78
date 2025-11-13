import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import PopButton from '../components/PopButton';
import { Star, Zap, TrendingUp } from 'lucide-react';

const Index = () => {
  const products = [
    {
      id: 1,
      title: 'Retro Bomber Jacket',
      price: 89.99,
      category: 'HOT!',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop'
    },
    {
      id: 2,
      title: 'Pop Art Sneakers',
      price: 129.99,
      category: 'NEW!',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop'
    },
    {
      id: 3,
      title: 'Comic Print Tee',
      price: 39.99,
      category: 'SALE!',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
    },
    {
      id: 4,
      title: 'Vintage Sunglasses',
      price: 59.99,
      category: 'COOL!',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop'
    },
    {
      id: 5,
      title: 'Street Style Cap',
      price: 34.99,
      category: 'TREND!',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop'
    },
    {
      id: 6,
      title: 'Neon Backpack',
      price: 79.99,
      category: 'WOW!',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-primary dots-pattern-pink">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title with Pop Art Style */}
            <div className="mb-8 inline-block">
              <div className="bg-card comic-border pop-shadow-yellow px-12 py-6 rotate-[-1deg] inline-block">
                <h2 className="title-font text-6xl md:text-8xl text-foreground leading-tight">
                  BOOM!
                </h2>
              </div>
            </div>

            <div className="bg-secondary comic-border px-8 py-4 rotate-[1deg] inline-block mb-8">
              <p className="handwritten text-2xl md:text-3xl text-secondary-foreground">
                The Coolest Pop Art Fashion Store
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 justify-center items-center">
              <PopButton variant="primary">
                Shop Now!
              </PopButton>
              <PopButton variant="accent">
                View Collection
              </PopButton>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center gap-8">
              <div className="bg-card p-6 comic-border rotate-[-5deg] animate-wiggle">
                <Star className="w-12 h-12 text-secondary fill-secondary" />
              </div>
              <div className="bg-card p-6 comic-border rotate-[3deg] animate-wiggle" style={{ animationDelay: '0.5s' }}>
                <Zap className="w-12 h-12 text-primary fill-primary" />
              </div>
              <div className="bg-card p-6 comic-border rotate-[-3deg] animate-wiggle" style={{ animationDelay: '1s' }}>
                <TrendingUp className="w-12 h-12 text-accent fill-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Comic Speech Bubbles */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="bg-secondary comic-border px-6 py-3 rotate-[-15deg]">
            <p className="handwritten text-xl">WOW!</p>
          </div>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="bg-accent comic-border px-6 py-3 rotate-[12deg]">
            <p className="handwritten text-xl text-accent-foreground">AMAZING!</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background dots-pattern">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block bg-card comic-border pop-shadow px-10 py-5 rotate-[-2deg]">
              <h2 className="title-font text-5xl text-foreground">
                Featured Items
              </h2>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary dots-pattern-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-card comic-border pop-shadow-yellow px-12 py-8 rotate-[1deg] mb-8">
            <h2 className="title-font text-5xl text-foreground">
              Join The Pop Revolution!
            </h2>
          </div>

          <div className="bg-secondary comic-border px-8 py-4 rotate-[-1deg] inline-block mb-12">
            <p className="handwritten text-2xl text-secondary-foreground">
              Get 20% OFF your first order!
            </p>
          </div>

          <PopButton variant="accent">
            Sign Up Now!
          </PopButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12 comic-border border-x-0 border-b-0">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-primary comic-border px-8 py-3 rotate-[-2deg] mb-6">
            <p className="handwritten text-xl text-primary-foreground">
              Made with ❤️ & Pop Art Vibes
            </p>
          </div>
          <p className="text-muted text-sm mt-4">
            © 2024 POP SHOP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
