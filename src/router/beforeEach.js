import store from '../store'

export default async (to, from , next) => {
    document.title = `MitMirror - ${to.name}`

    if (to.name === 'login'){
        if (store.getters['auth/hasToken']) {
            next({ name: 'profile' })
        } else {
            try {
                await store.dispatch('auth/ActionCheckToken')
                next({ name: 'profile' })
            } catch(error) {

                console.log(`Erro no beforeEach: ${error}`)
                if (error != 'Error: Request failed with status code 500') {
                    next()
                }
            }
        }
    } else if (to.name !== 'login') {
        if (store.getters['auth/hasToken']) {
            next()
        } else {
            try {
                await store.dispatch('auth/ActionCheckToken')
                next()
            } catch (error) {
                console.log(`Erro no beforeEach: ${error}`)
                if (error != 'Error: Request failed with status code 500') {
                    next({ name: 'login' })
                }
            }
        }
    }
}
