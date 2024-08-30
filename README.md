# JSTRIS

JSTRIS es un proyecto de juego de bloques inspirado en Tetris, implementado en JavaScript utilizando la etiqueta `<canvas>` para renderizar el juego en la web. El juego presenta diferentes piezas de bloques con colores variados, controles de teclado para mover y rotar las piezas, y una lógica básica para la puntuación y el fin del juego.

## Características

- **Tablero de juego**: Un tablero de 10 columnas y 20 filas donde se desarrollan las acciones del juego.
- **Piezas de Bloques**: Varias piezas diferentes de bloques con formas y colores únicos, incluyendo una nueva pieza recientemente añadida que amplía la jugabilidad.
- **Controles del jugador**:
  - Flecha izquierda (⬅️): Mueve la pieza actual a la izquierda.
  - Flecha derecha (➡️): Mueve la pieza actual a la derecha.
  - Flecha abajo (⬇️): Mueve la pieza actual hacia abajo.
  - Barra espaciadora (␣): Rota la pieza actual.
- **Sistema de puntuación**: Incrementa la puntuación cada vez que se limpia una línea.
- **Fin del juego**: El juego se termina cuando una nueva pieza no puede colocarse en el tablero.
- **Estilo personalizado**: Uso de fuentes personalizadas y estilos CSS para el diseño del juego.

## Juega en línea

Puedes jugar JSTRIS directamente en tu navegador a través de **GitHub Pages**. [Haz clic aquí para jugar ahora](https://ikerlobop.github.io/JStris/).

## Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge, Safari).
- Conexión a internet para descargar las fuentes externas.

## Instalación

1. **Clona este repositorio**:

    ```bash
    git clone https://github.com/ikerlobop/JStris.git
    ```

2. **Navega al directorio del proyecto**:

    ```bash
    cd JStris
    ```

3. **Abre el archivo `index.html` en tu navegador web**:

    Simplemente abre el archivo `index.html` con tu navegador de preferencia para comenzar a jugar.

## Instrucciones de juego

1. Abre el juego en tu navegador.
2. Utiliza las teclas de flechas para mover la pieza y la barra espaciadora para rotarla.
3. Completa líneas para ganar puntos y avanzar de nivel.
4. El juego termina cuando una nueva pieza no cabe en el tablero.

## Mejoras por implementar

Actualmente, JSTRIS está completamente funcional, pero hay varias características y mejoras que podrían implementarse para mejorar la jugabilidad y la experiencia del usuario:

1. **Incremento de velocidad con el nivel**: Implementar la lógica para aumentar la velocidad del bucle del juego a medida que se incrementa el nivel. Esto se puede basar en el número de líneas completadas. Por ejemplo, después de cada 10 líneas completadas, el nivel aumenta y la velocidad de caída de las piezas se incrementa.

2. **Visualización de la próxima pieza**: Mostrar en la interfaz cuál será la próxima pieza que aparecerá, dando al jugador una mejor preparación para las siguientes acciones.

3. **Sonidos del juego**: Añadir efectos de sonido para rotación de piezas, colocación, y cuando se completan líneas para mejorar la experiencia de usuario.

4. **Sistema de niveles y dificultad**: Definir un sistema de niveles más detallado donde la dificultad no solo aumente por la velocidad de caída, sino también introduciendo piezas más complejas o aumentando el número de piezas posibles.

5. **Guardar la puntuación más alta**: Implementar una función para guardar y mostrar la puntuación más alta obtenida por el jugador en sesiones anteriores.

6. **Soporte táctil**: Mejorar la capacidad de respuesta del juego para dispositivos móviles y agregar controles táctiles para una mejor experiencia en pantallas táctiles.

7. **Modo multijugador**: Permitir que dos jugadores compitan en tiempo real, enviando líneas completadas al tablero del oponente.

8. **Animaciones y transiciones**: Mejorar las animaciones para piezas que caen y líneas que se eliminan para hacer el juego más visualmente atractivo.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir issues o enviar pull requests con mejoras y correcciones.

## Licencia

Este proyecto se encuentra bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
