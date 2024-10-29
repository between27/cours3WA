import { MatchResult } from "./MatchResult"
import { CsvFileReader } from "./heritage/CsvFileReader"
import { DateUtils } from "./utils"

export interface Data {
    date: Date
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
    matchResult: MatchResult
    refName: string
}



const csvFileReader = new CsvFileReader("./src/football.csv")
csvFileReader.read()


let manUnitedWins = 0
let manUnited ="Man United"
csvFileReader.data.forEach(match => {
    if (match[1] === manUnited && match[5] === MatchResult.HOMEWIN ) manUnitedWins++
    else if (match[2] === manUnited && match[5] === MatchResult.AWAYWIN ) manUnitedWins++
})




console.log(`Man United won ${manUnitedWins} games`)
console.log(csvFileReader.data)
