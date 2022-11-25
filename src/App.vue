<template >
	<div class="particles">
		<div id="particles-js">
			<NavBar></NavBar>
			<RouterView></RouterView>
		</div>
	</div>
</template>
<script>
import 'particles.js'
import NavBar from './components/UI/NavBar.vue';
export default {
    mounted() {
        this.initParticles();
    },
    methods: {
        initParticles() {
            window.particlesJS("particles-js", {
			"particles": {
				"number": {
				"value": 70,
				"density": {
					"enable": true,
					"value_area": 800
				}
				},
				"color": {
				"value": "#0079C2"
				},
				"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#0079C2"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 90
				}
				},
				"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
				},
				"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
				},
				"line_linked": {
				"enable": true,
				"distance": 150,
				"color": `#0079C2`,
				"opacity": 0.4,
				"width": 1
				},
				"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
				},
				"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
					"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 1
				},
				"remove": {
					"particles_nb": 2
				}
				}
			},
			"retina_detect": true
			});
        }
    },
    components: { NavBar }
}
</script>
<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
@font-face {
	font-family: 'Montserrat';
	src: url('~@/assets/fonts/montserrat/Montserrat-Light.woff2') format('woff2') url('~@/assets/fonts/montserrat/Montserrat-Light.woff') format('woff');
	font-weight: 300;
	font-style: light;
}
@font-face {
	font-family: 'Montserrat';
	src: url('~@/assets/fonts/montserrat/Montserrat-Medium.woff2') format('woff2') url('~@/assets/fonts/montserrat/Montserrat-Medium.woff') format('woff');
	font-weight: 500;
	font-style: normal;
}
@font-face {
	font-family: 'Montserrat';
	src: url('~@/assets/fonts/montserrat/Montserrat-Bold.woff2') format('woff2') url('~@/assets/fonts/montserrat/Montserrat-Bold.woff') format('woff');
	font-weight: 700;
	font-style: bold;
}

.particles{
  font-size: 14px;
  line-height: 1.15;
  background-color: #F2F7FC;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}

#particles-js {
  background: $back;
  height: 100vh;
  width: 100%;
  cursor: auto;
}
body{
	overflow: auto;
}
</style>