
const app = Vue.createApp({
//option api
    //data

    //function

//composition api

// count:
// funtion isncreasecount

data(){
    return {
        counter:0,
        message:'Hello From ITI',
        content:'                Vue js Round 2&3                    ',
        isloggedIn:false,
        intake:18,
        degree:30,
        products,
        firstname:'hadeer',
        lastname:'emad'

    }
},

methods:{
    save(){
        alert('saved')
    },
    parent(){
        alert('parent')
    },
    child(){
        alert('child')
    },
    showproduct(event){
        console.log(event.target.value)
    },
    // getmessage(){
    //     alert('hi from get message')
    // }
},

computed:{
    getmessage(){
        alert('hi from get message')
        return this.message
    },

    // getter & setter

    fullName:{
        get(){
            return this.firstname +' ' +this.lastname
        },
        set(newvalue){
            const names= newvalue.split(' ')
            this.firstname=names[0]
            this.lastname=names[1]

        }
    }
}


})


app.mount('#app')
