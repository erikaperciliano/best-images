<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="photo of photos">
        <img :src="photo.url" :alt="photo.title" />
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data(){
    return {
      title: 'Best Images',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          title: 'dog'
        },
        {
          url: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          title: 'dog2'
        }
      ]
    }
  }
}
</script>

<style>

</style>
