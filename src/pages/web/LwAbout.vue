<template>
    <section>
        <div class="head">
            <h1>Martin Hejl<span>Frontend Developer Junior</span></h1>
            <p>Jmenuji se Martin Hejl a jsem juniorní frontendový vývojář se zaměřením na moderní webové technologie. Nedávno jsem úspěšně dokončil programátorský kurz na frontend developer u SDA Academy, kde jsem získal solidní základy a praktické zkušenosti potřebné pro tvorbu efektivních a uživatelsky přívětivých webových aplikací.</p>
        </div>
        <div class="head">
            <h2>Vzdělání a dovednosti</h2>
            <p>Během studia na SDA Academy jsem se věnoval následujícím technologiím a nástrojům:

            HTML5: Vytváření sémantických a přístupných webových stránek.
            CSS3: Stylování webových stránek s důrazem na responzivní design a moderní techniky jako Flexbox a Grid.
            Stylus: Použití CSS preprocesoru pro efektivnější a udržitelnější kódování stylů.
            JavaScript: Základy a pokročilé techniky pro dynamické webové aplikace.
            Vue.js: Vývoj interaktivních uživatelských rozhraní pomocí tohoto populárního JavaScriptového frameworku.
        </p>
        </div>
    </section>
</template>


<script>
export default {
    name: 'LwAbout',
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

h1
    font-size: 3rem
    text-align: center

span
    font-size: 2rem
    display: block

.head
    width: 80%
    max-width: 800px
    text-align: center
    padding: 2rem
    border-radius: 10px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    background-color: rgba(249, 249, 249, 0.5)
    color: #fde0b0
    font-size: 1.2rem
    line-height: 1.6
    margin: 2rem

</style>