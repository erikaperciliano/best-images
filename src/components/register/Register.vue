<template>

  <div>
    <h1 class="centralized">Register</h1>

    <h2 v-if="photo._id" class="centralized">Changing {{photo.titulo }} </h2>
    <h2 v-else class="centralized">Including</h2>

    <form @submit.prevent="record()">
      <div class="control">
        <label for="title">Title</label>
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
        <label for="description">Description</label>
        <textarea
          id="description"
          autocomplete="off"
          v-model="photo.description"
        >
        </textarea>
      </div>

      <div class="centralized">
        <my-button label="RECORD" tipo="submit"/>
        <router-link :to="{name: 'home'}"><my-button label="Back" tipo="button"/></router-link>
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
      photo: new Photo(),
      id: this.$route.params.id
    }
  },

  methods: {
    record(){
      this.service
        .register(this.photo)
        .then(() => {
          if(this.id) this.$router.push({name: 'home'});
          this.photo = new Photo()
        }, err => console.log(err));
    },
  },

  created(){
      this.service = new PhotoService(this.$resource);

      if(this.id){
        console.log('Cai na validação!')
        this.service
          .search(this.id)
          .then(photo => this.photo = photo);
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
