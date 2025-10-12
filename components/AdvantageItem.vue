<template>
  <div class="advantages-item">
    <div class="adv-image">
      <img :src="img" />
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
    img: {
      required: true,
    },
  },
};
</script>