export interface SubNodeFolder {
  name: string,
  size: number,
  folderCount: number,
  fileCount: number,
  lastModifiedTime: string,
  isFile: boolean,
  isDirectory: boolean,
  path: string,
}

export interface NodeFolder {
  size: number,
  folderCount: number,
  fileCount: number,
  subNode: SubNodeFolder[],
}