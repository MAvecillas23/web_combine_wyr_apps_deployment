<!-- Vue/ JS code goes in script-->
<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

// import this too... onMounted is provided when code happens
import { ref, onMounted } from 'vue'
import wyrService from "./services/wyrService"; // import this file

// Would you rather question and answers
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// store the user's answer once they made a choice
const userSelection = ref('')

onMounted( () => {
  wyrService.getRandomWYR().then((wyrData) => {
    // expect wyrData to be json question and answers from wyrRandom

    // assign ref values from the json question and answers assigned to wyrData
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

// updates whatever userSelection was changed to
function updateUserSelection(userChoice) {
  userSelection.value = userChoice
}

</script>

<!-- html and Vue models goes inside template-->
<template>
  <div id="app-component">
    <h1>Hello! Would You Rather...</h1>
  <!--  assign question and answers that is handled through WouldYouRather.vue's defineProps to the vyrQuestion and answers
   shown above-->
    <WouldYouRather v-bind:question="wyrQuestion"
                    v-bind:answer1="wyrAnswer1"
                    v-bind:answer2="wyrAnswer2"
                    v-on:answer-selected="updateUserSelection">
    </WouldYouRather>
    <p> Thanks! You chose... {{ userSelection }}</p>
  </div>
 </template>
<!-- CSS goes in style-->
<style scoped>
p {
  font-family: "Courier New", sans-serif;
}

#app-component {
  background-color: greenyellow;
  padding: 40px
}

</style>
