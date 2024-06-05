import moment from "moment";
import "moment/min/locales";

export * from './sendFile'
export * from './sendApi'
export * from './validator'
export * from './validForms'

export const loader = async function (Variable: any) {
  return
}

export const timeStampToDate = function (
  d: number,
  separator: string,
  momentLib: boolean,
) {
  let dateObj = new Date(d);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let date = dateObj.getDate();

  if (momentLib) {
    moment.locale("ru");

    let time = moment(dateObj);
    let between = new Date().getTime() - dateObj.getTime() < 86400000;
    if (between) {
      return time.fromNow();
    }
    return time.format("DD MMMM YYYY");
  }

  let result = `${String(date).length == 1 ? `0${date}` : date}${separator}${String(month).length == 1 ? `0${month}` : month}${separator}${year}`;
  return result;
};


// export const dateToTimestamp = function (
//   d: number,
// ) {
//   let dateObj = new Date(d);
//   let month = dateObj.getMonth() + 1;
//   let year = dateObj.getFullYear();
//   let date = dateObj.getDate();

//   if (momentLib) {
//     moment.locale("ru");

//     let time = moment(dateObj);
//     let between = new Date().getTime() - dateObj.getTime() < 86400000;
//     if (between) {
//       return time.fromNow();
//     }
//     return time.format("DD MMMM YYYY");
//   }

//   let result = `${String(date).length == 1 ? `0${date}` : date}${separator}${String(month).length == 1 ? `0${month}` : month}${separator}${year}`;
//   return result;
// };