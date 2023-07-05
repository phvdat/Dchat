import './DropdownStyle.css';
import React, { useEffect, useRef, useState } from 'react';

type Place = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type item = {
  elementOption: React.ReactNode;
  horizontal?: boolean;
  place?: Place;
};
interface IDropdownProps {
  list: item[];
  elementAction: React.ReactNode;
}

const Dropdown = (props: IDropdownProps) => {
  const { elementAction, list } = props;
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
    console.log('item.horizontal', list[0].horizontal);

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  return (
    <div className='py-2 relative'>
      <div
        onClick={() => setShowDropdown(true)}
        className='cursor-pointer'
        ref={refDropdown}
      >
        {elementAction}
      </div>
      <ul
        ref={refDropdownContent}
        className='dropdown-content shadow-md rounded-md bg-secondary-light dark:bg-secondary-dark right-0'
        aria-expanded={showDropdown}
      >
        {list.map((item, index) => (
          <li
            key={index}
            className={
              'p-7' + item.horizontal ? ' border-b border-gray-200' : ''
            }
          >
            {item.elementOption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
