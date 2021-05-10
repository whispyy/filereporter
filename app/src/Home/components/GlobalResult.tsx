import React from 'react';
import Tile from '../../lib/components/Tile';
import Tooltip from '../../lib/components/Tooltip';
import { autoConvertFromByte, formatByte } from '../../lib/utils/unit-convert';
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
        description={`${node?.totalFiles}`}
        fetching={fetching}
      />
      <Tile
        title="Number of folders"
        description={`${node?.totalFolder}`}
        fetching={fetching}
      />
      <Tile
        title="Global Size"
        description={(
          <Tooltip
            text={autoConvertFromByte(node?.size || 0)}
            tooltipText={formatByte(node?.size || 0)}
            position="bottom"
          />
        )}
        fetching={fetching}
      />
    </div>
  );
}

export default GlobalResult;
