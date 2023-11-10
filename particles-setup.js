particlesJS('particles-js', {
    particles: {
      number: {
        value: 30, /* Number of particles */
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#212427' /* Particle color */
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5, /* Particle opacity */
        random: false
      },
      size: {
        value: 1, /* Particle size */
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150, /* Distance to draw a line between two particles */
        color: '#212427', /* Line color */
        opacity: 0.4, /* Line opacity */
        width: 1 /* Line width */
      },
      move: {
        speed: 0.75 /* Particle movement speed */
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'grab' /* Line follows the cursor on hover */
        }
      }
    },
    retina_detect: true
  });
  