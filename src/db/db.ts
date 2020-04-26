const database: string[] = [];

export function getAll(): string[] {
  return database;
}

export function save(element: string) {
  database.push(element);
}

export function get(elementIndex: number): string {
  if (database.length <= elementIndex) {
    throw new Error("Index outside of range");
  }
  return database[elementIndex];
}
