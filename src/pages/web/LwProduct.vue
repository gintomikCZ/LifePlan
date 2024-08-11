<template>
    <section>
        <h1>LIFE PLAN</h1>
        <div class="bubble">
                <h2>AKCE</h2>
            </div>
        <div class="task-bord">
            
            <img src="@/assets/image/FTabule.svg" alt="Task list">
            
            <p>Projekty
                TODO aplikace
                    Jedním z klíčových projektů, který jsem vytvořil jako součást mého portfolia, je TODO aplikace. Tento projekt mi umožnil prakticky využít všechny nabyté znalosti a dovednosti a implementovat je do reálného světa.

                    Funkcionality aplikace:

                    Přidávání úkolů: Uživatelé mohou snadno přidávat nové úkoly do seznamu.
                    Editace a mazání úkolů: Úkoly lze upravovat a odstraňovat dle potřeby.
                    Označování úkolů jako hotových: Uživatelé mohou označit úkoly jako dokončené, což pomáhá sledovat pokrok.
                    Filtrování úkolů: Možnost filtrovat úkoly podle stavu (všechny, aktivní, dokončené).</p>
        </div>

        <img src="https://via.placeholder.com/20" alt="Analýza času ikona" style="vertical-align:middle;">
    </section>
</template>


<script>
export default {
    name: 'LwProduct',
}
</script>

<style lang="stylus" scoped>

section
    width: 100vw
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    

h1
    font-size: 4rem
    text-align: center
    padding: 2rem
    position: relative
    z-index: 10
    top: 120px


.task-bord
    background: linear-gradient(to top, #271551 30%, #705df2)
    border-radius: 20px
    box-shadow: 10px -200px 200px rgba(112, 93, 242, 0.2)
    width: 800px
    position: absolute
    

.bubble
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: 150px
    height: 150px
    border-radius: 50%
    background-color: #4e0d35
    z-index: 10
    top: -340px
    left: -370px
    

.bubble > h2
    font-size: 3rem
    transform: rotate(-45deg)
    color: #FBBB4B

p
    line-height: 2
    
</style>