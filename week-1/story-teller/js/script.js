// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');
const dots = document.querySelectorAll('.dot');

// Array with all captions
const captions = [
    "Click the image to begin...",
    "In the darkness of oppression, a barrier stands. Cold. Unmovable. But even in the deepest night, light finds a way through.",
    "The 1960s. Dr. King and thousands marched. They pushed. The barrier fought back, but it began to crack. The arc of the moral universe is long, but it bends toward justice.",
    "Pressure builds. The door warps under the weight of those demanding freedom. The barrier weakens, fractures spreading. Change is inevitable when people refuse to accept injustice.",
    "January 2026. Minneapolis. Across the nation, people gather, march, and organize. The barrier of injustice is challenged but not yet gone. The fight for freedom is never truly over, it must be defended.",
    "'Injustice anywhere is a threat to justice everywhere.' The work continues. The ice still melts. Barriers remain."
];

// Track current step
let currentStep = 0;

image.addEventListener('click', function() {
  currentStep++;
  
  if (currentStep <= 5) {
    image.src = `assets/images/Image-${currentStep}.png`;
    caption.textContent = captions[currentStep];
    updateDots();
  }
});

// Update which dot is active
function updateDots() {
  dots.forEach(function(dot, index) {
    if (index < currentStep) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
