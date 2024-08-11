<template>
    <header>
        <nav>
            <img src="@/assets/image/Logo_LifePlan.png" alt="logo LifePlan" />
            <ul>
                <li
                    v-for="link in links"
                    :key="link.label"
                    :class="{'active-link': $route.path === link.link}"
                >
                    <RouterLink :to="link.link">{{ link.label }}</RouterLink>
                </li>
                <button class="toggle" @click="toggleButton"></button>
            </ul>
            
            
        </nav>
    </header>
</template>


<script>

export default{
    name: 'LwNavBar',
    props: {
        links: Array
   },
   data() {
        return {
            isToggled: false
        }
   },
    methods: {
    toggleButton() {
        this.isToggled = !this.isToggled
        }
    }   
}
</script>

<style lang="stylus" scoped>

header
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    font-family: 'Roboto Condensed', sans-serif 
    font-size: 1.5rem
    font-weight: 700
    box-shadow: -1px 18px 16px -5px rgba(0, 0, 0, 0.25)
    
img 
    flex-grow: 1.5
    display: flex
    justify-content: flex-start
    width: 250px   
    height: 70px
    object-fit: contain
   
nav
    display: flex
    align-items: center
  
    width: 100%
    margin: 20px 0

ul 
    display: flex
    align-items: center
    gap: 5rem
    list-style: none
    flex-grow: 1

li:not(:last-of-type):hover 
    transform: translate(-5px)
    transition: transform 0.3s

a
  color: inherit  // Odkazy dědí barvu textu od svého rodiče
  text-decoration: none // Odstraní výchozí podtržení odkazů

a:hover
    color: #FBBB4B

nav ul li:last-of-type { // poslední potomek daného typu <li> 
    margin: 0 3px
    padding: 10px 40px
    background-color: #705df2; /* Barva pozadí */
    color: #fde0b0; /* Barva textu */
    border: none; /* Žádný okraj */
    border-radius: 5px; /* Zaoblené rohy */
    cursor: pointer; /* Ukazatel kurzoru jako ukazatel */
    font-size: 1.5rem; /* Velikost písma */
    transition: background-color 0.3s; /* Přechod pro změnu barvy pozadí */
    
    
}

nav ul li:last-of-type:hover
    padding: 10px 40px
    background-color: #705df2
    color: #FBBB4B
    filter: brightness(80%) // Stmaví barvu pozadí o 20%
    transform: rotate(10deg)
    transition: transform 0.3s

.active-link
    color: #FBBB4B
    font-weight: 700
    text-decoration: underline
    cursor: none
   



button {
all: unset;
  width: 80px;
  height: 24px;
  background: linear-gradient(to right, #6d27c4, #ca4af9);
  border-radius: 5rem;
  box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.429);
  cursor: pointer;
  position: relative;
  
}

button::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 17px;
  height: 17px;

  background: white;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.429);

  border-radius: 50%;
  transform: translateX(0);
  transition: 0.2s ease-in;
}
button.toggle::after {
  transform: translateX(56px);
}

    
</style>