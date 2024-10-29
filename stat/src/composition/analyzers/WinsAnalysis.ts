import { MatchData } from "../../MatchData";
import { MatchResult } from "../../MatchResult";
import { Analyzer } from "./Analyzers.interface";

export class WinsAnalysis implements Analyzer {
    public teamWins = 0
    constructor(public teamName: string){}
    run(matches: MatchData[]): string {
        matches.forEach(match => {
            if (match[1] === this.teamName && match[5] === MatchResult.HOMEWIN ) this.teamWins++
            else if (match[2] === this.teamName && match[5] === MatchResult.AWAYWIN ) this.teamWins++
        })
        return `${this.teamName} won ${this.teamWins} games`
    }
}