<template>
  <main class="pageContent">
    <div class="pageSection">
      <div class="pageSection-content">
        <Nav />
        <h1 class="pageSection-title">Договор-оферта</h1>
        <div class="pageSection-block">
          <div class="agreementPage" v-html="content"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Nav from "/components/navigationlagal.vue";
export default {
  head: {
    title: "VORON – Срочная и бесплатная доставка автомобилей бизнес-класса",
    meta: [
      {
        hid: "keywords",
        name: "keywords",
        content:
          "каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии",
      },
      {
        hid: "description",
        name: "description",
        content:
          "VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
      },
    ],
  },
  data() {
    return {
      content: "",
    };
  },
  components: {
    Nav,
  },
  async asyncData({ context, $axios, route }) {
    let date = `&date=${route?.query?.date}` || ''
    let response = await $axios.get(`/api/getpage?alias=agreement${date}`);
    return { content: response.data };
  },
};
</script>
