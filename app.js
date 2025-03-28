const app = Vue.createApp({
  data() {
    return {
      url: "https://www.yle.fi",
      showBooks: true,
      books: [
        {
          id: 1,
          title: "The great escape",
          author: "Joanna Nell",
          img: "assets/book1.png",
          isFav: true,
        },
        {
          id: 2,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          img: "assets/book2.png",
          isFav: false,
        },
        {
          id: 3,
          title: "The Great Moby",
          author: "Herman Melville",
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
