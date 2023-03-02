<template>
  <div>
    <h3>Lista Video Games</h3>
    <input type="text" placeholder="Nome do video game" v-model="item" />
    <button type="button" @click="adicionarItem">Adicionar</button>
    <br />
    <ul>
      <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import ListaMixin from "@/mixins/ListaMixin";

export default {
  name: "ListaVideoGames",
  mixins: [ListaMixin],
};
</script>

<style></style>
