let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo= 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}
function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value) ;
    console.log(intentos);

    //console.log(typeof(numeroDeusuario));
    //console.log(numeroDeusuario);
   //console.log(numeroDeusuario===numeroSecreto);
   
   if (numeroDeusuario === numeroSecreto){
    asignarTextoElemento('p',`acertaste el numero en ${intentos}${(intentos === 1) ? 'vez' : 'veces' }`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
// el usuario no acerto
     if (numeroDeusuario > numeroSecreto){
        asignarTextoElemento('p','El numero Secreto es menor');
     } else{
        asignarTextoElemento('p','El numero Secreto es mayor');
     }
     intentos++;
     limpiarCaja();
   }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = 
}   //valorCaja.value ='';

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','ya se asignaron todos los numeros posibles');
    }else {

     //si el numero generado esta incluido en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
             } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
             }
         }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //numeroSecreto = generarNumeroSecreto ();
    // inicializar el numero de intentos
   // intentos = 1;
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
