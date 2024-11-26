import { OutputTarget } from "./OutputTarget";

export class ConsoleReport implements OutputTarget {
    print(report: string) {
        console.log(report)
    }
}