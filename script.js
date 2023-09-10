// id for display = 'memeZone'
// function name = 'memeM'

const memesAhoy = [
  'pics/south-park_gay-fish.png',
  'pics/shockedPikachu.jpg',
  'pics/CaptureFunnyOne.PNG',
  'pics/one.jpg',
  'pics/two.jpg',
  'pics/three.jpg',
  'pics/four.jpg',
  'pics/five.jpg',
  'pics/six.jpg',
  'pics/seven.jpg',
  'pics/eight.jpg',
  'pics/nine.jpg',
  'pics/ten.jpg',
  'pics/eleven.jpg',
  'pics/twelve.jpg',
  'pics/thirteen.jpg',
  'pics/fourteen.jpg',
  'pics/fifteen.jpg',
  'pics/sixteen.jpg',
  'pics/seventeen.jpg',
  'pics/eighteen.jpg',
  'pics/nineteen.jpg',
  'pics/twenty.jpg',
];

memeM = () => {
  let x = memesAhoy[Math.floor(Math.random() * memesAhoy.length)];
  document.getElementById('memeZone');
  memeZone.innerHTML = '';

  // Create an img element and set its src attribute
  let img = document.createElement('img');
  img.src = x;
  img.width = 300;
  img.height = 300;

  // Append the img element to the memeZone div
  memeZone.appendChild(img);
};

// Clear the meme from the screen
noMas = () => {
  let memeZone = document.getElementById('memeZone');
  memeZone.innerHTML = '';
};
