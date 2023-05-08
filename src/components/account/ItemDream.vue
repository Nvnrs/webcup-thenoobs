<template>
  <div class="item-ia">
    <div class="w-name-ia">
      <p class="name-ia">Onirix</p>
      <div class="w-img-ia">
        <img src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/women-onirix.webp?alt=media&token=174b0417-05fd-47b4-bc9b-4eee32b7272c">
      </div>
    </div>
    <div class="answer__ia">
      <p class="txt__answer">{{ element.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['element']
}
</script>

<style>
.w-name-ia {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

</style>