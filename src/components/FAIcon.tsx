interface FAIconProps {
  icon: string;
  className?: string;
  ariaHidden?: boolean;
}

export default function FAIcon({ icon, className = "", ariaHidden = true }: FAIconProps) {
  return <i className={`${icon} ${className}`} aria-hidden={ariaHidden}></i>;
}
