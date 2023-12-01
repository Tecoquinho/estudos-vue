const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    setName(event){
      this.name = event.target.value
    },
    addGoal(num){
      this.counter = this.counter + num
    },
    reduceGoal(num){
      this.counter = this.counter - num
    }
   }
});

app.mount('#events');
