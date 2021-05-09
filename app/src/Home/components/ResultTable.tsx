import React from 'react';
import Tooltip from '../../lib/components/Tooltip';
import { autoConvertFromByte, formatByte } from '../../lib/utils/unit-convert';
import { NodeFolder } from '../../models/node';
import './ResultTable.css';

type Props = {
  node?: NodeFolder,
  fetching: boolean,
}
function ResultTable({ node, fetching }: Props) {
  const formattedDate = (timestamp: string) => new Date(parseInt(timestamp)).toLocaleDateString();
  return (
    <div className="ResultTable">
      <div className="ResultTable-Head">
        <div className="ResultTable__Item -Small">Type</div>
        <div className="ResultTable__Item -Small">Size</div>
        <div className="ResultTable__Item -Large">Name</div>
        <div className="ResultTable__Item -Medium">Last Modification</div>
        <div className="ResultTable__Item -Small">File Count</div>
        <div className="ResultTable__Item -Small">Folder Count</div>
      </div>

      <div className="ResultTable-Section">
        {fetching && <div className="spinner">Loading...</div>}
        {!fetching && node && node.subNode.map(el => (
          <div className="ResultTable-Section__Row" key={el.path}>
            {el.isDirectory && <div className="ResultTable__Item -Small">Dir</div>}
            {el.isFile && <div className="ResultTable__Item -Small">File</div>}
            <div className="ResultTable__Item -Small">
              <Tooltip text={autoConvertFromByte(el.size)} tooltipText={formatByte(el.size)} />
            </div>
            <div className="ResultTable__Item -Large">{el.name}</div>
            <div className="ResultTable__Item -Medium">{formattedDate(el.lastModifiedTime)}</div>
            <div className="ResultTable__Item -Small">{el.fileCount}</div>
            <div className="ResultTable__Item -Small">{el.folderCount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultTable;
