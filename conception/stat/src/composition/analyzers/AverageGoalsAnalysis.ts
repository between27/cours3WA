import { MatchData } from "../../MatchData";
import { Analyzer } from "./Analyzers.interface";

export class AverageGoalsAnalysis implements Analyzer {
    private matchesPlayed = 0
    private goals = 0
constructor(public teamName: string){}

run(matches: MatchData[]): string {
    
    matches.forEach((match)=>{
        if (match[1] === this.teamName || match[2] === this.teamName) this.matchesPlayed++

        if (match[1] === this.teamName) this.goals+= match[3]
        else if (match[2] === this.teamName) this.goals+= match[4]
    })
    return `${this.teamName} has a goals/game average of ${Math.round(this.goals/this.matchesPlayed)}`
}
}