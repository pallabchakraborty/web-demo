  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider img');

  setInterval(() => {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
  }, 3000);


  // Initialize the map in the small container
  const map = L.map('map', {
    fullscreenControl: true}).setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
    .addTo(map);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(mapFull);

  // Get the expand button (box)
  const expandBox = document.getElementById('expandBox');

  // Add a click event to the box to trigger fullscreen
  expandBox.addEventListener('click', () => {
    map.toggleFullScreen();
  }); 


  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider img');

  setInterval(() => {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
  }, 3000);


  // Initialize the map in the small container
  const map = L.map('map', {
    fullscreenControl: true}).setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
    .addTo(map);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(mapFull);

  // Get the expand button (box)
  const expandBox = document.getElementById('expandBox');

  // Add a click event to the box to trigger fullscreen
  expandBox.addEventListener('click', () => {
    map.toggleFullScreen();
  }); 

