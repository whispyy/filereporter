export const DirectoryQuery = `
  query ($path: String) {
    node(path: $path) {
      size
      folderCount
      fileCount
      subNode {
        name
        size
        folderCount
        fileCount
        lastModifiedTime
        isFile
        isDirectory
      }
    }
  }`;
