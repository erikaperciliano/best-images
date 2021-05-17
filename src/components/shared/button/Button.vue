<template>
  <button @click="shootsAction()" class="button" :class="styleButton" :type="type">{{label}}</button>
</template>
<script>
export default {
  props: ['type', 'label', 'confirmation', 'estilo'],

  methods: {
    shootsAction(){
      if(this.confirmation){
        if(confirm('Confirm Operation?')){
          this.$emit('buttonEnabled');
        }
        return;
      }
      this.$emit('buttonEnabled');
    }
  },

  computed: {
    styleButton(){
      if(this.estilo == 'standard' || !this.estilo) return 'button-standard';
      if(this.estilo == 'danger') return 'button-danger';
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
