// import $ from 'jquery';
// import jQuery from 'jquery';

//  Header navbar Js Start
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.width = "100%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "0%";
    } else {
        document.getElementById("myTopnav").style.width = "80%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "2rem";
    }
};
//  Header navbar Js End
// tsParticles.load("tsparticles", {
//     fpsLimit: 60,
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           value_area: 800
//         }
//       },
//       color: {
//         value: "#ffffff"
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 0,
//           color: "#000000"
//         },
//         polygon: {
//           nb_sides: 5
//         },
//         image: {
//           src: "images/github.svg",
//           width: 100,
//           height: 100
//         }
//       },
//       opacity: {
//         value: 1,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false
//         }
//       },
//       size: {
//         value: 30,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 40,
//           size_min: 0.1,
//           sync: false
//         }
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 1,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200
//         }
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onHover: {
//           enable: true,
//           mode: "bubble",
//           parallax: {
//             enable: false,
//             force: 60,
//             smooth: 10
//           }
//         },
//         onClick: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           lineLinked: {
//             opacity: 1
//           }
//         },
//         bubble: {
//           distance: 400,
//           size: 100,
//           duration: 2,
//           opacity: 1,
//           speed: 3
//         },
//         repulse: {
//           distance: 200
//         },
//         push: {
//           particles_nb: 4
//         },
//         remove: {
//           particles_nb: 2
//         }
//       }
//     },
//     backgroundMask: {
//       enable: true,
//       cover: {
//         value: {
//           r: 255,
//           g: 255,
//           b: 255
//         }
//       }
//     },
//     retina_detect: true,
//     background: {
//       image: "url('https://particles.js.org/images/background.jpg')",
//       position: "cover"
//     }
//   });
  

  


