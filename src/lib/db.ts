import Dexie, { type Table } from "dexie";

export interface ThemeConfig {
  key: string;
  value: string;
}

class ThemeDatabase extends Dexie {
  themeConfig!: Table<ThemeConfig, string>;

  constructor() {
    super("ThemeDB");
    this.version(1).stores({
      themeConfig: "key"
    });
  }
}

export const db = new ThemeDatabase();
