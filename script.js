// séléction des éléments // 
let button = document.querySelector('#mode'); 
let span = document.querySelector('span'); 

if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre(); 
  }
}

// Rendre le boutton fonctionel // 

button.addEventListener('click', () => {
  if(document.body.classList.contains('dark')){
    // Mode claire // 
    document.body.className = ''; 
    span.textContent = 'Theme sombre'; 
    localStorage.setItem('theme','claire'); 
  }
  else {
    // On passe en mode sombre // 
    modeSombre(); 
  }
})

function modeSombre() {
  document.body.className = 'dark';
  span.textContent = 'theme claire'
  localStorage.setItem('theme', 'sombre'); 

}