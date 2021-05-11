const fs = require('fs').promises;
const path = require('path');

function getNodeSize(node) {
  return node.reduce((size, file) => size + file.size, 0);
}

function fileCount(node) {
  return node.reduce((total, { isFile }) => isFile ? total + 1 : total, 0);
}

function folderCount(node) {
  return node.reduce((total, { isDirectory }) => isDirectory ? total + 1 : total, 0);
}

function totalFiles(node) {
  return node.reduce((total, { totalFiles }) => totalFiles ? total + totalFiles : total, 0);
}

function totalFolder(node) {
  return node.reduce((total, { totalFolder }) => totalFolder ? total + totalFolder : total, 0);
}

async function getNodeContent(dir) {
  try {
    const files = await fs.readdir(dir);
    const nodes = [];
  
    await Promise.all(files.map(async file => {
      const currentPath = path.resolve(dir, file);
      const stats = await fs.stat(currentPath);
  
      const node = {
        path: currentPath,
        lastModifiedTime: stats.mtime,
        size: stats.size,
        name: file,
        isFile: stats.isFile(),
        isDirectory: stats.isDirectory(),
      };
  
      if (stats.isDirectory()) {
        const subNode = await getNodeContent(currentPath);
        node.subNode = subNode;
        node.size = getNodeSize(subNode);
        node.fileCount = fileCount(subNode);
        node.folderCount = folderCount(subNode);
        node.totalFiles = totalFiles(subNode) + node.fileCount;
        node.totalFolder = totalFolder(subNode) + node.folderCount;
      }
      nodes.push(node);
    }));
  
    return [...nodes].sort((a, b) => b.size - a.size);
  } catch(err) {
    if (err.code === 'ENOENT' || err.code === 'EPERM') {
      return [{
        path: dir,
        lastModifiedTime: 0,
        size: 0,
        name: err.code,
        isFile: false,
        isDirectory: false,
      }]
    }
    throw err;
  }
}

exports.readPath = async (dir) => {
  const node = await getNodeContent(dir);
  const files = fileCount(node);
  const folders = folderCount(node);
  return {
    path: dir,
    subNode: node,
    size: getNodeSize(node),
    folderCount: folders,
    fileCount: files,
    totalFiles: totalFiles(node) + files,
    totalFolder: totalFolder(node) + folders,
  }
}
