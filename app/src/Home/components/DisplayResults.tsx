import React, { useState } from 'react';
import { NodeFolder } from '../../models/node';
// import './Home.css';

type Props = {
    node: NodeFolder,
}
function DisplayResults({ node }: Props) {

  return (
    <div>
      <span>{node.fileCount}</span> | 
      <span>{node.folderCount}</span> | 
      <span>{node.size}</span>
    </div>
  );
}

export default DisplayResults;
