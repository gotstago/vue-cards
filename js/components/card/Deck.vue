<template>
    <div class="container" >
        <Card class="playingcard" v-for="(card, index) of southCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "./Card";

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
      "cards",
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
    },
    // play() {
    //   if (this.option.position !== "south") {
    //     return;
    //   }
    //   this.playCard(this.option);
    // },
    // getSrc(name) {
    //   var images = require.context("../../../img/", false, /\.png$/);
    //   return images("./" + name + ".png");
    // }
  },

  components: {Card}
};
</script>

<style scoped>
.container {
  /* margin-top: 10px; */
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  /* width: 100%; */

  /* background-color: #fff; */
  /* height: 100px;
  border-radius: 4px;
  padding: 10px 5px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around; */
  /* transform: translateY(-10%) rotateZ(180deg) scale(0.8); */
}

:nth-child(1) {
  width:100%;
    grid-column-start: 1;
    grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(3) {
    grid-column-start: 3;
    grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(4) {
    grid-column-start: 4;
    grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(5) {
    grid-column-start: 5;
    grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(6) {
    grid-column-start: 6;
    grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(7) {
    grid-column-start: 7;
    grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(8) {
    grid-column-start: 8;
    grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 2;
}
:nth-child(9) {
    grid-column-start: 9;
    grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>
