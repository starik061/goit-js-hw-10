import { fetchCountries } from './fetchCountries';

export function searchCountry(event) {
  let countryField = event.target.value;

  fetchCountries(countryField)
    .then(responce => responce.json())
    .then(console.log);
}
