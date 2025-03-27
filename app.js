const app = Vue.createApp({
  data() {
    return {
      url: "https://www.yle.fi",
      showBooks: true,
      books: [
        {
          id: 1,
          title: "Assassin's quest",
          author: "Robin Hobb",
          img: "assets/book1.png",
          isFav: true,
        },
        {
          id: 2,
          title: "Fool's errand",
          author: "Robin Hobb",
          img: "assets/book2.png",
          isFav: false,
        },
        {
          id: 3,
          title: "Assassin's fate",
          author: "Robin Hobb",
          img: "assets/book3.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      // let book = this.books.find((book) => book.id == id);
      book.isFav = !book.isFav;
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
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");
