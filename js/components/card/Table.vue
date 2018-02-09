<template>
    <div class="container">
      <Position class="avatar north">North</Position>
      <Position class="avatar south">South</Position>
      <Position class="avatar west">West</Position>
      <Position class="avatar east">East</Position>
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
import { mapActions } from "vuex";
import Position from "./Position";

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

  components: {Position}
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
.container {
  /* margin-left: -70px; */
  cursor: pointer;
  width: 360px;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(23, 1fr);
  background-color: #2196f3;
  padding: 10px 10px;
  height: 600px;
  /* position: relative; */
  /* perspective: 800px; */
  
}
.avatar {
  /* background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center; */
}

.avatar.south {
  grid-column-start: 9;
  grid-column-end: 12;
  grid-row-start: 18;
  grid-row-end: 23;
}
.avatar.north {
  grid-column-start: 9;
  grid-column-end: 12;
  grid-row-start: 8;
  grid-row-end: 13;
  transform: rotate(180deg);
}
.avatar.west {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 13;
  grid-row-end: 18;
  transform: rotate(90deg);
}
.avatar.east {
  grid-column-start: 16;
  grid-column-end: 19;
  grid-row-start: 13;
  grid-row-end: 18;
  transform: rotate(270deg);
}

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
