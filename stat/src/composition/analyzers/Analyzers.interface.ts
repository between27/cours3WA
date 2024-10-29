import { MatchData } from "../../MatchData";

export interface Analyzer {
    teamName: string
    run(matches: MatchData[]): string
}