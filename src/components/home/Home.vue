<template>
  <div>
    <h1 class="centralized">{{title}}</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="search for the title">
    <ul class="photoList">
      <li class="photo-list-item" v-for="photo of photosFilter">
        <my-panel :title="photo.titulo">
          <image-responsive :url="photo.url" :titulo="photo.titulo"/>
          <my-button type="button" label="Remove"/>
        </my-panel>
      </li>
    </ul>
  </div>

</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import imageResponsive from '../shared/image-responsive/imageResponsive.vue';
import Button from '../shared/button/Button.vue'

export default {

  components: {
    'my-panel': Panel,
    'image-responsive': imageResponsive,
    'my-button': Button
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

  .centralized {
    text-align: center;
  }

  .photoList {
    list-style: none;
  }

  .photoList .photo-list-item {
      display: inline-block;
      cursor: pointer;
  }

  .filter {
    display: block;
    width: 100%;
  }
</style>

