import * as React from "react";

interface IPageNavButtonProps {
  label: string;
  isActive: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const PageNavButton: React.FC<IPageNavButtonProps> = ({
  label,
  isActive,
  disabled,
  onClick,
}) => {
  const activeClass = isActive ? "--active" : "--inactive";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`page-nav__button page-nav__button${activeClass}`}
    >
      {label}
    </button>
  );
};

export default PageNavButton;
