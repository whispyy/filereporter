import React, { useState } from 'react';
import Tile from '../../lib/components/Tile';
import autoConvertFromByte from '../../lib/utils/unit-convert';
import { NodeFolder } from '../../models/node';
import './GlobalResult.css';

type Props = {
  node: NodeFolder | undefined,
  fetching: boolean,
}
function GlobalResult({ node, fetching }: Props) {

  return (
    <div className="GlobalResult-Container">
      <Tile
        title="Number of files"
        description={`${node?.fileCount}`}
        fetching={fetching}
      />
      <Tile
        title="Number of folders"
        description={`${node?.folderCount}`}
        fetching={fetching}
      />
      <Tile
        title="Global Size"
        description={`${autoConvertFromByte(node?.size || 0)}`}
        fetching={fetching}
      />
    </div>
  );
}

export default GlobalResult;
