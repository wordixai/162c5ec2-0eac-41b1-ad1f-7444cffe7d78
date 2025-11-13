import { ButtonHTMLAttributes } from 'react';

interface PopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

const PopButton = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: PopButtonProps) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90'
  };

  return (
    <button
      className={`
        ${variants[variant]}
        px-8 py-4
        comic-border
        handwritten text-xl font-bold
        hover:scale-105 hover:animate-bounce-pop
        active:scale-95
        transition-all duration-200
        rotate-[-1deg]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default PopButton;
