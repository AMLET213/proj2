let app = new Vue({
	el: "#app",
	data: {
		servicesCards: {
			card1: {
				img: "img/cards1/card1.png",
				name:"Парикмахерские услуги"
			},
			card2: {
				img: "img/cards1/card2.png",
				name:"Маникюр"
			},
			card3: {
				img: "img/cards1/card3.png",
				name:"Педикюр"
			},
			card4: {
				img: "img/cards1/card4.png",
				name:"Косметология"
			},
			card5: {
				img: "img/cards1/card5.png",
				name:"Эстетист по телу"
			},
			card6: {
				img: "img/cards1/card6.png",
				name:"Визаж"
			},

		},
		brands:{
			brand1:{
				img:"img/brands/logo-1.png"
			},
			brand2:{
				img:"img/brands/logo-2.png"
			},
			brand3:{
				img:"img/brands/logo-3.png"
			},
			brand4:{
				img:"img/brands/logo-4.png"
			},
		},
		examples:{
			example1:{
				img:"img/cards-works/work-1.png"
			},
			example2:{
				img:"img/cards-works/work-2.png"
			},
			example3:{
				img:"img/cards-works/work-3.png"
			},
			example4:{
				img:"img/cards-works/work-4.png"
			},
			example5:{
				img:"img/cards-works/work-5.png"
			},
			example6:{
				img:"img/cards-works/work-6.png"
			},
			example7:{
				img:"img/cards-works/work-7.png"
			},
			example8:{
				img:"img/cards-works/work-8.png"
			},
			example9:{
				img:"img/cards-works/work-9.png"
			},
		},
		allPrice: 0,
		num: 0,
		cardsBask: []
	},



	mounted() {
	},

	methods: {
		burg(){
			document.getElementById('burg').classList.toggle("open")
		}
	},

	computed: {
	}




})






gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '#app',
		content: '.container',
		smooth: 1.5,
		effects: true

	})

	// gsap.from('.conteiner h1',{opacity:0, duration:2, delay:1, y:30})
	// gsap.from('.mouse-down',{opacity:0, duration:2, delay:1, y:30})
	const tl = gsap.timeline({ default: { duration: 1 } })
	tl.from('.conteiner h1', { opacity: 0, duration: 2, delay: 1, y: 30 })
		.from('.mouse-down', { opacity: 0, duration: 2, delay: 1, y: 30 })

	gsap.fromTo("header", { backgroundColor: "" }, {
		backgroundColor: "#111",
		scrollTrigger: {
			trigger: ".conteiner",
			start: 'center',
			end: 'bottom',

			scrub: true
		}
	})



}





// 	gsap.fromTo(".tour-top", { x: -500, opacity: 0 }, {
// 		opacity: 1, x: 0,
// 		scrollTrigger: {
// 			trigger: ".tours-wrap",
// 			end: 'top',

// 			scrub: true
// 		}
// 	})
// 	gsap.fromTo(".tour-bottom", { x: 500, opacity: 0 }, {
// 		opacity: 1, x: 0,
// 		scrollTrigger: {
// 			trigger: ".tours-wrap",
// 			end: 'top',

// 			scrub: true
// 		}
// 	})