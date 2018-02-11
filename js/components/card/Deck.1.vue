<template>
    <div class="container" >
        <ul class="cards">
  <li class="card card--aod" onclick=""></li>
  <li class="card card--2oc" onclick=""></li>
  <li class="card card--aoh" onclick=""></li>
  <li class="card card--aos" onclick=""></li>
  <li class="card card--koh" onclick=""></li>
  <li class="card card--aoc" onclick=""></li>
  <li class="card card--aoh" onclick=""></li>
  <li class="card card--aos" onclick=""></li>
  <li class="card card--koh" onclick="">
      <img class="back" src="../../../img/back.png"/>
  </li>
</ul>
        <!-- <div class="card" v-bind:class="{ flipped: option.flipped }">
            <img class="front" :src="getSrc(option.src)"/>

            <img class="back" src="../../../img/back.png"/>
        </div> -->
    </div>
</template>

<script>
// import { mapActions } from "vuex";

// export default {
//   props: {
//     option: {
//       type: Object,
//       default() {
//         return {
//           flipped: true,
//           cardName: "",
//           src: "../../../img/8C.png"
//         };
//       }
//     }
//   },

//   methods: {
//     ...mapActions(["flipCard", "playCard"]),
//     flip() {
//       return;
//       // if (this.option.flipped) {
//       //   return;
//       // }
//       // this.flipCard(this.option);
//       // this.$emit("flipped", this.option);
//     },
//     play() {
//       if (this.option.position !== "south") {
//         return;
//       }
//       this.playCard(this.option);
//     },
//     getSrc(name) {
//       var images = require.context("../../../img/", false, /\.png$/);
//       return images("./" + name + ".png");
//     }
//   },

//   components: {}
// };
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.cards,
.card {
  margin: 0;
  padding: 0;
  list-style-type: none;
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
  /* transform: rotateY(0deg); */
}
.card {
  font-size: 20vw;
  margin: 0 -0.26em;
  position: relative;
  cursor: pointer;
  color: #292a18;

  /* Uncomment these lines to see the target areas for the hovering */
  /*
  background: rgba(255,255,255,0.5);
  outline: solid 5px red;
  */
}

/* :before,
:after {
  content: "";
  display: block;
  pointer-events: none;
} */

:before {
  position: absolute;
  top: 5%;
  right: 0;
  bottom: -5%;
  left: 0;
  margin: auto;
  background: #000;
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.35s linear;
}

:after {
  position: relative;
  width: 1em;
  height: 1.1em;
  border-radius: 0.1em;

  background: #eee;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  text-align: center;
  padding: 0.1em 0;
  line-height: 1;

  transform-origin: center bottom;
  transition: transform 0.4s cubic-bezier(0.46, 0.01, 0.3, 0.98);
  transition-timing-function: cubic-bezier(0.1, 0.98, 0.47, 0.99);
}
.card--2oc:after {
  content: "\1F0D2";
}
.card--aoc:after {
  content: "\1F0D1";
}
.card--aoh:after {
  content: "\1F0B1";
}
.card--koh:after {
  content: "\1F0BE";
}
.card--aod:after {
  content: "\1F0C1";
}
.card--aos:after {
  content: "\1F0A1";
}
.card--kos:after {
  content: "\1F0AE";
}

.card--aod,
.card--aoh,
.card--koh {
  color: #cc5840;
}

html {
  height: 100%;
  display: flex;
  background: hsla(74, 20%, 39%, 1);
  overflow: hidden;
}
body {
  margin: auto;
  width: 100%;
}
* {
  box-sizing: border-box;
}
</style>
