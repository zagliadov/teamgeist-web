import moment from "moment";


export const useToGetWeeks = (month: string, year: number, week: number) => {

  let point = moment();
  const firstDayOfMonth = point.clone().month(month).year(year).week(week).startOf("month");
  const lastDayOfMonth = point.clone().month(month).year(year).week(week).endOf("month").format("DD.MM.YYYY");
  const firstWeekOfMonth =
    firstDayOfMonth.format("DD.MM.YYYY") +
    "-" +
    firstDayOfMonth.add(1, "weeks").format("DD.MM.YYYY");

  const secondWeekOfMonth =
    firstDayOfMonth.add(1, "days").format("DD.MM.YYYY") +
    "-" +
    firstDayOfMonth.add(1, "weeks").format("DD.MM.YYYY");

  const thirdWeekOfMonth =
    firstDayOfMonth.add(1, "days").format("DD.MM.YYYY") +
    "-" +
    firstDayOfMonth.add(1, "weeks").format("DD.MM.YYYY");

  const fourthWeekOfMonth =
    firstDayOfMonth.add(1, "days").format("DD.MM.YYYY") + "-" + lastDayOfMonth;

    let arrayOfWeeks: any = [
      {id: 0, firstWeekOfMonth: firstWeekOfMonth},
      {id: 1, secondWeekOfMonth: secondWeekOfMonth},
      {id: 2, thirdWeekOfMonth: thirdWeekOfMonth},
      {id: 3, fourthWeekOfMonth: fourthWeekOfMonth},
    ]
    
  
  return arrayOfWeeks;
};
