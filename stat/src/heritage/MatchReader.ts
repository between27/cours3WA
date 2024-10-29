import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { DateUtils } from "../utils";
import { CsvFileReader } from "./CsvFileReader";

export class MatchReader extends CsvFileReader<MatchData> {


    mapRow(line: string[]): MatchData {
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