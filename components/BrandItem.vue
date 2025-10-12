<template>
  <div
    :class="[
      'advantages-item',
      [
        slug == $route.params.slug || typeof $route.params.slug == 'underfined'
          ? 'advantages-item-active'
          : '',
      ],
    ]"
  >
    <nuxt-link :to="`${link}#chooseCar`">
      <div class="icon-adv">
        <img v-if="image" :src="image" />
        <i
          style="font-size: 35px; color: rgba(255, 255, 255, 0.9)"
          v-if="icon"
          :class="icon"
        />
      </div>

      <div class="advantages-itemText">
        {{ name }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
    },
    image: {
      required: false,
    },
    icon: {
      required: false,
    },
    link: {
      required: false,
    },
    slug: {
      required: true,
    },
  },
};
</script>

<style scoped>
.icon-adv {
  margin-bottom: 12px;
}
.advantages-item {
  margin-bottom: 30px;
}
.advantages-item a .advantages-itemText {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}
.advantages-item a:hover .advantages-itemText,
.advantages-item.advantages-item-active a .advantages-itemText {
  color: rgba(255, 171, 0, 1);
}

.advantages-item a .icon-adv:before {
  transition: all 0.3s ease;
}

.advantages-item a:hover .icon-adv:before,
.advantages-item.advantages-item-active a .icon-adv:before {
  opacity: 0.9;
}
</style>