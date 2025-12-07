# Trabajo Final Integrador - Interfaces de Usuario (UNQ)

Este proyecto es una implementación del juego **Preguntados**, desarrollado en **React** como parte del Trabajo Final Integrador de la materia **Interfaces de Usuario** de la UNQ.

## Descripción

El objetivo de la aplicación es responder preguntas de trivia seleccionando previamente una dificultad. El juego consume una API externa proporcionada por la cátedra para obtener las preguntas y validar las respuestas.


## Funcionalidades

- **Selección de dificultad:** Puedes elegir entre varios niveles antes de comenzar la partida.
- **Preguntas de opción múltiple:** Cada pregunta presenta cuatro opciones de respuesta.
- **Sistema de puntuación:** Se lleva un registro de los aciertos durante la partida.
- **Feedback visual:** Indicadores de respuestas correctas e incorrectas.
- **Pantalla de resultados:** Al finalizar, muestra el puntaje final y la cantidad de aciertos.

## Tecnologías Utilizadas

- **React (Vite):** Librería/framework principal de la interfaz.
- **Fetch API:** Comunicación con la API remota.
- **CSS:** Estilos y diseño del juego.

## Instalacion y Ejecucion

### Prerrequisitos

- Tener instalado **Node.js** (versión 16 o superior).
- Tener instalado **Git**.

### Paso 1: Clonar el repositorio

Abre tu terminal y ejecuta:

```bash
git clone https://github.com/Mauricio-Velazquez/unq-ui-mauricio-velazquez-trabajo-final.git

cd unq-ui-mauricio-velazquez-trabajo-final
```
### Paso 2: Instalar dependencias

Instala las librerías necesarias ejecutando:

```bash
npm install
```

### Paso 3: Ejecutar el proyecto

Levanta el servidor de desarrollo con:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite). Ábrela en tu navegador para comenzar a jugar.

## Estructura del Proyecto

El código fuente se encuentra en la carpeta /src y esta organizado de la siguiente manera:

- **/assets:** Recursos estáticos (imágenes).

- **App.jsx:** Componente principal de la aplicación.

- **api.js:** Funciones para conectarse con la API externa.

## Autor

Mauricio Velazquez

Materia: Interfaces de Usuario - UNQ
