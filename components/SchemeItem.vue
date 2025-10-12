<template>
  <div class="howItWorks-item">
    <div v-if="number" class="howItWorks-numberItem">{{ number }}</div>
    <div v-if="icon" class="icon-adv">
      <i :class="icon"></i>
    </div>
    <div class="howItWorks-itemTitle">{{ title }}</div>
    <div class="howItWorks-itemText">
      <span v-html="text"></span>
      <p
        style="font-size: 11px; color: #ffffff; opacity: 0.4"
        v-if="decsription"
        v-html="decsription"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      required: false,
    },
    title: {
      required: true,
    },
    text: {
      required: true,
    },
    decsription: {
      required: false,
    },
    number: {
      required: false,
    },
  },
};
</script>