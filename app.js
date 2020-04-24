new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    lowHealth: false,
    ended: false
  },
  methods: {
    punch: function(){
      this.health = this.health-20;
      if(this.health === 40){
        this.lowHealth = true;
      }
      if(this.health === 0){
        this.ended = true;
      }
    },
    restart: function(){
      this.health = 100;
      this.ended = false;
      this.lowHealth = false;
    }
  },
  computed: {

  }
});
