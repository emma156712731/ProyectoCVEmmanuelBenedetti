const openContador = document.querySelector('#contador');
const contador = document.querySelector('.contador');
const closeContador =document.querySelector('.contador_close');


openContador.addEventListener('click', (e)=> {
    e.preventDefault();
    contador.classList.add('contador--show');
    
});

closeContador.addEventListener('click', (e)=> {
    e.preventDefault();
    contador.classList.remove('contador--show');
    
});


const openEspecialista = document.querySelector('#especialista');
const especialista = document.querySelector('.especialista');
const closeEspecialista =document.querySelector('.especialista_close');


openEspecialista.addEventListener('click', (e)=> {
    e.preventDefault();
    especialista.classList.add('especialista--show');
    
});

closeEspecialista.addEventListener('click', (e)=> {
    e.preventDefault();
    especialista.classList.remove('especialista--show');
    
});

function curriculum() {
    console.log("Estoy accediendo a mi CV")
    alert("Accediendo a mi CV");
}    

function errordecargadeimagen() {
    alert('La imagen no se pudo cargar');
  }
  