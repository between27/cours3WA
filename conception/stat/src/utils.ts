export class DateUtils {
    static dateStringToDate(date: string) {
        const [day, month, year] = date.split("/").map(el => parseInt(el))
        return new Date(Date.UTC(year, month-1, day))
    }
}