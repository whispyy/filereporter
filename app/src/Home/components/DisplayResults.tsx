import React, { useState } from 'react';
import Tile from '../../lib/components/Tile';
import autoConvertFromByte from '../../lib/utils/unit-convert';
import { NodeFolder } from '../../models/node';
// import './Home.css';

type Props = {
  node: NodeFolder,
  fetching: boolean,
}
function DisplayResults({ node, fetching }: Props) {

  return (
    <div>
      {node && node.subNode.map(el => (
        <div>
          {el.isDirectory && <span>dir</span>}
          {el.isFile && <span>file</span>}
          <span>{autoConvertFromByte(el.size)}</span> - <span>{el.name}</span>
        </div>
      ))}
    </div>
  );
}

export default DisplayResults;
