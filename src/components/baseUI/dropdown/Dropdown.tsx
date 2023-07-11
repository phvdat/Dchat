import './DropdownStyle.css';
import React, { useEffect, useRef, useState } from 'react';

type Place = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type item = {
  elementOption: React.ReactNode;
  horizontal?: boolean;
};
interface IDropdownProps {
  dropdownContent: item[];
  dropdown: React.ReactNode;
  place?: Place;
}

const Dropdown = (props: IDropdownProps) => {
  const { dropdown, dropdownContent, place = 'bottom-right' } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const refDropdownContent = useRef<HTMLUListElement>(null);
  const refDropdown = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (
      refDropdownContent.current &&
      refDropdown.current &&
      !refDropdownContent.current.contains(event.target) &&
      !refDropdown.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const dropdown = refDropdown.current;
    const dropdownContent = refDropdownContent.current;

    switch (place) {
      case 'bottom-left':
        if (dropdownContent) {
          dropdownContent.style.top = dropdown?.offsetHeight + 'px';
          dropdownContent.style.right = '0';
        }
        break;
      case 'bottom-right':
        if (dropdownContent) {
          dropdownContent.style.top = dropdown?.offsetHeight + 'px';
          dropdownContent.style.left = '0';
        }
        break;

      case 'top-left':
        if (dropdownContent) {
          dropdownContent.style.top =
            '-' + dropdownContent?.offsetHeight + 'px';
          dropdownContent.style.right = '0';
        }
        break;

      case 'top-right':
        if (dropdownContent) {
          dropdownContent.style.top =
            '-' + dropdownContent?.offsetHeight + 'px';
          dropdownContent.style.left = '0';
        }
        break;

      default:
        break;
    }
  }, [place, showDropdown]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  return (
    <div className='relative'>
      <ul
        ref={refDropdownContent}
        className='dropdown-content shadow-md rounded-md bg-secondary-light dark:bg-secondary-dark py-2'
        aria-expanded={showDropdown}
      >
        {dropdownContent.map((item, index) => (
          <li
            key={index}
            className={
              'py-2 px-3 cursor-pointer hover:bg-tertiary-light dark:hover:bg-tertiary-dark' +
              (item.horizontal
                ? ' border-b border-secondary-light dark:bg-secondary-dark'
                : '')
            }
          >
            {item.elementOption}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className='cursor-pointer select-none'
        ref={refDropdown}
      >
        {dropdown}
      </div>
    </div>
  );
};

export default Dropdown;
