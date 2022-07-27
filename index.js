"use strict"

// A partir de esta api: https://opentdb.com/api_config.php
// Crea un sitio web que genere trivias según los siguientes parámetros:
// Siempre son 10 preguntas                                                       ok
// Se puede modificar la dificultad
// Se puede seleccionar el tipo de respuesta
// Y se puede escoger la categoría.
// Una vez seleccionado las parámetros se crea la trivia
// Se deben mostrar las preguntas                                                 ok          
// Se deben mostrar las posibles respuestas                                       ok  
// Se deben de contestar
// Cada pregunta correcta vale 100 puntos (Mostrar puntaje final)
// Botón de crear nueva trivia
// Cosas a tener en cuenta:
// Diseño libre (Bootstrap, materialize, o tu propio css)
// EcmaScript 6
// Repo en Github (Github pages es un plus)
// Extras: 
// SCSS&nbsp;
// BEM
// Webpack

const url = "https://opentdb.com/api.php?amount=10";
const url2="https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";

//Carga las preguntas 
const cargarTrivia = async () => {//siempre usar async ,recordar que es una respuesta asincrona
  try{

    const respuesta =await fetch(url);//await:quiero que hagas una peticion y cuando acabes pasas a la siguiente linea
    console.log(respuesta);

    const preguntas =await respuesta.json();//para poder acceder a la informacion json que nos devuelve la peticion
    console.log(preguntas.results);


    let preguntashtml=
    `
    <nav>
		<ul class="menu-horizontal">
			<li><a href="#">Inicio</a></li>

			<li>
				<a href="#">Categoria</a>
				<ul class="menu-vertical">
					<li id="AnyCategory">Any Category</li>
					<li id="General Knowledge">General Knowledge</li>
					<li id="Entertaiment: Books">Entertaiment: Books </li>
          <li id="Entertaiment: Film">Entertaiment: Film</li>
          <li id"Entertaiment: Music">Entertaiment: Music</li>
          <li id="Entertaiment: Musicals & Teatres ">Entertaiment: Musicals & Teatres </li>
          <li id="Entertaiment: Television">Entertaiment: Television</li>
          <li id="Entertaiment: Video Games">Entertaiment: Video Games</li>
          <li id="Entertaiment: Board Games">Entertaiment: Board Games</li>
          <li id="Science &Nature">Science &Nature</li>
          <li id="Science: Computers">Science: Computers</li>
          <li id="Science: Mathematics">Science: Mathematics</li>
          <li id="Mythology">Mythology</li>
          <li id="Sports">Sports</li>
          <li>Geography</li>
          <li>History</li>
          <li>Politics</li>
          <li>Art</li>
          <li>Celebrities</li>
          <li>Animals</li>
          <li>Vehicles</li>
          <li>Entertaiment: Comics</li>
          <li>Science: Gadgets</li>
          <li>Entertaiment: Japanese Anime & Manga</li>
          <li>Entertaiment: Cartoon & Animations</li>
				</ul>
			</li>

			<li>
				<a href="#">Dificultad</a>
				<ul class="menu-vertical">
          <li>Any Difficulty</li>
					<li>Easy</li>
					<li>Medium</li>
          <li>Hard</li>
				</ul>
			</li>

			<li><a href="#">Tipo</a>
      <ul class="menu-vertical">
					<li>Any Type</li>
					<li>Multiple Choice</li>
          <li>True/False</li>
				</ul>
      </li>

		</ul>
    
	</nav>
  `;

    preguntas.results.forEach(pregunta => { 
        console.log(pregunta.question);
        console.log(pregunta.incorrect_answers);

        preguntashtml=preguntashtml + `
        <div>
          <h1>${pregunta.question}</h1>
          <ul>
           ${setFalseAnswers(pregunta.incorrect_answers)}
           <li>${pregunta.correct_answer}</li>
          </ul>
        </div>
       `

    });

    document.getElementById('contenedor1').innerHTML = preguntashtml;

  }catch(error){//para evitar muerte prematura de la peticion
    console.log(error);
  }
    

}
////////////////////Funciones para delimitar que tantas posibles respuestas aparecen 
function setFalseAnswers(answers) {
  if (answers.length<2) {
    return(`  <li> ${answers[0]}</li>`);
  } else { 
    return(
    `  
    <li> ${answers[0]}</li>
    <li> ${answers[1]}</li>
    <li> ${answers[2]}</li>
    ` );
  }
} 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
////////////////////////////////////////////FUNCIONES PARA SELECCIONAR DIFICULTAD ,TIPO ETC.
let categorias = 0;
/* const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente'); */

btnCategoria.addEventListener('click', () => {
	const AnyCategory = document.getElementById('AnyCategory');
  // if (btnCategoria=AnyCategory){
  //   categorias=url;
  // }
  // if(){

  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  // if(){
    
  // }
  
	});

btnDificultad.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnTipo.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
}); 
cargarTrivia();

