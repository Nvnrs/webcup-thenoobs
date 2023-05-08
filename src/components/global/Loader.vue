<template>
  <div class="loader">
    <div class="txt__loader">{{ message }}</div>
  </div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style>
.loader {
  display: block;
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 1rem;
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}

.txt__loader {
    padding: 1rem 0;
    text-align: center;
    animation: opacityTxt 2s ease-in-out infinite; 
}

@keyframes opacityTxt {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}
</style>