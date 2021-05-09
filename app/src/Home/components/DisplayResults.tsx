import React, { useState } from 'react';
import autoConvertFromByte from '../../lib/utils/unit-convert';
import { NodeFolder } from '../../models/node';
// import './Home.css';

type Props = {
    node: NodeFolder,
}
function DisplayResults({ node }: Props) {

  return (
    <div>
      <span>Total files {node.fileCount}</span> | 
      <span>Total folders {node.folderCount}</span> | 
      <span>Size {autoConvertFromByte(node.size)}</span>

      <div>
        {node && node.subNode.map(el => (
          <div>
            {el.isDirectory && <span>dir</span>}
            {el.isFile && <span>file</span>}
            <span>{autoConvertFromByte(el.size)}</span> - <span>{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayResults;
