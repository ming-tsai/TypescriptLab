export function asNumber(value: string): number {
  const numb = Number(value);
  if (isNaN(numb)) {
    throw new TypeError("Invalid number");
  }

  return numb;
}

export function asString(value: any): string {
  if (typeof value !== "string") {
    throw new TypeError("Invalid string");
  }
  return value;
}
