import React from 'react';
import {ICONS} from './hook';


const Icon = ({
  name,
  width,
  height,
  color,
  onClick,
  className,
  mode=""
}) => {
  return (
    <div
      onClick={onClick}
      className={mode ? `${className} nextPrev`: className}
    >
      {ICONS[name] && ICONS[name]({ width, height, color, mode})}
    </div>
  );
};

export default Icon;