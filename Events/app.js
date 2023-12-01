const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
    addGoal(){
      this.counter++
    },
    reduceGoal(){
      this.counter--
    }
   }
});

app.mount('#events');
