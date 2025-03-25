const app = Vue.createApp({
  data() {
    return {
      url: "https://www.yle.fi",
      showBooks: true,
      books: [
        {
          title: "Assassin's quest",
          author: "Robin Hobb",
        },
        {
          title: "Fool's errand",
          author: "Robin Hobb",
        },
        {
          title: "Assassin's fate",
          author: "Robin Hobb",
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    changeTitle(title) {
      this.title = title;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
  },
});
app.mount("#app");
