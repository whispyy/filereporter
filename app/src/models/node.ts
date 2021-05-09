export interface SubNodeFolder {
  name: string,
  size: number,
  folderCount: number,
  fileCount: number,
  lastModifiedTime: string,
  isFile: boolean,
  isDirectory: boolean,
}

export interface NodeFolder {
  size: number,
  folderCount: number,
  fileCount: number,
  subNode: SubNodeFolder[],
}