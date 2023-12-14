const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      // event.preventDefault(); deprecated
                //Default of a Form is to reload the page after Submiting
      alert('Submited');
    },
    setName(event, lastName, sourName){
      this.name = event.target.value;
    },
    addGoal(num){
      this.counter = this.counter + num
    },
    reduceGoal(num){
      this.counter = this.counter - num
    },
    resetInput(){
      this.name = ''; 
    }
   }
});

app.mount('#events');
