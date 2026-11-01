import React from 'react';

interface AppBadgesProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'default' | 'glass';
}

export const GooglePlayBadge: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg'; theme?: 'default' | 'glass' }> = ({ className = '', size = 'md', theme = 'default' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';
  const isGlass = theme === 'glass';

  const badgePadding = isSm
    ? 'px-3 py-1.5 min-w-[130px]'
    : isLg
    ? 'px-6 py-3.5 min-w-[195px]'
    : 'px-3.5 sm:px-5 py-2 sm:py-2.5 min-w-[138px] sm:min-w-[175px]';

  const badgeStyle = isGlass
    ? 'bg-white/[0.08] hover:bg-white/[0.14] text-white rounded-2xl border border-white/15 hover:border-white/30 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
    : 'bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl border border-neutral-700/90 hover:border-neutral-500 shadow-sm';

  const logoDimension = isSm ? 20 : isLg ? 28 : 22;

  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.yaqeel.business&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 select-none ${badgeStyle} ${badgePadding} ${className}`}
      title="Download Yaqeel on Google Play"
    >
      <img
        src="/assets/google-play-logo.png"
        alt="Google Play"
        width={logoDimension}
        height={logoDimension}
        style={{ width: `${logoDimension}px`, height: `${logoDimension}px`, maxWidth: `${logoDimension}px`, maxHeight: `${logoDimension}px` }}
        className="object-contain shrink-0"
        loading="lazy"
      />
      <div className="text-left leading-tight">
        <span className="block text-[8.5px] sm:text-[9.5px] uppercase tracking-wider text-neutral-400 font-medium leading-none">
          GET IT ON
        </span>
        <span className={`block font-semibold tracking-tight text-white whitespace-nowrap leading-tight mt-0.5 sm:mt-1 font-display ${
          isSm ? 'text-[12px]' : isLg ? 'text-[17px]' : 'text-[13px] sm:text-[14.5px]'
        }`}>
          Google Play
        </span>
      </div>
    </a>
  );
};

export const AppStoreBadge: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg'; theme?: 'default' | 'glass' }> = ({ className = '', size = 'md', theme = 'default' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';
  const isGlass = theme === 'glass';

  const badgePadding = isSm
    ? 'px-3 py-1.5 min-w-[130px]'
    : isLg
    ? 'px-6 py-3.5 min-w-[195px]'
    : 'px-3.5 sm:px-5 py-2 sm:py-2.5 min-w-[138px] sm:min-w-[175px]';

  const badgeStyle = isGlass
    ? 'bg-white/[0.08] hover:bg-white/[0.14] text-white rounded-2xl border border-white/15 hover:border-white/30 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
    : 'bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl border border-neutral-700/90 hover:border-neutral-500 shadow-sm';

  const logoDimension = isSm ? 20 : isLg ? 28 : 22;

  return (
    <a
      href="https://apps.apple.com/in/app/yaqeel-for-business/id6767751554"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 sm:gap-3 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 select-none ${badgeStyle} ${badgePadding} ${className}`}
      title="Download Yaqeel on the App Store"
    >
      <img
        src="/assets/apple-store-logo.png"
        alt="App Store"
        width={logoDimension}
        height={logoDimension}
        style={{ width: `${logoDimension}px`, height: `${logoDimension}px`, maxWidth: `${logoDimension}px`, maxHeight: `${logoDimension}px` }}
        className="object-contain shrink-0"
        loading="lazy"
      />
      <div className="text-left leading-tight">
        <span className="block text-[8.5px] sm:text-[9.5px] tracking-wide text-neutral-400 font-medium leading-none">
          Download on the
        </span>
        <span className={`block font-semibold tracking-tight text-white whitespace-nowrap leading-tight mt-0.5 sm:mt-1 font-display ${
          isSm ? 'text-[12px]' : isLg ? 'text-[17px]' : 'text-[13px] sm:text-[14.5px]'
        }`}>
          App Store
        </span>
      </div>
    </a>
  );
};

export const AppBadgesGroup: React.FC<AppBadgesProps> = ({ className = '', size = 'md', theme = 'default' }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 ${className}`}>
      <GooglePlayBadge size={size} theme={theme} />
      <AppStoreBadge size={size} theme={theme} />
    </div>
  );
};
