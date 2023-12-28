const app = Vue.createApp({
    el: '#listaExample',
  data() {
    return {
        items: [
        { message: 'Vue' },
        { message: 'JavaScript' },
        { message: 'Texto 4' },
        { message: 'Texto 5' },
        { message: 'Lorem ipsum' }

    ]
      }
  }
});
app.mount('#events'); //Connecting Vue to element wich id is user-goal