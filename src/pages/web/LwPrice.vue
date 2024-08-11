<template>
   <section>
       
        <div class="container"> 
            <div class="container-border">
                <div class="price1">
                    <h2>Basic Plan</h2>
                    <p>Cena: 99 Kč/měsíc</p>
                    <button>Koupit basic</button>
                    <h3>Vlastnosti:</h3>
                    <ul>
                        <li>
                            Neomezený počet úkolů
                        </li>
                        <li>
                            Základní filtry a třídění úkolů
                        </li>
                        <li>
                            Připomínky
                        </li>
                        <li>
                            Základní podpora přes email
                        </li>                   
                    </ul>
                </div>
                <div class="price2">
                    <h2>Standard Plan</h2>
                    <p>Cena: 199 Kč/měsíc</p>
                    <button>Koupit standard</button>
                    <h3>Vlastnosti:</h3>
                    <ul>
                        <li>
                            Všechny funkce z Basic Plan
                        </li>
                        <li>
                            Prioritizace úkolů
                        </li>
                        <li>
                            Pokročilé filtry a třídění úkolů
                        </li>
                        <li>
                            Synchronizace mezi zařízeními
                        </li>
                        <li>
                            Týmová spolupráce (až 3 uživatelé)
                        </li>
                        <li>
                            Střední úroveň podpory přes email a chat
                        </li>
                    </ul>
                </div>
                    <div class="price2-highlight">
                        <h3>Nejpopulárnější</h3>
                    </div>
                <div class="price3">
                    <h2>Premium Plan</h2>
                    <p>Cena: 399 Kč/měsíc</p>
                    <button>Koupit premium</button>
                    <h3>Vlastnosti:</h3>
                    <ul>
                        <li>
                            Všechny funkce ze Standard Plan
                        </li>
                        <li>
                            Neomezená týmová spolupráce
                        </li>
                        <li>
                            Integrace s kalendářem a dalšími nástroji
                        </li>
                        <li>
                            Pokročilé analytické nástroje
                        </li>
                        <li>
                            Prioritní podpora přes email, chat a telefon
                        </li>
                        <li>
                            Personalizované připomínky a motivace
                        </li>
                        <li>
                            Zálohování a obnova dat
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

</template>


<script>
export default {
    name: 'LwPrice',
}
</script>

<style lang="stylus" scoped>


   

section 
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    min-height: 100vh
    background: url("@/assets/image/App_price.webp")
    
    background-size: cover
    background-repeat: no-repeat
    line-height: 1.5

section::before 
    content: ""
    position: absolute
    top: 20
    left: 0
    width:100%
    height: 100%
    background: rgba(255, 255, 255, 0.07)
    //background: rgba(0, 0, 0, 0.2)
    z-index: 0

.container 
    display: flex
    justify-content: center
    align-items: center
    gap: 5rem
    width: 1200px
    margin-top: 5rem 
    
 

.container-border
    display: flex
    justify-content: center
    align-items: center 
    width: 100%
    height: 600px
    gap: 5rem
  
    



.price1
    width: 100%
    height: 500px
    //background: rgba(253, 224, 176, 1)
    border-radius: 25px
    backdrop-filter: blur(12px)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 1)

.price2
    width: 100%
    height: 500px
    //background: rgba(249, 123, 77, 0.5)
    border-radius: 50px
    backdrop-filter: blur(20px)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 1)
    

.price2-highlight
    display: flex
    justify-content: center
    align-items: center
    background: #F97B4D
    color: #fff

    position: absolute
    top: 340px

    font-size: 0.5rem
    font-weight: 300
    width: 200px
    height: 50px
    padding: 10px 20px 10px 20px
    border-radius: 5px

.price3
    width: 100%
    height: 500px
    //background: rgba(251, 187, 75, 0.5)
    border-radius: 50px
    backdrop-filter: blur(50px)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    
    box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 1)

h2 
    font-size: 2rem
    font-weight: 700
    margin-bottom: 1rem
    color: #fff
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.728);

h3
    font-size: 1.5rem
    font-weight: 700
   
    color: #fff
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.728)

p
    font-size: 1.5rem
    font-weight: 800
   
   


ul li
    list-style: none
    display: flex
    justify-content: center

li
    font-size: 1rem
    color: #fff
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.728);

button
    margin: 2rem
    padding: 10px 20px
    font-size: 1.2rem
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




</style>