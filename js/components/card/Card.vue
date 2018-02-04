<template>
    <div class="container" v-on:click="play">
        <div class="card" v-bind:class="{ flipped: option.flipped }">
            <img class="front" :src="getSrc(option.src)"/>

            <img class="back" src="../../../img/back.png"/>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

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

  components: {}
};
</script>

<style scoped>
.container {
  margin-left: -70px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
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
}
</style>
