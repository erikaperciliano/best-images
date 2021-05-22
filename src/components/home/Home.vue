<template>
  <div>
    <h1 class="centralized">{{title}}</h1>
    <p v-show="message" class="centralized">{{message}}</p>
    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="search for the title">
    <ul class="photoList">
      <li class="photo-list-item" v-for="photo of photosFilter" :key="photo.title">
        <my-panel :title="photo.titulo">
          <image-responsive v-my-transform:scale.animation="1.2" :url="photo.url" :titulo="photo.titulo"/>
          <router-link :to="{name: 'alter', params: {id: photo._id}}">
            <my-button type="button" label="ALTER"/>
          </router-link>
          <my-button
            type="button"
            label="Remove"
            @buttonEnabled="remove(photo)"
            :confirmation="true"
            estilo="danger"
          />
        </my-panel>
      </li>
    </ul>
  </div>

</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import imageResponsive from '../shared/imageResponsive/imageResponsive';
import Button from '../shared/button/Button.vue';
import PhotoService from '../../domain/photo/PhotoService';

export default {

  components: {
    'my-panel': Panel,
    'image-responsive': imageResponsive,
    'my-button': Button,
  },

  data(){
    return {
      title: 'Best Images',
      photos: [],
      filter: '',
      message:'',
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

  methods: {
    remove(photo){
      this.service.delete(photo._id)
        .then(() => {
          let index = this.photos.indexOf(photo);
          this.photos.splice(index, 1); // remove item of an array
          this.message = 'Photo removed successfully!'
          }, err => this.message = err.message);
    }
  },

  created() {
    this.service = new PhotoService(this.$resource);

    this.service
      .list()
      .then(fotos => this.photos = fotos, err => this.message = err.message);
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

