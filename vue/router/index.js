import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

const welcome = Veu.component(
    'welcome',
    {
        template: `<h1>Hello! Welcome to my website!</h1>`
        
    }
)

const login = Veu.component(
    'login',
    {
        template: `
            <form>
                <label for="email"> Email: </label>
                <input id='email' type='email'>
                <label for="password"> Password: </label>
                <input id='password' type='password'>
                <input type='button' value='Sing in'>
            </form>
        `
        
    }
)

const signup = Veu.component(
    'signup',
    {
        template: `
            <form>
                <label for="email"> Email: </label>
                <input type='email'>
                <label for="password"> Password: </label>
                <input id='password' type='password'>
                <label for="confirmPassword"> Confirm Password: </label>
                <input id='ConfirmPassword' type='ConfirmPassword'>
                <input type='button' value='Sing up'>
            </form>
        `
        
    }
)

const menu = Vue.component('menu',
    {
        tamplate: `

        `
    }
)

const myRouter = new VueRouter({
    routes: [
        {path: '/', component: welcome},
        {path: '/welcome', component: welcome},
        {path: '/login', component: login},
        {path: '/signup', component: signup},
    ]
})

new Vue({
    el: '#app',
    template: `<h1>Hello!</h1>`,
    router: myRouter
})