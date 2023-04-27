import { Notify } from 'notiflix';
import { renderCountriesList, renderOneCountry } from './renderMarkup';

const fetchCountries = countryName =>
  fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  );

export function searchCountry(event) {
  let countryField = event.target.value.trim();

  if (countryField === '') {
    return;
  }

  fetchCountries(countryField)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(countries => {
      console.log(countries);
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }

      if (countries.length > 2 && countries.length <= 10) {
        renderCountriesList(countries);
      }

      if (countries.length === 1) {
        renderOneCountry(countries);
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');

      return;
    });
}
