import { OutputTarget } from "./OutputTarget";

export class HtmlReport implements OutputTarget {
    print(report: string) {
        let h = document.querySelector("#report")
        h!.textContent= report 
    }
}