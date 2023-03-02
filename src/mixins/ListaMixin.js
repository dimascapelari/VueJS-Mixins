export default {
  data() {
    return {
      titulo: "Lista Padrão",
      itens: [],
      item: "",
    };
  },
  methods: {
    adicionarItem() {
      this.itens.push(this.item);
      this.item = "";
    },
  },
};
