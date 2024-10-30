import { MatchData } from "../../MatchData";
import { MatchResult } from "../../MatchResult";
import { Analyzer } from "./Analyzers.interface";

export class WinsAnalysis implements Analyzer {
    
    constructor(public teamName: string){}
    run(matches: MatchData[]): string {
        let teamWins = 0
        matches.forEach(match => {
            if (match[1] === this.teamName && match[5] === MatchResult.HOMEWIN ) teamWins++
            else if (match[2] === this.teamName && match[5] === MatchResult.AWAYWIN ) teamWins++
        })
        return `${this.teamName} won ${teamWins} games`
    }
}