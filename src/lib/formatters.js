import numeral from 'numeral';
import moment from 'moment';

let toMoney = (num) => {
    return numeral(num).format('$0,0.00');
};

let toDateTime = (mom) => {
    return mom.format('MMM D, h:mma');
};

let toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export {
    toMoney,
    toDateTime,
    toTitleCase
};
