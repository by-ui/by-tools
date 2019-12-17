// const deepClone = import(/* webpackChunkName: "deep-clone" */ './.internal/tools/deepClone');
// const formatDate = import(/* webpackChunkName: "format-date" */ './.internal/tools/formatDate');
// const queryString = import(/* webpackChunkName: "query-string" */ './.internal/tools/queryString');

/************** packages **************/
import { mapleRequest } from './.internal/packages/mapleRequest';

/************** tools **************/
import deepClone from './.internal/tools/deepClone';
import formatDate from './.internal/tools/formatDate';
import queryString from './.internal/tools/queryString';
import toChineseAmount from './.internal/tools/toChineseAmount';
import toDiscontinuousMobile from './.internal/tools/toDiscontinuousMobile';

/************** tools 集合 **************/
import date from './.internal/tools/date';
import phone from './.internal/tools/phone';
import money from './.internal/tools/money';

export {
    mapleRequest,

    deepClone,
    formatDate,
    queryString,
    toChineseAmount,
    toDiscontinuousMobile,

    date,
    phone,
    money,
}