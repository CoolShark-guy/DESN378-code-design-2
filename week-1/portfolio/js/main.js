const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light' || savedTheme === 'dark') {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}

const trigger = document.querySelector('.theme-trigger');
const dropdown = document.querySelector('.theme-dropdown');
const themeButtons = document.querySelectorAll('.theme-option');

themeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const value = button.dataset.themeValue;

    if (value === 'system') {
      localStorage.setItem('theme', 'system');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
    } else {
      localStorage.setItem('theme', value);
      document.documentElement.dataset.theme = value;
    }

    // Update active state on click
    themeButtons.forEach(function(btn) {
      if (btn.dataset.themeValue === localStorage.getItem('theme')) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    updateFrames(document.documentElement.dataset.theme);
    updateBackgrounds(document.documentElement.dataset.theme);
    updateIsland(document.documentElement.dataset.theme);

    // Close the menu after selecting
    dropdown.classList.remove('open');
  });
});

trigger.addEventListener('click', function() {
  dropdown.classList.toggle('open');

  if (dropdown.classList.contains('open')) {
    trigger.setAttribute('aria-expanded', 'true');
  } else {
    trigger.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('click', function(e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

const frames = document.querySelectorAll('.project-frame');

function updateFrames(theme) {
  frames.forEach(function(frame) {
    if (theme === 'dark') {
      frame.src = 'https://i.imgur.com/HkyEazi.png';
    } else {
      frame.src = 'https://i.imgur.com/WeYL4Ex.png';
    }
  });
}

const backgrounds = document.querySelectorAll('.projects-background-1, .projects-background-2');

function updateBackgrounds(theme) {
  backgrounds.forEach(function(background) {
    if (theme === 'dark') {
      background.src = 'https://i.imgur.com/NgDw2z6.png';
    } else {
      background.src = 'https://i.imgur.com/jjK9k9B.png'
    }
  })
}

const island = document.querySelector('.projects-title-img');

function updateIsland(theme) {
  if (theme === 'dark') {
    island.src = 'https://i.imgur.com/BaIuiZK.png';
  } else {
    island.src = 'https://i.imgur.com/3Eeu2OR.png';
  }
}

updateFrames(document.documentElement.dataset.theme);
updateBackgrounds(document.documentElement.dataset.theme);
updateIsland(document.documentElement.dataset.theme);