<template>
  <div style="border: 1px solid #ccc; padding: 10px; margin: 5px; display: inline-block;">
    <p>Счётчик: {{ count }}</p>
    <span @click="handleClick" >
      <slot>
        <button>НАЖМИ НА МЕНЯ</button>
      </slot>
    </span>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
});
const emit = defineEmits(['button-clicked']);
const count = ref(0);
function handleClick() {
  count.value += props.amount;
  emit('button-clicked');
}
</script>