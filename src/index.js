import './sass/main.scss';
let debounce = require('lodash.debounce');


import FetchCountriesApi from './fetchCountries'
import refs from './refs'
import markupTemplate from './partials/countryCard.hbs'
import searchResultsMarkupTemplate from './partials/searchResults.hbs'

      import { alert, defaultModules, defaults } from '../node_modules/@pnotify/core/dist/PNotify.js';
      import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
      import '@pnotify/core/dist/BrightTheme.css';

      defaultModules.set(PNotifyMobile, {});
      defaults.delay = 1000;

const fetchCountriesApi = new FetchCountriesApi();
// const tpl = markupTemplate(arr);
refs().form.addEventListener('input', debounce(onEnter, 500));



function onEnter(e) {
  let searchResArr = [];
  if (e.target.value === '') {

    refs().markup.innerHTML = ''
    return;
  }
  fetchCountriesApi.query = e.target.value;
  fetchCountriesApi.fetchCountries().then(response => {
    if (response.length > 10) {
      clear();
      alert({
        text: 'Найдено слишком много вариантов'
      });
    }
     if (response.length > 2 && response.length < 10) {
      
      response.forEach(e =>
      
      searchResArr.push(e.name));
      refs().markup.innerHTML = (searchResultsMarkupTemplate({searchResArr}));
    return;
     }
    
    if (response.length <= 3) {
      response.forEach(({ name, flags, capital, population, languages }) => {
        let lang = [languages[0].name];
        let flagImg = flags.png;
        
      refs().markup.innerHTML = markupTemplate({name, flagImg, capital, population, lang})
      })
      return;
    }
    
    }).catch(error => alert({
        text: 'Такой страны нет'
      }))
  }
    
function clear() {
    refs().markup.innerHTML= ''
  }

// console.log(tpl);
