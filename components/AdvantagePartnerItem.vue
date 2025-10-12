<template>
  <div class="advantages-item">
    <div class="icon-adv">
      <i :class="icon"></i>
    </div>
    <div class="advantages-itemText" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
    },
    icon: {
      required: true,
    },
  },
};
</script>