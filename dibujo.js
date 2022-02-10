var texto = document.getElementById("texto_lineas");
var tono = document.getElementById("texto_color");
var figura = document.getElementById("texto_figura");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_final,y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoporClick()
{
    lienzo.clearRect(0,0,300,300);
    var lineas = parseInt(texto.value);
    var color = (tono.value)
    var l = 0;
    var y_i, x_f;
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
        y_i = espacio * l;
        x_f = espacio * (l + 1);
        dibujarlinea(color, 0, y_i, x_f, ancho);
        dibujarlinea(color, ancho, y_i, x_f, 0);
 
    }

    l=0
    for(l = 0; l < lineas; l++)
    {
        y_i = espacio * l;
        x_f = ancho - (l * espacio);
        dibujarlinea(color, ancho, y_i, x_f, ancho);
        dibujarlinea(color, 0, y_i, x_f, 0);
   
    }   
    
}
y_i = 10 * l;
x_f = 300 - (l * 10);



