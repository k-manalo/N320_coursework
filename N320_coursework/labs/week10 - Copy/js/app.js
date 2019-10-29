var app = new Vue({
  el: "#app",
  mounted: function() {
    axios.get("data/movie.json").then(response => {
      this.candy = response.data.movie;
    });
  },
  data: {
    candy: [],
    movie: []
  },
  methods: {}
});
