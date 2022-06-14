//NAME
function myFunction() {
  alert("El formulario fue enviado con éxito! :) ");
}

//Función del botón del nombre
function mostrarNombre() {
  let nombre=document.getElementById("nombre").value;
  document.getElementById("nombreConcursante").innerHTML = "Hola " + nombre + " ¡Bienvenid@ a la Trivia de Películas Disney!";
  document.getElementById("DivContenedor").style.display = "none" //Ocultar el DIV INICIAL
}

//mostrar en el html el nombre:
function AccionInnerHTMLn(event)
{
    var valorInput = event.target.value
  console.log(valorInput)
    document.getElementById("TextoResultante").innerHTML = "Hola  " + "holii";//Asignar valor
}

//---------
//FUNCIÓN FORM
function mostrarSeleccionado()
{
  if (document.getElementById('resp1').checked)
  {
  alert('¡Felicitaciones! Rapunzel es la respuesta correcta :)');
  }
  if (document.getElementById('resp2').checked)
  {
  alert('Seleccionaste Ariel, pero Rapunzel es la correcta    :´(');
  }
  if (document.getElementById('resp3').checked)
  {
  alert('Seleccionaste Mérida, pero Rapunzel es la respuesta correcta :P');
  }
}

//form2
function mostrarSeleccionado2()

{
  if (document.getElementById('resp4').checked)
  {
  alert('Seleccionaste Maléfica, pero la respuesta correcta era La Sirenita :(');
  }
  if (document.getElementById('resp5').checked)
  {
  alert('Seleccionaste El Rey León, pero la respuesta correcta era La Sirenita:(');
  }
  if (document.getElementById('resp6').checked)
  {
  alert('¡Felicidades! ¡Haz acertado! :D ');
  }
}

//form3
function mostrarSeleccionado3()

{
  if (document.getElementById('resp7').checked)
  {
  alert('¡Oh no! Seleccionaste Luca, pero Frozen era la respuesta correcta :)');
  }
  if (document.getElementById('resp8').checked)
  {
  alert('¡Felicitaciones! ¡Haz Acertado!');
  }
  if (document.getElementById('resp9').checked)
  {
  alert('Seleccionaste La Bella y La Bestia, pero Frozen es la respuesta correcta :P');
  }
}
