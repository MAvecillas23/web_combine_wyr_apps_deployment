<script setup>
import { ref } from 'vue'

// expect these three pieces of data from App.vue
defineProps({
  question: String,
  answer1: String,
  answer2: String

})

const emit = defineEmits([
    'answer-selected'
])

// the answer user chooses will be held here
const choice = ref(null)

function choiceMade() {
  // emit event to tell parent that user has made a choice
  emit('answer-selected', choice.value)
}


</script>

<template>
  <div id="wyr">
    <h2>Make your choice!</h2>
  <!--  display question to webpage-->
    <p> {{ question }} </p>

    <div>
      <!--  radios and labels that will hold the WYR answers -->
      <!--  to make radio buttons work/ alternate  we must connect v-model to choice and each radio connects
      to v-bind:value= to its respective answer
      when a radio button is clicked the answer value is then reactively assigned to choice
      using the v-model in each input tag
      v-on:change is used for the choiceMade function -->
      <input v-model="choice" v-bind:value="answer1" v-on:change="choiceMade" type="radio" id="answer-1">
      <label for="answer-1"> {{ answer1 }}</label>

      <input v-model="choice" v-bind:value="answer2" v-on:change="choiceMade" type="radio" id="answer-2">
      <label for="answer-2"> {{ answer2 }}</label>
    </div>
  </div>
</template>

<style scoped>

#wyr {
  background-color: lightblue;
  padding: 30px
}

p {
  font-family: fantasy;
}
</style>
