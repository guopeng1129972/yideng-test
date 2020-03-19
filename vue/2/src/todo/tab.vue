<template>
  <div class="helper">
    <span 
    class="left">2 item left</span>
    <span class="tabs">
    <span
     v-for="state in states" 
     :key:"state" 
     :class="[state,filter === state ? "actived":'']" 
     @click="toggleFiter(state)"
    >
    {{state}}</span>
    </span>
    <span class="clear" @click="clearCompleted">Clear completed</span>

  </div>
</template>

<script>
export default {
  props:{
    filter:{
      type:String,
      require:true,
    }
  },
  data:{
    states:['all','active','completed']
  },
  methods:{
    clearCompleted(){},
    toggleFiter(){},
  }
}
</script>