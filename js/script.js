//
function agregarTarea() {
  //obtenemos el valor  del campo de la tarea
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value; //value, hace q se obtenga el texto del elemento

  //validamos que el valor no sea vacio
  if (nuevaTareaTexto === " ") {
    alert("Por Favor, Ingrese una tarea.");
    return;
  }
  //Crear el elemento en la lista
  let nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = nuevaTareaTexto + " ";

  //Crear elemento eliminar
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function () {
    nuevaTarea.remove();
  };

  //Agregar boton de elminar al elmento de la lista
  nuevaTarea.appendChild(botonEliminar); //trata como elemento padre a hijo

  //Agregar el elemento/tarea a la lista
  document.getElementById("listaTareas").appendChild(nuevaTarea);//nuevatarea es hija de listaTareas

  //Limpiar el cuadro de texto del nombre de la tarea
  document.getElementById("nuevaTarea").value=" ";

}
