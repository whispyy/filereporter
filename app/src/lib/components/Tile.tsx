import React from 'react';
import './Tile.css';

type Props = {
  title: string,
  description: string,
  fetching?: boolean,
}
function Tile({ title, description, fetching }: Props) {
  const loadingClass = fetching ? '-fetching': '';

  return (
    <div className="Tile-Container">
      <div className="Tile__Title">{title}</div>
      <div className={`Tile__Description ${loadingClass}`}>{description}</div>
    </div>
  );
}

export default Tile;
