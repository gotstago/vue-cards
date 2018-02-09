<template>
    <!-- <div class="container" v-on:click="flip"> -->
        <div class="avatar">
          <!-- <div class="north">
              <Card v-for="(card, index) of northCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
          </div> -->
          <img class="sample" :src="getSrc('avatar')"/>
          <!-- <img class="grid-item namePlate" :src="getSrc('namePlate')"/> -->
          <div class="playername">
            <p><slot> name </slot></p>
          </div>
            
            <!-- <img class="back" :src="getSrc('avatar')"/> -->
        </div>
    <!-- </div> -->
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
      // "leftMatched",
      // "cards",
      // "status",
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

  components: {Card}
};
</script>

<style scoped>
.north1 {
  margin-top: 10px;
  width: 100%;
  /* background-color: #fff; */
  height: 100px;
  border-radius: 4px;
  padding: 10px 5px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  transform: translateY(-10%) rotateZ(180deg) scale(0.8);
}

.container {
  /* margin-left: -70px; */
  cursor: pointer;
  /* position: relative; */
  /* perspective: 800px; */
    display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr, 1fr;

}
div.avatar {
  /* text-align: center; */
  width: 60%;
  /* background-color: white; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  /* margin-bottom: 25px; */
}
div.playername {
  text-align: center;
  /* padding: 10px 0px; */
}
.avatar img{
  width: 100%;
  /* width:256; */
  /* height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d; */
}

/* .avatar { */
  /* grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1; */
  
  /* grid-row-end: 23; */
/* } */

.namePlate {
  grid-column-start: 2;
  /* grid-column-end: 8; */
  grid-row-start: 2;
  /* grid-row-end: 23; */
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center; */
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  /* background: blue; */
  transform: rotateY(0deg);
}

.card .front {
  /* background: blue; */
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
