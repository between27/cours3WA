import  { readFileSync } from "fs";
import { DateUtils } from "../utils";
import { MatchResult } from "../MatchResult";
import { MatchData } from "../MatchData";

export class CsvFileReader {
    public data: MatchData[] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((line) => line.split(","))
            .map(line => { 
                return this.mapRow(line)
            })
  }

  mapRow(line: string[]) : MatchData {
    return [
      DateUtils.dateStringToDate(line[0]),
      line[1],
      line[2],
      parseInt(line[3]),
      parseInt(line[4]),
      line[5] as MatchResult,
      line[6]
    ];
  }
}

