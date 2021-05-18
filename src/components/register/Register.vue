<template>

  <div>
    <h1 class="centralized">Cadastro</h1>
    <h2 class="centralized"></h2>

    <form>
      <div class="control">
        <label for="title">TÍTULO</label>
        <input id="title" autocomplete="off">
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off">
        <image-responsive/>
      </div>

      <div class="control">
        <label for="description">DESCRIÇÃO</label>
        <textarea id="description" autocomplete="off"></textarea>
      </div>

      <div class="centralized">
        <my-button label="RECORD" tipo="submit"/>
        <router-link to="/"><my-button label="Back" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue'
import Button from '../shared/button/Button.vue';

export default {

  components: {

    'image-responsive': ImageResponsive,
    'my-button': Button
  }
}

</script>
<style scoped>

  .centralized {
    text-align: center;
  }
  .control {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .control label {
    display: block;
    font-weight: bold;
  }

 .control label + input, .control textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralized {
    text-align: center;
  }

</style>
