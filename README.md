# Mini Calculadora de Edad - Grupo 4

## Descripción del Proyecto

Este proyecto es una aplicación web simple que permite a los usuarios calcular su edad a partir de su fecha de nacimiento. La aplicación guarda un historial de los cálculos realizados y los muestra en pantalla.

## Características

- Interfaz de usuario sencilla e intuitiva
- Cálculo preciso de la edad considerando meses y días
- Almacenamiento de historial de cálculos realizados
- Visualización del historial en la misma página

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Módulos JavaScript

## Estructura del Proyecto

- `index.html`: Estructura básica de la página web
- `style.css`: Estilos para la interfaz de usuario
- `script.js`: Lógica principal de la aplicación
- `api.js`: Simulación de API para almacenar y recuperar datos

## Funcionalidades Implementadas

### Cálculo de Edad
La aplicación calcula la edad exacta del usuario teniendo en cuenta el año, mes y día de nacimiento.

### Almacenamiento de Datos
Los cálculos realizados se almacenan en memoria (simulando una API) con la siguiente información:
- Fecha de nacimiento
- Edad calculada
- Fecha en que se realizó el cálculo

### Visualización de Historial
Se muestra un listado con todos los cálculos realizados durante la sesión actual.

## Cómo Usar

1. Abrir el archivo `index.html` en un navegador web
2. Seleccionar una fecha de nacimiento en el selector de fecha
3. Hacer clic en el botón "Calcular Edad"
4. Ver el resultado y el historial de cálculos realizados