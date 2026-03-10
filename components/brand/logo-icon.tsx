type LogoIconProps = {
  className?: string;
  title?: string;
};

export function LogoIcon({ className, title = 'Vorontsov Labs logo' }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="6" width="68" height="68" rx="12" fill="#0D0D0D" />
      <path
        d="M22 20h12.8L40 31.8 45.2 20H58L44.2 52.6c-1.4 3.4-4.8 5.4-8.2 5.4-3.2 0-6.2-1.8-7.8-4.8L22 20Z"
        fill="#FFFFFF"
      />
      <path d="M48.4 20H58L43 56h-9.8l15.2-36Z" fill="#FF3B30" />
      <path d="M51 12h11v56H51z" fill="#FF3B30" />
    </svg>
  );
}
