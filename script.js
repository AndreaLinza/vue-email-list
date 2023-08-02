
Vue.createApp({
    data() {

        return {

            emailRandom: []

        }
    },
    methods: {
        getDataFromApi() {

        },

    },

    mounted() {

        
        for (let i = 0; i < 10; i++) {

                axios
                    .get(
                        "https://flynn.boolean.careers/exercises/api/random/mail"
                    )
                    .then((axiosResp) => {
                        console.log(axiosResp)
                        console.log(axiosResp.data);

                        this.emailRandom.push(axiosResp.data.response)
                    })
                console.log(this.emailRandom)
            }
        
    }


}).mount("#app")










//https://flynn.boolean.careers/exercises/api/random/mail