<template>
    <div class="table">
      <Deck class="deck south" :cards="southCards"></Deck>
      <Deck class="deck west" :cards="westCards"></Deck>
      <Deck class="deck north" :cards="northCards"></Deck>
      <Deck class="deck east" :cards="eastCards"></Deck>
      <!-- <Position class="avatar south">South</Position>
      <Position class="avatar west">West</Position> -->
      <!-- <Position class="avatar north">North</Position>
      <Position class="avatar south">South</Position>
      <Position class="avatar west">West</Position>
      <Position class="avatar east">East</Position> -->
        <!-- <div class="avatar north">
            <img class="front" :src="getSrc('avatar')"/>
            <img class="front" :src="getSrc('namePlate')"/> -->
            
            <!-- <img class="back" :src="getSrc('avatar')"/> -->
        <!-- </div>
        <div class="avatar south">
            <img class="front" :src="getSrc('avatar')"/> -->
            <!-- <img class="back" :src="getSrc('avatar')"/> -->
        <!-- </div>
        <div class="avatar west">
            <img class="front" :src="getSrc('avatar')"/> -->
            <!-- <img class="back" :src="getSrc('avatar')"/> -->
        <!-- </div>
        <div class="avatar east">
            <img class="front" :src="getSrc('avatar')"/> -->
            <!-- <img class="back" :src="getSrc('avatar')"/> -->
        <!-- </div> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Position from "./Position";
import Deck from "./Deck";

export default {
  props: {
    option: {
      type: Object,
      default() {
        return {
          flipped: true,
          cardName: "",
          src: "../../../img/8C.png"
        };
      }
    }
  },

  computed: {
    ...mapGetters([
      "status",
      "northCards",
      "southCards",
      "eastCards",
      "westCards",
      "trickCards"
    ])
  },

  methods: {
    ...mapActions(["flipCard", "playCard"]),
    flip() {
      return;
      // if (this.option.flipped) {
      //   return;
      // }
      // this.flipCard(this.option);
      // this.$emit("flipped", this.option);
    },
    play() {
      if (this.option.position !== "south") {
        return;
      }
      this.playCard(this.option);
    },
    getSrc(name) {
      var images = require.context("../../../img/", false, /\.png$/);
      return images("./" + name + ".png");
    }
  },

  components: {Position,Deck}
};
</script>

<style scoped>
/* .avatar img { */
  /* display: block; */
  /* height: 256px; */
  /* width: 100%; */
  /* position: absolute; */
  /* backface-visibility: hidden; */
/* } */
.table {
  /* margin-left: -70px; */
  cursor: pointer;
  /* width: 360px; */
  width:100%;
  display: grid;
  grid-template-columns: 1fr minmax(40px, 60px) minmax(130px, 190px) minmax(40px, 60px) minmax(130px, 190px) 1fr;
  grid-template-rows: 50px 3fr 50px 140px 60px;
  /* grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(23, 1fr); */
  /* background-color: #2196f3; */
  /* padding: 10px 10px; */
  /* height: 600px; */
  /* position: relative; */
  /* perspective: 800px; */
  
}

.table .deck.south {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  z-index: 1;
  /* padding: 10px 10px; */
  /* transform: scale(0.5); */
  width: 100%;
  /* height: 200px; */
  /* transform: rotate(270deg); */
}

.table .deck.west {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  z-index: 1;
  /* padding: 10px 10px; */
  /* transform: scale(0.5); */
  width: 100%;
  /* height: 200px; */
  transform-origin: top right;
  transform: translate(-85%, -25px) rotate(90deg) scale(.5);
  /* translate(40%, 30%) */
}

.table .deck.east {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  z-index: 1;
  /* padding: 10px 10px; */
  /* transform: scale(0.5); */
  width: 100%;
  /* height: 200px; */
  transform-origin: top left;
  transform: translate(85%, -25px) rotate(-90deg) scale(.5);
  /* translate(40%, 30%) */
}

.table .deck.north {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  z-index: 1;
  /* padding: 10px 10px; */
  /* transform: scale(0.5); */
  width: 100%;
  /* height: 200px; */
  transform-origin: top ;
  transform: translateY(-300px) rotate(180deg) scale(.5);
  /* translate(40%, 30%) */
}

.avatar {
  /* background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center; */
}

.table .avatar.south {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 5;
  grid-row-end: 6;
  z-index: 2;
}

.table .avatar.west {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  /* transform: rotate(90deg); */
}

/* .avatar.north {
  grid-column-start: 9;
  grid-column-end: 12;
  grid-row-start: 8;
  grid-row-end: 13;
  transform: rotate(180deg);
}
.avatar.east {
  grid-column-start: 16;
  grid-column-end: 19;
  grid-row-start: 13;
  grid-row-end: 18;
  transform: rotate(270deg);
} */


/* .card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (min-width: 450px) {
  .container {
    width: 100px;
    height: 121px;
    margin-right: 3px;
  }
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
} */
</style>
