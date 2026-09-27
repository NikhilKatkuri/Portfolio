import Dexie, { type Table } from "dexie";

export interface ThemeConfig {
  key: string;
  value: string;
}

export interface VisitorRecord {
  id: string;
  visitedAt: number;
}

class ThemeDatabase extends Dexie {
  themeConfig!: Table<ThemeConfig, string>;
  visitors!: Table<VisitorRecord, string>;

  constructor() {
    super("ThemeDB");
    this.version(1).stores({
      themeConfig: "key"
    });
    this.version(2).stores({
      themeConfig: "key",
      visitors: "id"
    });
  }
}

export const db = new ThemeDatabase();
