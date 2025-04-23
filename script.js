// Toggle Background Color
const toggleBgBtn = document.getElementById('toggle-bg-btn');
toggleBgBtn.addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === '#1E3A55' ? 'white' : '#1E3A55';
});

// Adjust Text Size with Slider
const textSlider = document.getElementById('text-slider');
const sliderText = document.getElementById('slider-text');
textSlider.addEventListener('input', () => {
  sliderText.style.fontSize = `${textSlider.value}px`;
});

// Modal Functionality
const openModalBtn = document.getElementById('open-tab-btn');
const closeModalBtn = document.getElementById('close-tab-btn');
const modal = document.getElementById('tab');
const modalOverlay = document.getElementById('tab-overlay');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
});

// Hover Effects
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'lightgreen';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
  });
});

// Keypress Detection
document.addEventListener('keydown', (event) => {
  const keyPressed = document.getElementById('key-pressed');
  if (!keyPressed) {
    const keyDisplay = document.createElement('p');
    keyDisplay.id = 'key-pressed';
    keyDisplay.style.marginTop = '20px';
    keyDisplay.textContent = `Key pressed: ${event.key}`;
    document.body.appendChild(keyDisplay);
  } else {
    keyPressed.textContent = `Key pressed: ${event.key}`;
  }
});

// Double-Click Action
document.addEventListener('dblclick', () => {
  alert('Double-click detected! 🎉');
});

// Long Press Action
let pressTimer;
document.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Long press detected! 🤫');
  }, 1000); // 1-second long press
});

document.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// Form Validation
const form = document.getElementById('user-form');
const errorMessages = document.getElementById('error-messages');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let errors = [];

  if (name.length < 3) {
    errors.push('Name must be at least 3 characters long.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('Please enter a valid email address.');
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    errors.push(
      'Password must be at least 8 characters long, with one uppercase letter and one number.'
    );
  }

  if (errors.length > 0) {
    errorMessages.innerHTML = errors.join('<br>');
  } else {
    errorMessages.innerHTML = 'Form submitted successfully!';
    form.reset(); // Reset the form
  }
});