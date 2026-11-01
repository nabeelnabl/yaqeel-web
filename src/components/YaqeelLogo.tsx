import React from 'react';

export interface YaqeelLogoProps {
  /**
   * 'horizontal': Dark squircle logo on left + real text 'Yaqeel' on right
   * 'symbol': Just the dark squircle logo mark
   * 'text-only': Just the real text 'Yaqeel'
   */
  variant?: 'horizontal' | 'symbol' | 'text-only';
  /**
   * 'white': Pure white text (ideal for black / dark background)
   * 'dark': Neutral 900 dark text (ideal for light / white background)
   * 'current': Uses CSS currentColor
   */
  theme?: 'white' | 'dark' | 'current';
  /** The text to display, defaults to "Yaqeel" */
  text?: string;
  /** Font weight: defaults to 'normal' (400) matching Neue Haas Grotesk thickness */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const YaqeelLogo: React.FC<YaqeelLogoProps> = ({
  variant = 'horizontal',
  theme = 'white',
  text = 'Yaqeel',
  weight = 'normal',
  size = 'md',
  className = '',
  iconClassName = '',
  textClassName = '',
}) => {
  const isWhite = theme === 'white';
  const textColor = isWhite
    ? 'text-white'
    : theme === 'dark'
    ? 'text-neutral-900'
    : 'text-current';

  const weightClass =
    weight === 'bold'
      ? 'font-bold'
      : weight === 'semibold'
      ? 'font-semibold'
      : weight === 'medium'
      ? 'font-medium'
      : 'font-normal';

  // Sizing definitions matching official brand proportions
  const sizeMap = {
    sm: {
      gap: 'gap-2',
      icon: 'w-7 h-7 rounded-lg',
      text: 'text-[19px] leading-none',
    },
    md: {
      gap: 'gap-2.5',
      icon: 'w-8 h-8 sm:w-9 sm:h-9 rounded-xl',
      text: 'text-[21px] sm:text-[22px] leading-none',
    },
    lg: {
      gap: 'gap-3',
      icon: 'w-10 h-10 sm:w-12 sm:h-12 rounded-2xl',
      text: 'text-2xl sm:text-3xl leading-none',
    },
    xl: {
      gap: 'gap-3.5',
      icon: 'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl',
      text: 'text-3xl sm:text-4xl leading-none',
    },
    hero: {
      gap: 'gap-3 sm:gap-4 md:gap-5',
      icon: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl shadow-[0_12px_40px_rgba(255,255,255,0.06)]',
      text: 'text-3xl sm:text-5xl md:text-6xl leading-none',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const renderIcon = (
    <img
      src="/assets/logo.png"
      alt="Yaqeel"
      className={`${currentSize.icon} object-contain transition-transform duration-200 group-hover:scale-105 shrink-0 ${iconClassName}`}
    />
  );

  const renderText = (
    <span
      className={`font-neue ${weightClass} tracking-tight select-none ${currentSize.text} ${textColor} ${textClassName}`}
    >
      {text}
    </span>
  );

  if (variant === 'symbol') {
    return <div className={`inline-flex items-center ${className}`}>{renderIcon}</div>;
  }

  if (variant === 'text-only') {
    return <div className={`inline-flex items-center ${className}`}>{renderText}</div>;
  }

  return (
    <div className={`inline-flex items-center ${currentSize.gap} ${className}`}>
      {renderIcon}
      {renderText}
    </div>
  );
};
