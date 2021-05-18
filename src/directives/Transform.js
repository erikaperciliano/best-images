import Vue from 'vue';

Vue.directive('my-transform', {
  bind(el, binding, vnode){
   let current = 0;

   el.addEventListener('dblclick', function(){
    let increment = 90;
    let animation = false;

    if(binding.value){
      increment = binding.value.increment;
      animation = binding.value.animation;
    }

    current += increment;
    el.style.transform = `rotate(${current}deg)`;

    if(animation) el.style.transition = 'transform 0.5s';
   });
  }
});
