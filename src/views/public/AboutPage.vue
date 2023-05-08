<template>
  <section class="section-about-header">
    <div class="page-padding">
      <div class="container 1400">
        <div class="about-header-component">
          <h1 class="h1__about-header">L'institut international des rêves </h1>
          <p class="subtitle__about-header">L'exploration des frontières de l'imagination et de la conscience humaine. Notre institut repousse les limites de la réalité pour vous plonger dans un monde onirique où les rêves deviennent réalité.</p>
          <div class="w-img-about-header">
            <img src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/eyes.webp?alt=media&token=a2a82d1a-e812-4686-a408-184a2f675f10" alt="" class="img__about-header">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-about-numbers">
    <div class="page-padding">
      <div class="container-1400">
        <div class="layout-2b-about-numbers">
          <div class="b1-about-numbers">
            <p class="label-title-about-numbers">Institut et recherches</p>
            <h2 class="h2__about-numbers">L'IIR et son IA révolutionnaire</h2>
            <button class="btn-color" @click="this.$router.push('/mon-compte')">Découvrez notre IA </button>
          </div>
          <div class="b2-about-numbers">
            <p class="txt__b2-about-numbers">L'Institut International des Rêves est un centre de recherche qui se trouve à la frontière entre la science et l'imagination.Nous croyons fermement que chaque rêve est une fenêtre ouverte sur l'esprit et l'âme d'une personne. C’est ainsi que nous avons développé une IA capable de lire à travers les lignes de vos rêves.</p>
            <div class="w-items-b2-about-numbers">

              <div class="item-b2-about-numbers">
                <p class="big__b2-about-numbers"> 20A</p>
                <p class="little__b2-about-numbers">20 ans de recherche</p>
              </div>

              <div class="item-b2-about-numbers">
                <p class="big__b2-about-numbers"> 100</p>
                <p class="little__b2-about-numbers">100 chercheurs</p>
              </div>

              <div class="item-b2-about-numbers">
                <p class="big__b2-about-numbers"> 97%</p>
                <p class="little__b2-about-numbers">97% de précisions</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-about-value">
    <div class="page-padding">
      <div class="container-1400">
        <div class="about-value-component">
          <div class="w-title-about-value">
            <h2 class="h2__about-value">Nos valeurs, notre mission, et notre vision...</h2>
            <p class="subtitle__about-value"></p>
          </div>
          <div class="w-items-about-value">

            <div class="item-about-value">
              <div class="w-top-item-about-value">
                <p class="title__item-about-value">Valeurs</p>
              </div>
              <p class="txt__item-about-value">Chez l’IIR, nous incarnons des valeurs fondamentales telles que la précision , l’expertise et d’ouverture d’esprit qui guident notre travail et notre engagement</p>
            </div>

            <div class="item-about-value">
              <div class="w-top-item-about-value">
                <p class="title__item-about-value">Vision</p>
              </div>
              <p class="txt__item-about-value">Être la ressource incontournable pour tout individu curieux désireux de comprendre les messages cachés dans vos rêves ou simplement quelqu'un en quête de sagesse et d'inspiration </p>
            </div>

            <div class="item-about-value">
              <div class="w-top-item-about-value">
                <p class="title__item-about-value">Mission</p>
              </div>
              <p class="txt__item-about-value">Notre mission est de transcender les barrières de la compréhension en nous plongeant dans les méandres les plus profonds de l'inconscient. </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-about-cta">
    <div class="page-padding">
      <div class="container-1400">
        <div class="about-cta-component">
          <p class="subtitle__about-cta">Institut interntionale des rêves</p>
          <h2 class="h2__about-cta"> Découvrez votre avenir ! </h2>
          <p class="subtitle__about-cta">Préparez-vous à embarquer pour un voyage au-delà de l'imagination, où les frontières entre les rêves et la réalité s'estompent. L'Institut International des Rêves vous invite à plonger dans un océan de possibilités, à embrasser votre nature créative et à découvrir votre potentiel caché.</p>
          <button class="btn-color" @click="this.$router.push('/mon-compte')">Prédire mon rêve</button>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {

}
</script>

<style>
.section-about-header {
  padding:  11rem 0rem;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.h1__about-header {
  margin-bottom: 1.5rem;
}

.subtitle__about-header {
  margin-bottom: 4rem;
  font-size: 1.3rem;
}

.w-img-about-header {
  width: 100%;
  height: 40rem;
  border-radius: 1rem;
  overflow: hidden;
  opacity: 0.7;
}

.w-img-about-header > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* SECTION 2*/ 

.section-about-numbers {
  padding: 8rem 0rem;
}

.layout-2b-about-numbers {
  display: flex;
  gap: 4rem;
}

.b1-about-numbers {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.label-title-about-numbers {
  margin-bottom: 2rem;
}

.h2__about-numbers {
  margin-bottom: 3rem;
}

.b1-about-numbers > button {
  align-self: self-start;
}


.b2-about-numbers {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.txt__b2-about-numbers {
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.w-items-b2-about-numbers {
  display: flex;
  flex-wrap: wrap ;
  gap: 1rem;
}

.item-b2-about-numbers {
  flex: 1 0 140px; 
}

.big__b2-about-numbers {
  font-size: 4rem;
  opacity: 1;
  font-weight: 900;
  line-height: 1.3;
}


.little__b2-about-numbers {
  opacity: 0.3;
}

/* SECTION 3*/ 


.section-about-value {
  padding: 8rem 0rem;
}

.about-value-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.h2__about-value {
  margin-bottom: 1rem;
}

.subtitle__about-value {
  margin-bottom: 4rem;
  font-size: 1.1rem;
}

.w-items-about-value {
  display: flex;
  text-align: start;
  gap: 2rem;
  flex-wrap: wrap;
}

.item-about-value {
  flex: 1 0 270px;
  padding: 3rem;
  background: var(--black-color);
  border-radius: 0.5rem;
}

.w-top-item-about-value {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.title__item-about-value {
  opacity: 1;
}

.txt__item-about-value {
  margin-bottom: 2rem;
}

/* SECTION 4*/

.section-about-cta {
  padding: 6rem 0;
  padding-bottom: 8rem;
}

.about-cta-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  text-align: center;
  width: 100%;
  margin: auto;
}

.subtitle__about-cta {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.h2__about-cta {
  margin-bottom: 2rem;
}


@media only screen and (max-width: 990px) {
  .section-about-header {
    padding: 8rem 0;
    padding-top: 11rem;
  }
  .big__b2-about-numbers {
    font-size: 3rem;
  }
  .section-about-numbers {
    padding: 5rem 0;
  }
  
  .section-about-value {
    padding: 7rem 0;
  }

  .section-about-cta {
    padding-top: 4rem;
  }
}

@media only screen and (max-width: 700px) {
  .layout-2b-about-numbers {
    flex-direction: column;
  } 
  .b2-about-numbers, .b1-about-numbers {
    width: 100%;
  }
  .big__b2-about-numbers {
    font-size: 2.5rem;
  }
}

</style>
