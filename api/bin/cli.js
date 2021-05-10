#!/usr/bin/env node

const Table = require('cli-table');
const readPath = require('../src/services/readpath').readPath;
const [,, ...args] = process.argv;

const path = args[0] || __dirname;

const formatter = (node) => {
  const table = new Table({
    head: ['D/F', 'Name', 'Size (B)', 'Last Modified', 'Files', 'Folders'],
    colWidths: [8, 15, 20, 15, 8, 8],
  });

  node.subNode.forEach(subNode => {
    const filedir = subNode.isFile ? 'File' : 'Dir';
    const date = new Date(subNode.lastModifiedTime).toLocaleDateString();
    table.push([
      filedir,
      subNode.name,
      subNode.size.toLocaleString(),
      date,
      subNode?.fileCount || 0,
      subNode?.folderCount || 0
    ]);
  });
  console.log(table.toString());

  console.log('---');
  console.log(`Size : ${node.size.toLocaleString()} B`);
  console.log(`Files: ${node.fileCount}`);
  console.log(`Folders: ${node.folderCount}`);
}

readPath(path).then(res => formatter(res));

