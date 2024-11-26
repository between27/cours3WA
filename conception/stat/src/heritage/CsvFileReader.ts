import  { readFileSync } from "fs";
import { DateUtils } from "../utils";
import { MatchResult } from "../MatchResult";
import { MatchData } from "../MatchData";

export abstract class CsvFileReader<T> {
    public data: T[] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((line) => line.split(","))
            .map(this.mapRow)
  }

abstract  mapRow(line: string[]) : T
}

