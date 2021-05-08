const fs = require('fs').promises;
const path = require('path');

function getNodeSize(node) {
  return node.reduce((size, file) => size + file.size, 0);
}

function fileCount(node) {
  return node.filter(file => file.isFile).length;
}

function folderCount(node) {
  return node.filter(file => file.isDirectory).length;
}

async function getNodeContent(dir) {
  try {
    const files = await fs.readdir(dir);
    const nodes = [];
  
    await Promise.all(files.map(async file => {
      const currentPath = path.join(dir, file);
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
      }
      nodes.push(node);
    }));
  
    return [...nodes].sort((a, b) => b.size - a.size);
  } catch(err) {
    throw err;
  }
}

exports.readPath = async (dir) => {
  const node = await getNodeContent(dir);
  return {
    node,
    size: getNodeSize(node),
    folderCount: folderCount(node),
    fileCount: fileCount(node),
  }
}
