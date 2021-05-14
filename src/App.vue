<template>
  <div class="body">
    <h1 class="centralized">{{title}}</h1>
    <ul class="photoList">
      <li class="photo-list-item" v-for="photo of photos">
        <div class="panel">
          <h2 class="panel-title">{{photo.titulo}}</h2>
          <div class="panel-container">
            <img class="responsive-image" :src="photo.url" :alt="photo.title" />
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
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

  .panel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .panel .panel-title {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>

