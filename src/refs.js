export default function refs(){
  return {
    input: document.querySelector('.input'),
    sbmtBtn: document.querySelector('.sbmt'),
    form: document.querySelector('.form'),
    markup: document.querySelector('[data-name="markup"]'),
    searchRes: document.querySelector('.container-search-window-markup')
  }
}