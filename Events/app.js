const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    submitForm(event){
      event.preventDefault(); //Default of a Form is to reload the page after Submiting
      alert('Submited');
    },
    setName(event, lastName, sourName){
      this.name = event.target.value + ' ' + lastName + ' ' + sourName;
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
