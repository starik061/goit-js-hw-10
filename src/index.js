import './css/styles.css';
import { searchCountry } from './js/inputCountryName';

let debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let countryField = document.querySelector('#search-box');

countryField.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));
