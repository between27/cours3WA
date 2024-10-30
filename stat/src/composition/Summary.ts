import { MatchData } from "../MatchData";
import { Analyzer } from "./analyzers/Analyzers.interface";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./output-target/ConsoleReport";
import { OutputTarget } from "./output-target/OutputTarget";

export class Summary{
    constructor(public analyzer: Analyzer,public outputTarget: OutputTarget){}

    static WinsAnalysisWithConsoleReport(team: string) {
        return new Summary(
            new WinsAnalysis(team),
            new ConsoleReport
        )
    }

    buildAndPrint(matches: MatchData[]){
        const report = this.analyzer.run(matches)
        this.outputTarget.print(report)
    }
}