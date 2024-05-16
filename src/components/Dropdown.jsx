import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full text-left py-2 px-4 hover:bg-gray-700 block"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="bg-gray-700 rounded-md shadow-lg absolute w-full mt-1">
          {items.map((item, index) => (
            <li key={index} className="py-2 px-4 hover:bg-gray-600">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
