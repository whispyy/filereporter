const MAX_SIZE: number = 16;

type Unit = { suffix: string, factor: number };
type Units = { [key: string]: Unit; };

const units: Units = {
  1: { suffix: 'B', factor: 0 },
  2: { suffix: 'B', factor: 0 },
  3: { suffix: 'B', factor: 0 },
  4: { suffix: 'KB', factor: 1 },
  5: { suffix: 'KB', factor: 1 },
  6: { suffix: 'KB', factor: 1 },
  7: { suffix: 'MB', factor: 2 },
  8: { suffix: 'MB', factor: 2 },
  9: { suffix: 'MB', factor: 2 },
  10: { suffix: 'GB', factor: 3 },
  11: { suffix: 'GB', factor: 3 },
  12: { suffix: 'GB', factor: 3 },
  13: { suffix: 'TB', factor: 4 },
  14: { suffix: 'TB', factor: 4 },
  15: { suffix: 'TB', factor: 4 },
  16: { suffix: 'PB', factor: 5 },
}


export function autoConvertFromByte(value: number): string {
  const size: number = value.toString().length
  const conversionSize: string = size > MAX_SIZE ? MAX_SIZE.toString() : size.toString();
  const unit: Unit = units[conversionSize];
  const convertedValue = Math.round(value / 1000 ** unit.factor);

  return `${convertedValue} ${unit.suffix}`;
}

export function formatByte(value: number): string {
  const v = parseInt(value.toString());
  const formattedValue = v.toLocaleString();

  return `${formattedValue} ${units[1].suffix}`;
}
