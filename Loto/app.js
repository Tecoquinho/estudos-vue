const app = Vue.createApp({
    data(){
      return{
      numeros: [],
      }
    },
    methods:{
      gerarNumerosAleatorios() {
        this.numeros = [];
        for (let i = 0; i < 6; i++) {
          let numero = Math.floor(Math.random() * 99) + 1;
          while (this.numeros.includes(numero)) {
            numero = Math.floor(Math.random() * 99) + 1;
          }
          this.numeros.push(numero);
        }
      }
    }
});
app.mount('#loto'); //Connecting Vue to element wich id is user-goal