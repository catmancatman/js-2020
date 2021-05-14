Vue.component('product-list', {
    props: ['products'],
    template: `<ul>
                    <li v-for="product in products">
                        <img :src="product.image">
                        <h1>{{ product.name }}</h1>
                        <p>{{ product.description }}</p>
                        <p>{{ product.price }}$</p>
                        <button @click="$emit('add-to-cart-event', product)">Add To Cart</button>
                    </li>
                </ul>`
})

const Cart = {
   template: '<div>Aici va fi artul</div>'
}


const PageNotFound = {
  template: '<div>Pagina nu a fost gasita</div>'
}


const ecom_router = new VueRouter({
  routers: [
    { path: '*', component: Home },
    { path: '/cart', component: Cart }
  ]
})

new Vue({
    el: '#products',
    data: {
        productsArray: [
          {
            "id": "530",
            "name": "TAKE THE RISK – T-SHIRT",
            "description": "What if you took the risk as calculated as someone trying to get away with a crime?",
            "price": "120",
            "image_title": "mockup-53bec5bc.jpg",
            "image": "https://entreprewear.co/wp-content/uploads/2020/08/mockup-53bec5bc.jpg"
          },
          {
            "id": "532",
            "name": "PERFECTION KILLS DREAMS – T-SHIRT",
            "description": "What if you pursued perfection like you pursued the sun’s rays: every day but getting too close will get you in trouble?",
            "price": "125",
            "image_title": "mockup-75d95c01.jpg",
            "image": "https://entreprewear.co/wp-content/uploads/2020/08/mockup-75d95c01.jpg"
          },
          {
            "id": "516",
            "name": "OPEN YOUR MIND – MUG",
            "description": "What if you opened your mind for new opportunities as a 3-year-old is open for learning?",
            "price": "95",
            "image_title": "mockup-570317f2.jpg",
            "image": "https://entreprewear.co/wp-content/uploads/2020/09/mockup-570317f2.jpg"
          },
          {
            "id": "514",
            "name": "ARE YOU PRODUCTIVE OR JUST BUSY – MUG",
            "description": "What if you just focused your entire energy the way a laser focuses its energy to cut through steel?",
            "price": "68",
            "image_title": "mockup-2f5bd762.jpg",
            "image": "https://entreprewear.co/wp-content/uploads/2020/09/mockup-2f5bd762.jpg"
          },
          {
            "id": "520",
            "name": "THINK OUT OF THE BOX – SWEATSHIRT",
            "description": "What if you though out of the box, as open and enthusiastic as a child unwrapping presents on Christmas day?",
            "price": "65",
            "image_title": "mockup-a60bdc59.jpg",
            "image": "https://entreprewear.co/wp-content/uploads/2020/08/mockup-a60bdc59.jpg"
          },
          {
            "id": "518",
            "name": "BELIEVE MEANS ACHIEVE – CUFFED BEANIE",
            "description": "What if you believed in yourself the way Zlatan Ibrahimovic believes in his powers?",
            "price": "65",
            "image_title": "mockup-3f7b54aa.jpg",
            "image": "https://entreprewear.co/wp-content/uploads/2020/09/mockup-3f7b54aa.jpg"
          },
          {
            "id": "500",
            "name": "KEEP WORKING HARD – SWEATSHIRT",
            "description": "What if you worked so hard for your dreams and goals like the Egyptians used to work for their pyramids?",
            "price": "60",
            "image_title": "mockup-b2db22cd.jpg",
            "image": "https://entreprewear.co/wp-content/uploads/2020/08/mockup-b2db22cd.jpg"
          }
        ],
        value: 0,
        cartValue: [],
        totalPrice: 0,
        productsSearch: ""
    },
    methods: {
        addToCart(product) {
          
            return this.cartValue.push(product)
        },
      
    },
    computed: {
        filter() {
            return this.productsArray.filter(item => Number(item.price) < this.value)
        },
        filterProductsByName() {
          // daca productSearch are lung > 3
          console.log(this.productsSearch);
          if (this.productsSearch.length > 3) {
            return this.productsArray.filter(product => product.name.includes(this.productsSearch) )
          } else {
            return this.productsArray.filter(item => Number(item.price) < this.value);
          }
          
        },
        productsCount() {
            return this.filter.length ? this.filter.length + ' products' : 'No products'
        },
        totalPriceCart() {
            return this.cartValue.reduce((inc, item) => inc + Number(item.price) , 0)
        }
    }
})