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
  path: string,
  size: number,
  totalFolder: number,
  totalFiles: number,
  subNode: SubNodeFolder[],
}