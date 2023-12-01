const app = Vue.createApp({
    data(){ //Data is always a Function
        return{
            firstText: 'Matheus Lage de Souza Costa',
            messageA: 'Fluminense Campeão da Libertadores 2023',
            messageB: 'Fluminense Campeão Mundial vencendo o City',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods:{ //methods takes an object
        outputGoal() { //all propreties called at methods needs to be a function
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.messageA;
            }else{
                return this.messageB;
            }
        }
    }
}); 

app.mount('#user-goal'); //Connecting Vue to element wich id is user-goal