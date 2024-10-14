import moment from "moment";
moment().format();

/*------------ T E X T -------------*/
const FirstLetterUpperCase = (str) =>
	str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const UpperCase = (str) => str.toUpperCase();

const LowerCase = (str) => str.toLowerCase();

/*------------ H O U R S -------------*/
const LongHour = () => moment().format("lll");
//moment().format('lll');
const LastHours = () => moment().startOf("hour").fromNow();

const LastSeconds = () => moment().startOf("minute").fromNow();

export {
	FirstLetterUpperCase,
	UpperCase,
	LowerCase,
	LongHour,
	LastSeconds,
	LastHours,
};
