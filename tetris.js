const filas = 20;
const columnas = 10;
const tamañoCuadro = 20;  
const canvas = document.getElementById('tetrisCanvas');
const contexto = canvas.getContext('2d');
const puntuacionDiv = document.getElementById('puntos');

let tablero = Array.from({ length: filas }, () => Array(columnas).fill(null));

const piezas = [
  {
    forma: [
      [1, 1],
      [1, 1],
    ],
    color: '#FF0000'
  },
  {
    forma: [
      [1, 1, 1, 1],
    ],
    color: '#00FF00'
  },
  {
    forma: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: '#0000FF'
  },
  {
    forma: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: '#FFFF00'
  },
  {
    forma: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    color: '#00FFFF'
  },
  {
    forma: [
      [1, 1, 1],
      [1, 0, 0],
    ],
    color: '#FF00FF'
  },
  {
    forma: [
      [1, 1, 1],
      [0, 0, 1],
    ],
    color: '#FFA500'
  },
  {
    forma: [
      [1, 1, 1],
      [1, 0, 1],
    ],
    color: '#500080'

      
  },
];

let piezaActual = piezas[Math.floor(Math.random() * piezas.length)];
let posicionPieza = { x: 3, y: 0 };

// Puntuación inicial
let puntuacionTotal = 0;

// Dibujar tablero en el canvas
function dibujarTablero() {
  contexto.clearRect(0, 0, canvas.width, canvas.height); 
  
  // Dibujar el tablero
  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {
      if (tablero[y][x]) {
        contexto.fillStyle = tablero[y][x];
        contexto.fillRect(x * tamañoCuadro, y * tamañoCuadro, tamañoCuadro, tamañoCuadro);
        contexto.strokeRect(x * tamañoCuadro, y * tamañoCuadro, tamañoCuadro, tamañoCuadro);
      }
    }
  }

  // Dibujar la pieza actual
  piezaActual.forma.forEach((fila, y) => {
    fila.forEach((valor, x) => {
      if (valor) {
        contexto.fillStyle = piezaActual.color;
        contexto.fillRect((posicionPieza.x + x) * tamañoCuadro, (posicionPieza.y + y) * tamañoCuadro, tamañoCuadro, tamañoCuadro);
        contexto.strokeRect((posicionPieza.x + x) * tamañoCuadro, (posicionPieza.y + y) * tamañoCuadro, tamañoCuadro, tamañoCuadro);
      }
    });
  });
}

// Mover pieza
function moverPieza(direccion) {
  if (direccion === 'izquierda' && !colision(-1, 0)) {
    posicionPieza.x -= 1;
  } else if (direccion === 'derecha' && !colision(1, 0)) {
    posicionPieza.x += 1;
  } else if (direccion === 'abajo' && !colision(0, 1)) {
    posicionPieza.y += 1;
  }
}

// Rotar pieza manteniendo colores y posición
function rotarPieza() {
  const piezaRotada = piezaActual.forma[0].map((_, indice) =>
    piezaActual.forma.map(fila => fila[indice]).reverse()
  );
  const formaAnterior = piezaActual.forma;
  piezaActual.forma = piezaRotada;
  if (colision(0, 0)) {
    piezaActual.forma = formaAnterior; // Revertir si hay colisión
  }
}


// Bucle principal
function bucle() {
  dibujarTablero();
  if (!colision(0, 1)) {
    posicionPieza.y += 1;
  } else {
    fijarPieza();
  }
  setTimeout(bucle, 500);
  
}
bucle();

// Fin del juego
function gameOver() {
  if (tablero[0].some(cuadro => cuadro !== null)) {
    alert('Game Over');
    tablero = Array.from({ length: filas }, () => Array(columnas).fill(null));
    puntuacionTotal = 0; 
    nivel = 0; 
    lineas = 0; 
    actualizarPuntuacion();
  }
}
//nivel
let nivel = 0;
let lineas = 0;
function actualizarPuntuacion() {
  puntuacionDiv.innerHTML = `Puntuación: ${puntuacionTotal} <br> Nivel: ${nivel} <br> Lineas: ${lineas}`;
}



// Rotar pieza al presionar barra espaciadora
document.addEventListener('keydown', evento => {
  if (evento.key === ' ') {
    rotarPieza();
    dibujarTablero();
  }
});

// Chequear colisión
function colision(dx, dy) {
  for (let y = 0; y < piezaActual.forma.length; y++) {
    for (let x = 0; x < piezaActual.forma[y].length; x++) {
      if (
        piezaActual.forma[y][x] &&
        (tablero[posicionPieza.y + y + dy] &&
          tablero[posicionPieza.y + y + dy][posicionPieza.x + x + dx]) !== null
      ) {
        return true;
      }
    }
  }
  return false;
}

// Fijar pieza en el tablero
function fijarPieza() {
  piezaActual.forma.forEach((fila, y) => {
    fila.forEach((valor, x) => {
      if (valor) {
        tablero[posicionPieza.y + y][posicionPieza.x + x] = piezaActual.color;
      }
    });
  });
  limpiarFilas();
  posicionPieza = { x: 3, y: 0 };
  piezaActual = piezas[Math.floor(Math.random() * piezas.length)];
  gameOver();
}

// Limpiar filas completas y actualizar puntuación
function limpiarFilas() {
  let filasCompletas = 0;
  tablero = tablero.filter(fila => {
    if (fila.includes(null)) {
      return true;
    } else {
      filasCompletas += 1;
      return false;
    }
  });
  
  while (tablero.length < filas) {
    tablero.unshift(Array(columnas).fill(null));
  }
  
  puntuacionTotal += filasCompletas * 10; // Aumentar puntuación
  actualizarPuntuacion(); // Actualizar visualización de puntuación
}

// Actualizar visualización de la puntuación
function actualizarPuntuacion() {
  puntuacionDiv.textContent = `puntos: ${puntuacionTotal}`;
}

// Manejar entrada del usuario
document.addEventListener('keydown', evento => {
  switch (evento.key) {
    case 'ArrowLeft':
      moverPieza('izquierda');
      break;
    case 'ArrowRight':
      moverPieza('derecha');
      break;
    case 'ArrowDown':
      if (!colision(0, 1)) {
        moverPieza('abajo');
      } else {
        fijarPieza();
      }
      break;
  }
  dibujarTablero();
});


dibujarTablero();
