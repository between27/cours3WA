import { MatchResult } from "./MatchResult"
import { CsvFileReader } from "./composition/CsvFileReader"
import { MatchReader } from "./composition/MatchReader"
import { Summary } from "./composition/Summary"
import { AverageGoalsAnalysis } from "./composition/analyzers/AverageGoalsAnalysis"
import { WinsAnalysis } from "./composition/analyzers/WinsAnalysis"
import { ConsoleReport } from "./composition/output-target/ConsoleReport"
import { HtmlReport } from "./composition/output-target/HtmlReport"

const csv = "./src/football.csv"
const team = "Chelsea"
const csvFileReader = new CsvFileReader(csv)
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const average = new AverageGoalsAnalysis(team)
const winsAnalysis = new WinsAnalysis(team)
const consoleReport = new ConsoleReport
const htmlReport = new HtmlReport
const summaryAverage = new Summary(average, consoleReport)
const summaryWins = new Summary(winsAnalysis, consoleReport)
const summaryAverageHtml = new Summary(average, htmlReport)
let matches = matchReader.matches

summaryAverage.buildAndPrint(matches)
summaryWins.buildAndPrint(matches)
//summaryAverageHtml.buildAndPrint(matches)




