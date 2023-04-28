export function renderCountriesList(coutriesArray) {
  let countryListElement = document.querySelector('.country-list');
  let coutriesListHTML = coutriesArray
    .map(
      ({ flags, name }) =>
        `<p><img src="${flags.svg}" width="20px" height="20px"><span> ${name.official}</span></p>`
    )
    .join('');

  countryListElement.innerHTML = coutriesListHTML;
}

export function renderOneCountry(coutriesArray) {
  let countryListElement = document.querySelector('.country-list');

  let coutriesListHTML = coutriesArray
    .map(
      ({ flags, name, capital, population, languages }) =>
        `<p><img src="${flags.svg}" width="40px" height="40px">
        <br>
        <span> ${name.official}</span>
        <br>
        <span>Capital: ${capital}</span>
        <br>
        <span>Population: ${population}</span>
        <br>
        <span>Language: ${Object.values(languages).join(' ')}</span></p>`
    )
    .join('');

  countryListElement.innerHTML = coutriesListHTML;
}
