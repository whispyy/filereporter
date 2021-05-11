export const DirectoryQuery = `
  query ($path: String) {
    node(path: $path) {
      path
      size
      totalFiles
      totalFolder
      subNode {
        name
        size
        totalFiles
        totalFolder
        lastModifiedTime
        isFile
        isDirectory
        path
      }
    }
  }`;
