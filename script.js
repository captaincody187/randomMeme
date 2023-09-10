// id for display = 'memeZone'
// function name = 'memeM'

const memesAhoy = [
  'pics/south-park_gay-fish.png',
  'pics/shockedPikachu.jpg',
  'pics/CaptureFunnyOne.PNG',
];

memeM = () => {
  let x = memesAhoy[Math.floor(Math.random() * memesAhoy.length)];
  document.getElementById('memeZone');
  memeZone.innerHTML = '';

  // Create an img element and set its src attribute
  let img = document.createElement('img');
  img.src = x;
  img.width = 300;
  img.height = 200;

  // Append the img element to the memeZone div
  memeZone.appendChild(img);
};
