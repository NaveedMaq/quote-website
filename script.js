// DOM ELEMENTS
const btnDarkMode = document.querySelector('.btn--dark-mode');

// STATE
const toggleMode = (function () {
  let currentMode = 'light';
  function switchToDarkMode() {
    document.documentElement.style.setProperty('--color', '#eee');
    document.documentElement.style.setProperty('--color-bg', '#111');
    document.documentElement.style.setProperty(
      '--color-shadow',
      'rgba(255, 255, 255, 0.1)'
    );
  }

  function switchToLightMode() {
    document.documentElement.style.setProperty('--color', '#111');
    document.documentElement.style.setProperty('--color-bg', '#eee');
    document.documentElement.style.setProperty(
      '--color-shadow',
      'rgba(0, 0, 0, 0.1)'
    );
  }

  function toggleMode() {
    currentMode = currentMode === 'light' ? 'dark' : 'light';

    if (currentMode === 'light') {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }

    return currentMode;
  }
  return toggleMode;
})();

btnDarkMode.addEventListener('click', function () {
  const updatedMode = toggleMode();
  const newIconName =
    updatedMode === 'light' ? 'sunny-outline' : 'moon-outline';
  this.querySelector('ion-icon').setAttribute('name', newIconName);
});
