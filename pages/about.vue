<template>
  <main class="pageContent">
    <div class="pageSection">
      <div class="pageSection-content">
        <h1 class="pageSection-title">О сервисе</h1>
        <div class="pageSection-block">
          <div class="agreementPage" v-html="content"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: "VORON – Покупка авто через аренду с выкупом. Сначала тест-драйв, потом выкуп",
    meta: [
      {
        hid: "keywords",
        name: "keywords",
        content:
          "аренда с выкупом, аренда с правом выкупа, каршеринг ворон, VORON, аренда автотобиля, прокат автомобиля, аренда авто представительского класса, аренда авто в россии, кредит на автомобиль",
      },
      {
        hid: "description",
        name: "description",
        content:
          "VORON – Покупка авто через аренду с выкупом. Сначала тест-драйв, потом выкуп",
      },
    ],
  },
  data() {
    return {
      content: "",
    };
  },
  async asyncData({ context, $axios }) {
    let response = await $axios.get(`/api/getpage?alias=about_store`);
    return { content: response.data };
  },
};
</script>
