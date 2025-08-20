import React from "react";

export const Operations = ({ display, backspaceClick }) => {
  const value = display || "0";
  const length = value.length;

  // Dynamically decide font size
  const fontSize =
    length <= 3
      ? "text-8xl"
      : length <= 5
      ? "text-6xl"
      : length <= 10
      ? "text-4xl"
      : length <= 16
      ? "text-2xl"
      : length <= 25
      ? "text-xl"
      : "text-sm";

  return (
    <div className="flex items-center w-full mb-8 text-white">
      {/* scrollable text container */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-none text-right px-4">
        <span
          className={`${fontSize} transition-all duration-100 leading-none whitespace-nowrap`}>
          {value}
        </span>
      </div>

      {/* backspace button */}
      <button
        onClick={backspaceClick}
        className="ml-2 bg-lightCharcoal text-3xl text-black flex items-center justify-center rounded-full w-20 h-20">
        ⌫
      </button>
    </div>
  );
};
