<template>
    
    <section>
       <div class="container-b">
            <div class="banner">
                <h2>14denní testovací období zdarma</h2>
                <p>Chcete zlepšit svou produktivitu a zorganizovat svůj čas efektivněji? Vyzkoušejte naši TODO aplikaci zcela zdarma! Nabízíme vám 14denní testovací období, během kterého můžete využívat všechny prémiové funkce bez jakýchkoli omezení. Objevte, jak snadné a příjemné může být plánování vašich úkolů a projektů. Nečekejte a začněte svou cestu k lepší organizovanosti už dnes!</p>
                <button @click="onClickedRouter">Začít zdarma</button>
                <img src="@/assets/image/FBanner.svg" alt="Task list">
            </div>
           
        
            <p>Všechna práva vyhrazena &copy; 2024 Martin Hejl</p>
       </div>
      
    </section>

</template>

<script>
export default {
    name: 'LwFooter',
    methods: {
        onClickedRouter() {
            this.$router.push('/login')
            
        }
    }
}

</script>

<style lang="stylus" scoped>

section 
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    min-height: 50vh
    background-color: #140b29 
    color: #fff
    font-family: 'Roboto Condensed', sans-serif
    font-weight: 400 
    box-shadow: -1px 18px 16px -5px rgba(0, 0, 0, 0.25)

.container-b
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    
    margin: 5rem 0 1rem 0

.banner
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 3rem
    margin-bottom: 2rem
    width: 50%
    background-color: #4e0d35
    border-radius: 30px
    position: relative
    box-shadow: 30px 50px 26px -15px rgba(0, 0, 0, 0.9)

h2
    font-size: 2rem
    text-transform: uppercase

p
    font-size: 1rem
    text-align: center
    padding: 1rem
    width: 90%

button
    margin-top: 20px
    padding: 10px 20px
    border: none
    background-color: #fe6b4b
    color: white
    cursor: pointer
    border-radius: 5px

button:hover
    transform: translate(-10px)
    box-shadow: -1px 18px 16px -5px rgba(0, 0, 0, 0.25)
    transition: transform 0.3s
    filter: brightness(85%)


img 
    width: 300px
    height: 300px
    position: absolute
    z-index: 10
    top: 57px
    left: -12%
    transform: translateX(-50%)

</style>