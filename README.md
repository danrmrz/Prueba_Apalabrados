# Prueba técnica - minijuego: apalabrados

* Url del proyecto: https://danrmrz.github.io/Prueba_Apalabrados/public/index.html

## Descripción:
La aplicación recibe un input, determina el tipo de dato y de acuerdo a este realizará una de las siguientes acciones:

* Si es un número, lo guarda en la tabla numeros. En la columna número guardará el input y acumulará el valor con los valores anteriores de la misma tabla, este se almacenará en acumulado.
* Si es un texto, debe almacenar en la tabla texto. Guarda el input en la columna texto, el caracter inicial se guarda en la columna inicial y el caracter final se guarda en la columna final.
* Si el input tiene algún caracter especial como tilde, coma, punto y coma, punto, numeral o parecidos, debe extraerlo del input y enviar el caracter a la tabla caracteres, columna caracter. El resto del input se descarta.

## Uso:
Usar un servidor de archivos para abrir el archivo index.html desde un navegador web.

- Live Server en Visual Studio Code: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

## Diagrama de flujo:
<img src="https://github.com/danrmrz/Prueba_Apalabrados/blob/main/Diagrama%20de%20flujo.jpeg" />