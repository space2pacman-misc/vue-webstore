var webstore = new Vue({
	el: "#app",
	data: {
		sitename: "Vue.js Pet Depot",
		logo: "img/logo.png",
		product: {
			id: 1001,
			title: "Cat Food, 25lb bag",
			description: "A 25 pound bag of <em>irresistible</em> organic goodness for your  cat.",
			price: 2000,
			image: "img/product.jpg",
			availableInventory: 5
		},
		cart: [],
		showProduct: true,
		order: {
			firstName: "",
			lastName: "",
			address: "",
			city: "",
			zip: "",
			state: "",
			method: "Home Address",
			business: "Business Address",
			home: "Home Address",
			gift: "Send As A Gift",
			sendGift: "Send As A Gift",
			dontSendGift: "Do Not Send As A Gift"
		},
		states: [
			"Alabama",
			"Arizona",
			"California",
			"Nevada"
		]
	},
	filters: {
		formatPrice(price) {
			if(!parseInt(price)) return "";
			if(price > 99999) {
				var string = (price / 100).toFixed(2);
				var array = string.split("").reverse();
				var index = 3;
				
				while(array.length > index + 3) {
					array.splice(index + 3, 0, ",");
					index += 4;
				}

				return "$" + array.reverse().join("");
			} else {
				return "$" + (price / 100).toFixed(2);
			}
		}
	},
	methods: {
		addToCart() {
			this.cart.push(this.product.id);
		},

		showCheckout() {
			this.showProduct = this.showProduct ? false : true;
		},

		submitForm() {

		}
	},
	computed: {
		cartItemCount() {
			return this.cart.length || "";
		},

		canAddToCart() {
			return this.product.availableInventory > this.cartItemCount;
		}
	}
})