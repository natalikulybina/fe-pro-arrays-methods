import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => goods.filter(good => good.brand === brand);;

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => goods.filter(good => good.color === color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => goods.filter(good => good.model === model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => goods.filter(good => good.memory === memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) =>  goods.filter(good => good.price === price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => goods.filter(good => good.country === country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => goods.filter(good => good.os === os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter(good => good.price >= from && good.price <= to);

const minPriceReducer = () => goods.reduce((accum, current) => Math.min(accum, current.price), Infinity);
console.log(minPriceReducer());

const maxPriceReducer = () => goods.reduce((accum, current) => Math.max(accum, current.price), -Infinity);
console.log(maxPriceReducer());

const toMaxSorter = () => goods.sort((a, b) =>  b.price - a.price);

const toMinSorter = () => goods.sort((a, b) =>  a.price - b.price);

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
