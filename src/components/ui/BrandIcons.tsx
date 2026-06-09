type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.02 3.2A12.66 12.66 0 0 0 5.16 22.38L3.6 28.8l6.58-1.5A12.65 12.65 0 1 0 16.02 3.2Zm0 2.53a10.12 10.12 0 0 1 8.6 15.48 10.1 10.1 0 0 1-12.92 3.4l-.46-.23-3.88.88.92-3.78-.25-.49a10.12 10.12 0 0 1 7.99-15.26Zm-4.2 4.73c-.23 0-.6.08-.92.43-.32.35-1.22 1.2-1.22 2.93 0 1.72 1.25 3.38 1.43 3.62.17.23 2.42 3.88 6.02 5.28 2.99 1.17 3.6.94 4.25.88.65-.06 2.1-.86 2.4-1.69.3-.83.3-1.54.21-1.69-.09-.14-.32-.23-.68-.4-.35-.18-2.1-1.04-2.43-1.16-.32-.12-.56-.18-.8.18-.23.35-.92 1.16-1.13 1.39-.21.24-.41.27-.77.09-.35-.18-1.5-.55-2.85-1.76a10.7 10.7 0 0 1-1.97-2.45c-.2-.36-.02-.55.15-.73.16-.16.36-.42.53-.62.18-.2.24-.35.36-.59.12-.24.06-.44-.03-.62-.09-.18-.8-1.94-1.1-2.65-.29-.7-.58-.6-.8-.61h-.66Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="6"
        y="6"
        width="20"
        height="20"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <circle cx="16" cy="16" r="4.8" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="21.7" cy="10.3" r="1.35" fill="currentColor" />
    </svg>
  );
}
