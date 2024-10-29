import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { DateUtils } from "../utils";
import { CsvFileReader } from "./CsvFileReader";
import { DataReader } from "./DataReader.interface";

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((line) => {
      return [
        DateUtils.dateStringToDate(line[0]),
        line[1],
        line[2],
        parseInt(line[3]),
        parseInt(line[4]),
        line[5] as MatchResult,
        line[6],
      ];
    });
  }
}
