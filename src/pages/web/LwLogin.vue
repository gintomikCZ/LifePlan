<template>
    <section>
        <form action="#">
            <h1>Login</h1>
            <div>
                <label for="name">Username:</label>
                     <div class="icon-container">
                        <div>
                            <input type="text" id="name" placeholder="Napiš celé jméno" required v-model="username">
                        </div>
                    </div>
                    
            </div>
           
            <!-- <div>
                <label for="email">Email:</label>
                    <div class="icon-container2">
                        <div>
                            <input type="email" id="email" placeholder="Zadej email" required>
                        </div>
                    </div>
            </div> -->
            <div>
                <label for="password">Heslo:</label>
                    <div class="icon-container3">
                        <div>
                            <input type="password" id="password" placeholder="Zadej silné heslo" required v-model="password">
                        </div>
                    </div>    
            </div>
            <button @click="login">Login</button>
        </form>
    </section>
</template>


<script>
export default {
    name: 'LwLogin',
    data() {
        return {
            password: '',
            username: ''
        }
    },
    methods: {
        login(e) {
            e.preventDefault()
            if (this.username === "Martin" && this.password === "cat") {
                window.localStorage.setItem('userLogged', 'true')
                this.$store.commit('setUserLogged', true)
                this.$router.push('/app')
            } else {
                this.$store.commit('setUserLogged', false)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>




section
    width: 100%
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background: linear-gradient(to bottom, #271551, #140b29 )



form{
    display: flex;
    flex-direction: column;
    width: 500px
    gap: 2rem;
    padding: 4rem 4rem;

    background: rgba(0, 0, 0, 0.607);
    backdrop-filter: blur(3px);
    border-radius: 1rem;
}

.icon-container
    position: relative
    display: flex
    align-items: center
    background: #fde0b0
    width: 40px
    height: 40px
    border: 1px solid white
    background-image: url('@/assets/image/icon_user.png')
    background-size: 40px 40px
    background-repeat: no-repeat
    background-position: center

.icon-container2
    position: relative
    display: flex
    align-items: center
    background: #fde0b0
    width: 40px
    height: 40px
    border: 1px solid white
    background-image: url('@/assets/image/icon_mail.png')
    background-size: 40px 40px
    background-repeat: no-repeat
    background-position: center

.icon-container3
    position: relative
    display: flex
    align-items: center
    background: #fde0b0
    width: 40px
    height: 40px
    border: 1px solid white
    background-image: url('@/assets/image/icon_key.png')
    background-size: 40px 40px
    background-repeat: no-repeat
    background-position: center

.icon-container input, .icon-container2 input, .icon-container3 input
    padding-left: 50px




form h1{
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 45px;
    font-weight: bold;
}

label{
    font-size: 1.3rem;
}

form div div{
   display: flex;
   //flex-direction: row-reverse;
    align-items: center;

    line-height: 30px;

    background: transparent;
    border: none;outline: none;
    border-bottom: 1px solid white;
}

form i{
    margin-right: 1rem;
    font-size: 20px;
}

input{
    all:unset;
    
    transition: .1s ease-in-out;
    font-size: 17px;
}

input, button{
    height: 50px;
    width: 300px;
    margin-top: .2rem;
}

button{
    background: #ff884d;
    color: white;
    font-weight: bold;
    font-size: 20px;
    width: 100%;

    border: none;
    outline: none;
    border-radius: 5rem;
    

    cursor: pointer;
    transition: .1s ease-in;
}

button:hover{
    transform: scale(1.05);
}


@media screen and (max-width: 550px) {
   input, button{
        width: 100%;
    }
}

</style>