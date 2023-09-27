import { ref, reactive } from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter()
import router from '../router/router.js'
const authStore = reactive({
    isAuthenticated: localStorage.getItem('auth') == 1 ,
    user: JSON.parse(localStorage.getItem('user')) || null,
    authenticate(username, password) {
        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(res => {
                if (res.user) {
                    localStorage.setItem('auth', 1)
                    authStore.isAuthenticated = true
                    localStorage.setItem('user', JSON.stringify(res.user))
                    authStore.user = res.user
                    router.push('/')
                }
                // } else {
                //     localStorage.setItem('auth', 0)
                //     authStore.isAuthenticated = false
                //     localStorage.setItem('user', null)
                //     authStore.user = null
                //     // router.push('/login')
                // }
            })
    },
    logout() {
        localStorage.setItem('auth', false)
        authStore.isAuthenticated = false
        authStore.user = null
        localStorage.setItem('user', null)
        router.push('/login' )
    }
})

export { authStore }