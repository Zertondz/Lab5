<template>
  <div style="display: flex; flex-wrap: wrap;">
    <Clicker
        v-for="n in 100"
        :key="n"
        :amount="1"
        @button-clicked="onClicked(n)"
    >
      <button>НАЖМИ НА КЛИКЕР {{ n }}</button>
    </Clicker>
  </div>
</template>

<script setup>
import Clicker from './components/Clicker.vue';

function onClicked(n) {
  alert(`Clicker ${n} clicked!`);
}
</script>