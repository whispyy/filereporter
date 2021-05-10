export interface SubNodeFolder {
  name: string,
  size: number,
  totalFolder: number,
  totalFiles: number,
  lastModifiedTime: string,
  isFile: boolean,
  isDirectory: boolean,
  path: string,
}

export interface NodeFolder {
  size: number,
  totalFolder: number,
  totalFiles: number,
  subNode: SubNodeFolder[],
}