export default class FetchCountriesApi{
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const url = `https://restcountries.com/v2/name/${this.searchQuery}`
    return fetch(url)
      .then(r => r.json())
  
  }
  get query() {
    this.searchQuery;
  }
  set query(value) {
    this.searchQuery = value;
  }
}
