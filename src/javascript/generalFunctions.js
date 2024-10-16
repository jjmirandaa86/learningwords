import moment from "moment";
moment().format();

/*------------ T E X T -------------*/
const FirstLetterUpperCase = (str) =>
	str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const UpperCase = (str) => str.toUpperCase();

const LowerCase = (str) => str.toLowerCase();

/*------------ H O U R S -------------*/
const LongHour = () => moment().format("lll"); // Oct 16, 2024 10:56 PM
//moment().format('lll');
const LastHours = () => moment().startOf("hour").fromNow();

const LastSeconds = () => moment().startOf("minute").fromNow();

const Hour = () => moment().format("LT"); //10:55 PM

const Date = () => moment().format("L"); // 10/16/2024

export {
	FirstLetterUpperCase,
	UpperCase,
	LowerCase,
	LongHour,
	LastSeconds,
	LastHours,
	Hour,
	Date,
};
