const matrix = document.querySelector('.matrix');
const columns = Math.floor(window.innerWidth / 10);
const streams = [...Array(columns)].map(() => Math.floor(Math.random() * window.innerHeight));

function drawMatrix() {
  matrix.innerHTML = '';
  streams.forEach((stream, i) => {
    const codes = [...Array(Math.floor(Math.random() * 20) + 5)].map(() => Math.floor(Math.random() * 10));
    const streamElement = document.createElement('div');
    streamElement.classList.add('stream');
    streamElement.style.left = (i * 10) + 'px';
    streamElement.style.top = stream + 'px';
    codes.forEach((code, j) => {
      const charElement = document.createElement('span');
      charElement.textContent = code;
      charElement.style.animationDelay = (j * 0.1) + 's';
      streamElement.appendChild(charElement);
    });
    matrix.appendChild(streamElement);
  });
}

drawMatrix();
setInterval(drawMatrix, 150);