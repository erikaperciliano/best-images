<template>

  <div>
    <h1 class="centralized">Cadastro</h1>
    <h2 class="centralized"></h2>

    <form @submit.prevent="record()">
      <div class="control">
        <label for="title">TÍTULO</label>
        <input
          id="title"
          autocomplete="off"
          v-model.lazy="photo.titulo"
        >
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input
          id="url"
          autocomplete="off"
          v-model.lazy="photo.url"
        >
        <image-responsive
          v-show="photo.url"
          :url="photo.url"
          :title="photo.titulo"
        />
      </div>

      <div class="control">
        <label for="description">DESCRIÇÃO</label>
        <textarea
          id="description"
          autocomplete="off"
          v-model="photo.description"
        >
        </textarea>
      </div>

      <div class="centralized">
        <my-button label="RECORD" tipo="submit"/>
        <router-link to="/"><my-button label="Back" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImageResponsive from '../shared/imageResponsive/ImageResponsive'
import Button from '../shared/button/Button.vue';
import Photo from '../../domain/photo/Photo';
import PhotoService from '../../domain/photo/PhotoService';

export default {

  components: {
    'image-responsive': ImageResponsive,
    'my-button': Button
  },

  data(){
    return {
      photo: new Photo()
    }
  },

  methods: {
    record(){
      this.$http
        .post('http://localhost:3000/v1/fotos', this.photo)
        .then(() => this.photo = new Photo(), err => console.log(err))

      /*this.service
        .register(this.photo)
        .then(() => this.photo = new Photo(), err => console.log(err));*/
    },

    created(){
      this.service = new PhotoService(this.$resource);
    }
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
