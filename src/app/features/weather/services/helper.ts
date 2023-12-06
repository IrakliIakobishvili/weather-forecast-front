import * as moment from 'moment';

const getDay = (time: string) => {
    return moment(time).format('YYYY-MM-DD');
}
const getCurrentDay = () => {
    return moment().format('YYYY-MM-DD');
}
const findCurrentDay = (daily: any[]) => {
    const currentDay = daily.find((el: any) => {
      return getDay(el.time) == getCurrentDay();
    });
    console.log('(currentDay) ',currentDay);
    return currentDay;
}

export {
    getDay,
    getCurrentDay,
    findCurrentDay
}