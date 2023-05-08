<template>
      <section class="section-home-header">
        <div class="page-padding">
            <div class="container-1400">
                <div class="home-header-component">
                    <h1 class="h1__home-header">Le futur est dans vos rêves ! </h1>
                    <p>Explorez le monde fascinant de vos rêves : obtenez une interprétation personnalisée, des prédictions de l'avenir et un suivi des rêves dès maintenant !</p>
                    <button class="btn-color" @click="this.$router.push('/mon-compte')">Prédire mon rêve</button>
                </div>
            </div>
        </div>
    </section>

    <section class="section-intro">
        <div class="page-padding">
            <div class="container-1400">
                <div class="intro-component">
                    <p class="label-txt"> QUE FERIEZ-VOUS…</p>
                    <p class="big-txt__intro"> S’il était possible d'explorer les profondeurs de vos rêves et de percevoir les échos de votre avenir ?
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-about">
        <div class="page-padding">
            <div class="container-1">
                <div class="layout-2b-about">
                    <div class="b1-about">
                        <p class="label-txt">A PROPOS </p>
                        <h2> Qui sommes nous ?</h2>
                        <p>Grâce à des études de pointe et à des expérimentations innovantes, l'institut vise à découvrir les secrets du cerveau humain et retranscrire vos rêves à la réalité. Notre mission est de transcender les barrières des rêves et de réaliser une prédictions sur base des récits de chaque individu. Que vous soyez un chercheur spécialisé ou simplement un curieux de la nature, nous possédons les clés pour dévoiler les mystères de votre avenir !</p>
                        <button class="btn-color" @click="this.$router.push('/a-propos')">En savoir plus</button>
                    </div>
                    <div class="b2-about">
                        <div class="w-img-b2-about">
                            <img class="img__b2-about" src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/img%20inst.webp?alt=media&token=c192fab5-65d0-4506-abb6-645aab405a31" width="100%" height="100%">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-orinix">
        <div class="page-padding">
            <div class="container-1400">
                <div class="layout-2b-orinix">
                    <div class="b1-orinix">
                        <div class="w-img-b1-orinix">
                            <img class="img__b1-orinix" src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/bg-ia.webp?alt=media&token=44e8490b-a444-49be-860c-0a48ce573e5e" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="b2-orinix">
                        <p class="label-txt">ONIRIX</p>
                        <h2> L'IA de vos rêves</h2>
                        <p> IA spécialisée dans l'analyse de rêves, équipée de technologie de pointe pour reconnaître chaque élément du rêve et créer des analyses détaillées. Elle peut faire des prédictions sur votre futur en se basant sur les thèmes récurrents et les motifs de vos comportements.Onirix est là pour aider à mieux comprendre le subconscient et prendre des décisions plus éclairées."</p>
                        <button class="btn-color" @click="this.$router.push('/onirix')">En savoir plus</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-about-cta">
    <div class="page-padding">
      <div class="container-1400">
        <div class="about-cta-component">
          <p class="subtitle__about-cta">Institut internationale des rêves</p>
          <h2 class="h2__about-cta">Découvrez votre avenir !</h2>
          <p class="subtitle__about-cta">Préparez-vous à embarquer pour un voyage au-delà de l'imagination, où les frontières entre les rêves et la réalité s'estompent. L'Institut International des Rêves vous invite à plonger dans un océan de possibilités, à embrasser votre nature créative et à découvrir votre potentiel caché.</p>
          <button class="btn-color">Prédire mon rêve</button>
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
.section-home-header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/bg%20home.webp?alt=media&token=d7c57211-f9f5-43a6-82be-3c7503839c7d');
  background-size: cover ;
  background-position: cover;
  background-repeat: no-repeat;
  padding-top: 6rem;

}

.home-header-component {
  max-width: 700px;
}

.home-header-component> p {
  margin-bottom: 2rem;
  font-size: 1.3rem;
}

.h1__home-header {
  margin-bottom: 2rem;
}

/* SECTION INTRO */

.section-intro {
    padding: 8rem 0;
    border-bottom: solid 1px var(--grey-color);
    border-top: solid 2px var(--grey-color);
    background: var(--grey-color);
}

.intro-component {
    text-align: center;
}

.big-txt__intro {
    width: 70%;
    font-size: 2rem;
    margin: auto;
    opacity: 1;
}

/* SECTION ABOUT */

.section-about {
    padding: 7rem 0rem;
}

.layout-2b-about {
    display: flex;
    gap: 4rem;
}

.b1-about {
    width: 40%;
    padding-top: 1rem;
}

.b1-about > h2 {
  margin-bottom: 2rem;
}

.b1-about>p {
    margin-bottom: 2rem;
}

.b2-about {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.w-img-b2-about {
    height: 400px;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    opacity: 0.7;
}

.img__b2-about {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* SECTION orinix */

.section-orinix {
    padding: 7rem 0;
}

.layout-2b-orinix {
    display: flex;
    gap: 4rem;
}

.b1-orinix {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.b2-orinix > h2 {
  margin-bottom: 2rem;
}

.w-img-b1-orinix {
    height: 400px;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    opacity: 0.7;
}

.img__b1-orinix {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.b2-orinix {
    width: 40%;
    padding-top: 1rem;
}


.b2-orinix>p {
    margin-bottom: 2rem;
}

/* global */
.label-txt {
  font-size: 1.1rem;
}

@media only screen and (max-width: 990px) {
  .layout-2b-about {
    flex-direction: column;
  }
  .b1-about {
    width: 100%;
  }
  .b2-about {
    width: 100%;
  }

  .layout-2b-orinix {
    flex-direction: column-reverse;
  }

  .b1-orinix {
    width: 100%;
  }

  .b2-orinix {
    width: 100%;
  }

  .section-orinix {
    padding: 5rem 0;
  }
  .big-txt__intro {
    font-size: 1.7rem;
    width: 100%;
  }
}



</style>