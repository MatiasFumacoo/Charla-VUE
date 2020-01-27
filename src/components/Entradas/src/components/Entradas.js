export default {
  name: "Entradas",
  components: {},
  props: [],
  data() {
    return {
      mensaje: "Soy un mensaje",
      mensajeHTML: "<i>Soy un mensaje</i>",
      valor: 123,
      valor2: 456,
      valor3: 789,
      contador: 0,
      contador2: 0,
      contador3: 0
    };
  },
  computed: {},
  mounted() {},
  methods: {
    incrementar() {
      this.contador3++;
    },
    getContador() {
      return this.contador3;
    },
    actualizar(e) {
      var dato = e.target.value;
      this.valor2 = dato;
    }
  }
};
