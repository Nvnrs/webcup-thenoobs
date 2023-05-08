<template>
  <section class="section-onirix-header">
    <div class="page-padding">
      <div class="container-1400">
        <div class="onirix-header-component">
          <h1 class="h1__onirix-header">Onirix, votre partenaire IA, experte en décryptage de rêves.</h1>
          <p class="subtitle__onirix-header">Une intelligence artificielle spécialisée dans l'analyse de rêves. L’objectif, vous aider à mieux comprendre votre subconscient et à utiliser cette compréhension pour prédire votre avenir.</p>
          <div class="w-btn-onirix-header">
            <button class="btn-color">Découvrir mon avenir</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-onirix-analyse">
    <div class="page-padding">
      <div class="container-1400">
        <div class="l-2b-onirix-analyse">
          <div class="b1-onirix-analyse">
            <h2 class="h2__b1-onirix-analyse">Explorez les profondeurs de vos rêves</h2>
            <p class="subtitle__b1-onirix-analyse subtilte-h2">Nous utilisons une technologie de pointe pour analyser chaque élément de votre rêve, explorer ses significations cachées et quels sont ses enjeux pour l’avenir.</p>
            <button class="btn-color">Prédire mon avenir</button>
          </div>
          <div class="b2-onirix-analyse">
            <div class="w-img-b2-onirix-analyse">
              <img class="img__b2-onirix-analyse" src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/women-onirix.webp?alt=media&token=174b0417-05fd-47b4-bc9b-4eee32b7272c" alt="" width="100%" height="100%">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-onirix-understand">
    <div class="page-padding">
      <div class="container-1400">
        <div class="l-2b-onirix-understand">
          <div class="b1-onirix-understand">
            <h2 class="h2__b1-onirix-understand">Découvrez la clé de votre propre compréhension</h2>
            <p class="subtitle__b1-onirix-understand subtitle-h2">Nous croyons que la compréhension de nos rêves peut nous aider à mieux nous comprendre nous-mêmes et à prendre des décisions plus éclairées. Nous valorisons toutes les perspectives et croyances, créant ainsi un espace accueillant où chacun peut explorer les multiples significations de ses rêves. </p>
            <button class="btn-color">Prédire mon avenir</button>
          </div>
          <div class="b2-onirix-understand">
            <div class="w-img-b2-onirix-understand">
              <img class="img__b2-onirix-understand" src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/cerveau-onirix.webp?alt=media&token=a6425a9b-4b7f-48f0-ae01-9ec592887331" alt="" width="100%" height="100%">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-onirix-features">
    <div class="page-padding">
      <div class="container-1400">
        <div class="onirix-features-component">
          <div class="w-title-onirix-features">
            <h2 class="h2__onirix-features">Un concentré de technologie pour décrypter vos rêves et prédire votre avenir</h2>
          </div>
          <div class="w-items-onirix-features">

            <div class="item-onirix-features">
              <div class="w-top-item-onirix-features">
                <p class="title__item-onirix-features">Analyse approfondie </p>
              </div>
              <p class="txt__item-onirix-features">L'IA utilise une technologie de pointe pour analyser chaque élément du rêve, y compris les images, les sons et les émotions, afin de fournir une interprétation approfondie.</p>
              <router-link class="link-color" to="/connexion">Tester Onirix</router-link>
            </div>

            <div class="item-onirix-features">
              <div class="w-top-item-onirix-features">
                <p class="title__item-onirix-features">Prédictions précises</p>
              </div>
              <p class="txt__item-onirix-features">Grâce à des algorithmes de pointe et des techniques de machine learning, l'IA peut faire des prédictions précises sur votre futur en se basant sur les thèmes récurrents dans vos rêves, les motifs de vos comportements et vos habitudes.</p>
              <router-link class="link-color" to="/connexion">Tester Onirix</router-link>
            </div>

            <div class="item-onirix-features">
              <div class="w-top-item-onirix-features">
                <p class="title__item-onirix-features">Compréhension de soi</p>
              </div>
              <p class="txt__item-onirix-features">En aidant les individus à comprendre leurs rêves, l'IA les aide à mieux se comprendre eux-mêmes, à explorer leur créativité, à résoudre des problèmes et à trouver un équilibre émotionnel.</p>
              <router-link class="link-color" to="/connexion">Tester Onirix</router-link>
            </div>

          </div>
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
.section-onirix-header {
  padding-top: 4rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/background-orinix.webp?alt=media&token=38ddd428-e750-4ad4-80ab-b3af720c2ba4');
  background-size: cover ;
  background-position: cover;
  background-repeat: no-repeat;
}

.onirix-header-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: auto;
  text-align: center;
}

.h1__onirix-header  {
  margin-bottom: 1.5rem;
}

.subtitle__onirix-header {
  margin-bottom: 2rem;
  font-size: 1.3rem;
}

/* SECTION 2*/

.section-onirix-analyse {
  padding: 9rem 0rem;
  background: var(--grey-color);
}

.l-2b-onirix-analyse {
  display: flex;
  gap: 4rem;
}

.b1-onirix-analyse {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.b1-onirix-analyse > button {
  align-self: self-start;
}


.h2__b1-onirix-analyse {
  margin-bottom: 1rem;
}

.subtitle__b1-onirix-analyse {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.b2-onirix-analyse {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.w-img-b2-onirix-analyse {
  height: 30rem;
  border-radius: 1rem;
  overflow: hidden;
}

.w-img-b2-onirix-analyse > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* SECTION 3*/ 


.section-onirix-understand {
  padding: 9rem 0rem;
  background: var(--grey-color);
}

.l-2b-onirix-understand {
  display: flex;
  flex-direction: row-reverse;
  gap: 4rem;
}

.b1-onirix-understand {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.b1-onirix-understand > button {
  align-self: flex-start;
}

.h2__b1-onirix-understand {
  margin-bottom: 1rem;
}

.subtitle__b1-onirix-understand {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.b2-onirix-understand {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.w-img-b2-onirix-understand {
  height: 30rem;
  border-radius: 1rem;
  overflow: hidden;
}

.w-img-b2-onirix-understand > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* SECTION Features*/ 

.section-onirix-features {
  padding: 10rem 0rem;
}

.onirix-features-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.h2__onirix-features {
  margin-bottom: 3rem;
  max-width: 1000px;
  width: 100%;
}



.w-items-onirix-features {
  display: flex;
  text-align: start;
  gap: 2rem;
  flex-wrap: wrap;
}

.item-onirix-features {
  flex: 1;
  padding: 3rem;
  background: var(--black-color);
  border-radius: 0.5rem;
}

.w-top-item-onirix-features {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.title__item-onirix-features {
  opacity: 1;
}

.txt__item-onirix-features {
  margin-bottom: 2rem;
}

@media only screen and (max-width: 700px) {
  .l-2b-onirix-analyse {
    flex-direction: column;
  }
  .b1-onirix-analyse {
    width: 100%;
  }
  .b2-onirix-analyse {
    width: 100%;
  }

  .l-2b-onirix-understand {
    flex-direction: column;
  }

  .b1-onirix-understand {
    width: 100%;
  }

  .b2-onirix-understand {
    width: 100%;
  }
}


</style>