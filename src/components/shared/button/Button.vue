<template>
  <button @click="shootsAction()" class="button button-danger" :type="type">{{label}}</button>
</template>
<script>
export default {
  props: ['type', 'label'],

  methods: {
    shootsAction(){
      if(confirm('Confirm Operation?')){
        this.$emit('buttonEnabled');
      }
    }
  }
}
</script>
<style>
  .button {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2rem;
  }

  .button-danger {
    background: firebrick;
    color: white;
  }

  .button-standard {
    background: darkcyan;
    color: white;
  }

</style>
