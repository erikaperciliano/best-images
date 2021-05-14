<template>
  <div class="body">
    <h1 class="centralized">{{title}}</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="search for the title">
    <ul class="photoList">
      <li class="photo-list-item" v-for="photo of photosFilter">
        <my-panel :title="photo.titulo">
          <image-responsive :url="photo.url" :titulo="photo.titulo"/>
        </my-panel>
      </li>
    </ul>
  </div>

</template>

<script>
import Panel from './components/shared/panel/Panel.vue';
import imageResponsive from './components/shared/image-responsive/imageResponsive.vue';

export default {

  components: {
    'my-panel': Panel,
    'image-responsive': imageResponsive
  },

  data(){
    return {
      title: 'Best Images',
      photos: [],
      filter: ''
    }
  },

  computed: {
    photosFilter(){
        if(this.filter){
          let exp = new RegExp(this.filter.trim(), 'i');
          return this.photos.filter(photo => exp.test(photo.titulo));
        }else {
          return this.photos;
        }
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

  .filter {
    display: block;
    width: 100%;
  }
</style>

