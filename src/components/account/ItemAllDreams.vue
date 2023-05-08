<template>
  <div class="item-all-dreams">
    <div class="w-dream__item-all-dreams">
      <p class="before-dream__item-all-dreams">Mon rêve :</p>
      <p class="dream__item-all-dreams">{{ element.reve }}</p>
    </div>
    <div class="w-prediction__itemm-all-dreams">
      <p class="before-prediction__item-all-dreams">Notre prédiction :</p>
      <p class="prediction__item-all-dreams">{{ element.prediction }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['element']
}
</script>

<style>

.item-all-dreams {
    background: var(--grey-color);
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: solid rgba(255, 255, 255, 0.106) 1px;
    transition: 0.2s ease-in-out;
}

.item-all-dreams:hover {
    background: var(--primary-color);
}

.w-dream__item-all-dreams {
    margin-bottom: 1rem;
}


.before-dream__item-all-dreams {
    padding: 0.2rem 1rem;
    font-size: 1.1rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    background: #bd35843b ;
    border-radius: 1rem;
    color: #ffb5e0;
}

.dream__item-all-dreams {
    font-size: 1rem;
    display: inline;
    margin-bottom: 1rem;
}


.before-prediction__item-all-dreams {
    padding: 0.2rem 1rem;
    margin-right: 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    background: #080e1f59 ;
    border-radius: 1rem;
    color: rgba(255, 255, 255, 0.904);
}

.prediction__item-all-dreams {
    font-size: 1rem;
    display: inline;
    margin-bottom: 1rem;
}
</style>