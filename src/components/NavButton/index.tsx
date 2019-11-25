import React from "react";

interface INavButtonProps {
  label: string;
  isActive: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<INavButtonProps> = ({
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

export default NavButton;
