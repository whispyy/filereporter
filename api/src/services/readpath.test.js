function getNodeSize(node) {
  return node.reduce((size, file) => size + file.size, 0);
}

test('should return size of the node when sibling', async ()=> {
  const node = [{
    size: 1,
  },
  {
    size: 4,
  },
  {
    size: 3,
  }];
  const expected = 8;

  const res = getNodeSize(node);

  expect(res).toBe(expected);
})

function fileCount(node) {
  return node.reduce((total, { isFile }) => isFile ? total + 1 : total, 0);
}

test('should return file count of the node', async ()=> {
  const node = [{
    isFile: true,
  },
  {
    isFile: false,
  },
  {
    isFile: true,
  }];
  const expected = 2;

  const res = fileCount(node);

  expect(res).toBe(expected);
})

function folderCount(node) {
  return node.reduce((total, { isDirectory }) => isDirectory ? total + 1 : total, 0);
}

test('should return folder count of the node', async ()=> {
  const node = [{
    isDirectory: true,
  },
  {
    isDirectory: false,
  },
  {
    isDirectory: false,
  }];
  const expected = 1;

  const res = folderCount(node);

  expect(res).toBe(expected);
})

function totalFiles(node) {
  return node.reduce((total, { totalFiles }) => totalFiles ? total + totalFiles : total, 0);
}

test('should return total number of files', async ()=> {
  const node = [{
    totalFiles: 3,
  },
  {
    totalFiles: 4,
  },
  {
    totalFiles: 2,
  }];
  const expected = 9;

  const res = totalFiles(node);

  expect(res).toBe(expected);
})

function totalFolder(node) {
  return node.reduce((total, { totalFolder }) => totalFolder ? total + totalFolder : total, 0);
}

test('should return total number of folders', async ()=> {
  const node = [{
    totalFolder: 3,
  },
  {
    totalFolder: 4,
  },
  {
    totalFolder: 0,
  }];
  const expected = 7;

  const res = totalFolder(node);

  expect(res).toBe(expected);
})