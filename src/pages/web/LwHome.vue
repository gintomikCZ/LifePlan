<template>
    
    <section>
        <div class="container">
            <h1>Zorganizuj si svůj život <span>a buď efektivní</span></h1>
            <h2 class="hh2">Konečně TODO aplikace, kterou oceníš pokud chceš být produktivní</h2>
        </div>
        
        <div class="container-card">
            <div class="container">
                <div class="card-img">
                    <img src="@/assets/image/Hlavní stránka obrázek.jfif" alt="aplikace TODO">
                </div>
            </div>
            <div class="container">
            
                <div class="card-text">
                
                    <div class="card-h2">
                        <img class="icons1" src="@/assets/image/ikonka_rocket.png" alt="ikonka rakety">
                        <h2>Žijeme v hektické době, <span class="card-span">kde každá minuta hraje roli.</span></h2>
                    </div>
                        <p>Mít kontrolu nad svým časem je klíč k dosažení nejen profesních, ale i osobních cílů. Naše aplikace je navržena tak, aby vám každý den přinesla jasnou strukturu a efektivitu. Už žádné ztracené hodiny hledáním, co dělat dál. S naším nástrojem bude váš den nejen příjemnější, ale také produktivnější.</p>
                
                    <div class="card-icons">
                        <img class="icons2" src="@/assets/image/ikonka_home.webp" alt="ikonka todo">
                        <h2>Stihněte více práce i vlastních projektů</h2>
                    </div>
                        <p>Kdo říká, že musíte obětovat svůj osobní život pro úspěch v práci? Naše aplikace vám umožní najít rovnováhu. Díky inteligentnímu plánování a organizaci budete mít čas nejen na práci, ale i na své osobní projekty a koníčky. S námi zvládnete více bez pocitu přetížení.</p>
                        <button @click="onClickRouter">Chci být efektivní!</button>
                </div>
            </div>
        </div>     
    </section>
    

     
</template>



<script>

export default {
    name: 'LwHome',

    methods: {
        onClickRouter() {
            this.$router.push('/login')
        }
    }
/* :key="link.label" :class="{ 'active-link': $route.path === link.path}">
                    <RouterLink :to="link.link"> {{ link.label }}</RouterLink> 
                    
                    <div v-if="$route.path === link.path"> {{ link.label }}</div>
    <RouterLink v-else :to="link.link"> {{ link.label }}</RouterLink>*/

}
</script>

<style lang="stylus" scoped>

.container-size
    width: 1200px
    margin: 0 auto
    
    
section 
    width: 100%
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    //background: linear-gradient(to bottom, #271551, #140b29 )
      
h1
    font-size: 4rem
    text-align: center
    padding: 2rem

span 
    display: block

.hh2
    font-size: 2rem
    padding-bottom: 2rem

h2 
    font-size: 1.7rem
    text-align: left
    padding-bottom: 1rem

p
    font-size: 1rem
    text-align: justify
    padding-bottom: 1rem


img[alt="aplikace TODO"]
    width: 500px
    height: 500px
    border-radius: 20px
    border: 2px solid #705df2
    filter: drop-shadow(0 0 50px #705df2)

button
    background-color: #705df2
    color: #fde0b0
    border: none
    cursor: pointer
    margin: 1rem 0
    padding: 1rem 2rem
    border-radius: 20px
    font-size: 1.2rem
    font-weight: 500
    box-shadow: -1px 18px 16px -5px rgba(0, 0, 0, 0.25)

button:hover
    background-color: #705df2
    color: #FBBB4B
    filter: brightness(80%)
    transform: rotate(10deg)
    transition: transform 0.3s
    font-weight: 900
  

.icons1
    width: 50px
    height: 50px
    border-radius: 50%
    border: 2px solid #705df2
    float: left
    margin 1rem 2rem 0 0 

.icons2
    width: 50px
    height: 50px
    border-radius: 50%
    border: 2px solid #705df2
    float: left
    margin: 0 2rem 0 0  

.container-card
    display: flex
    justify-content: center
    align-items: center
    margin: 5rem 0

.card-icons
    margin-top: 2rem

.card-text
    width: 550px
    margin: 2rem

.card-img
    width: 500px
    margin: 2rem

.card-span
    display: block
    






























/*.container-wrapper
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    gap: 5rem
    width: 1200px
    margin-bottom: 5rem

section 
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin-top: 0rem
    margin-bottom: 2rem

h1
    font-size: 4rem
    font-weight: 700
    text-align: center
    margin-top: 5rem
    margin-bottom: 2rem

span 
    display: block
    white-space: pre-wrap

img 
    border-radius: 20px
    border: 2px solid #705df2
    filter: drop-shadow(0 0 50px #705df2); Zářivý efekt okolo obrázku 


button 
    padding: 1rem 2rem
    background-color: #705df2
    color: #223344
    font-weight: 700
    border: none
    border-radius: 5px
    cursor: pointer
    transition: background-color 0.3s
    

.content-wrapper
    display: flex
    justify-content: center
    align-items: center
    gap: 5rem
    width: 1200px
    margin-bottom: 5rem

.icons-wrapper
    display: flex
    align-items: center
    gap: 10px
    width: 550px

.card-img
    display: flex
    gap: 5rem
    margin-top: 5rem
    width: 500px   
    height: 500px
   

.card-text
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 2rem
    width: 550px

.icons
    float: left
    width: 50px
    height: 50px */

</style>