const app = new Vue ({
    el: '#root',
    data: {
        emailList : [],
    },
    methods: {
        //inserisce una email nella lista
        pushRandomEmail: function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                console.log(response.data.response);
                this.emailList.push(response.data.response);
            });
        }
    },
    created() {
        this.pushRandomEmail();
    }
})