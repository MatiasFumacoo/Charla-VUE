export default {
    created() {
        console.log('Mixin created MF')
    },
    mounted() {
        console.log('Mixin mounted MF')
    },
    methods: {
        incrementar() {
            this.contador += 2
        }
    }
}