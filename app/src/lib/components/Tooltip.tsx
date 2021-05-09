import React from 'react';
import './Tooltip.css';

type Props = {
  text: string,
  tooltipText: string,
  position?: 'top' | 'bottom',
}
function Tooltip({ text, tooltipText, position = 'top' }: Props) {
  const positionClass = position === 'top' ? 'Tooltip__Text_Top' : 'Tooltip__Text_Bottom';
  return (
    <div className="Tooltip">{text}
      <span className={`Tooltip__Text ${positionClass}`}>{tooltipText}</span>
    </div>
  );
}

export default Tooltip;
