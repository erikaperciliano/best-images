<template>
  <div class="body">
    <h1 class="centralized">{{title}}</h1>
    <ul class="photoList">
      <li class="photo-list-item" v-for="photo of photos">
        <my-panel :title="photo.titulo">
          <img class="responsive-image" :src="photo.url" :alt="photo.title" />
        </my-panel>
      </li>
    </ul>
  </div>

</template>

<script>
import Panel from './components/shared/panel/Panel.vue';

export default {

  components: {
    'my-panel': Panel
  },

  data(){
    return {
      title: 'Best Images',
      photos: []
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.photos = fotos, err => console.log(err));
  }
}
</script>

<style>
  .body {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
  .centralized {
    text-align: center;
  }

  .photoList {
    list-style: none;
  }

  .photoList .photo-list-item {
      display: inline-block;
  }

  .responsive-image {
    width: 100%;
  }
</style>

