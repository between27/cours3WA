import { MatchData } from "../MatchData";
import { Analyzer } from "./analyzers/Analyzers.interface";
import { OutputTarget } from "./output-target/OutputTarget";

export class Summary{
    constructor(public analyzer: Analyzer,public outputTarget: OutputTarget){}

    buildAndPrint(matches: MatchData[]){
        this.outputTarget.print(this.analyzer.run(matches))
    }
}