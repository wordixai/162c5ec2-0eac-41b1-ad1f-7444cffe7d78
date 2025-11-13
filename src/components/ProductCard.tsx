import { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  category: string;
}

const ProductCard = ({ image, title, price, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="comic-border bg-card pop-shadow hover:pop-shadow-yellow transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Tag */}
      <div className="bg-primary px-4 py-1 inline-block -rotate-2 relative -top-2 -left-2">
        <span className="handwritten text-primary-foreground text-sm">
          {category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-muted dots-pattern">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110 rotate-2' : 'scale-100'
          }`}
        />
        {/* Comic Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6 bg-card">
        <h3 className="title-font text-2xl mb-3 text-foreground rotate-[-1deg]">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="bg-secondary px-4 py-2 rotate-1 comic-border">
            <span className="handwritten text-3xl text-secondary-foreground">
              ${price}
            </span>
          </div>

          <button
            className={`bg-primary text-primary-foreground px-6 py-3 comic-border handwritten text-lg font-bold
              hover:bg-accent hover:scale-105 active:scale-95 transition-all duration-200 -rotate-2
              ${isHovered ? 'animate-bounce-pop' : ''}`}
          >
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
