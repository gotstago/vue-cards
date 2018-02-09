<template>
<div>
    <div class="north">
        <Card v-for="(card, index) of northCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
    </div>
    <div class="east">
        <Card v-for="(card, index) of eastCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
    </div>
    <div class="west">
        <Card v-for="(card, index) of westCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
    </div>
    <div class="south">
      <!-- <Avatar></Avatar> -->
        <Card v-for="(card, index) of southCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
    </div>
    <div class="trick">
      <!-- <div class="piece classic id-AnimalFox avatar spot-avatar0 spotPrefix-avatar mouseenterable mouseleaveable hover" 
      style="opacity: 1; z-index: 4000; background: url(&quot;../../../img/AnimalFox.png&quot;) 50% 100% / contain no-repeat scroll transparent; left: 616px; top: 638px; width: 124px; height: 155px;"></div>
      <div class="piece id-namePlate namePlate spot-namePlate1 spotPrefix-namePlate mouseenterable mouseleaveable classic" 
      style="opacity: 1; z-index: 4002; background: url(&quot;https://static.worldofcardgames.com/pieces/namePlate/classic/17/namePlate.png/v/144&quot;) 0% 0% / contain no-repeat scroll transparent; left: 13px; top: 423px; width: 258px; height: 59px;"></div>
      <div class="piece classic id-scorePlate scorePlate spot-scorePlate0 spotPrefix-scorePlate" 
      style="opacity: 1; z-index: 4001; background: url(&quot;https://static.worldofcardgames.com/pieces/scorePlate/classic/23/scorePlate.png/v/144&quot;) 0% 0% / contain no-repeat scroll transparent; left: 581px; top: 832px; width: 194px; height: 39px;"></div> -->
      <!-- <div>tricks</div> -->
        <!-- <Card v-for="(card, index) of trickCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card> -->
        <Position></Position>
    </div>
</div>
</template>

<script>
import Card from "./Card";
import Position from "./Position";
import Table from "./Table";

import { mapActions, mapGetters } from "vuex";

import { STATUS } from "../../vuex/store/statusEnum";

export default {
  data() {
    return {
      lastCard: null
    };
  },

  computed: {
    ...mapGetters([
      "leftMatched",
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
    ...mapActions(["updateStatus", "match", "flipCards"]),
    onFlipped(e) {
      if (this.status === STATUS.READY) {
        this.updateStatus(STATUS.PLAYING);
      }
      if (!this.lastCard) {
        return (this.lastCard = e);
      }
      if (this.lastCard !== e && this.lastCard.cardName === e.cardName) {
        this.lastCard = null;
        this.match();
        return this.leftMatched || this.updateStatus(STATUS.PASS);
      }
      let lastCard = this.lastCard;
      this.lastCard = null;
      setTimeout(() => {
        this.flipCards([lastCard, e]);
      }, 1000);
    }
  },

  components: { Card, Position, Table }
};
</script>

<style scoped>
.north {
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

.east {
  margin-top: 10px;
  width: 100%;
  /* background-color: #fff; */
  /* height: 430px; */
  border-radius: 4px;
  padding: 10px 5px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  transform-origin: center;
  transform: translate(40%, 30%) rotateZ(90deg) scale(0.8);
  /* transform: rotateZ(90deg); */
}

.west {
  margin-top: 10px;
  width: 100%;
  /* background-color: #fff; */
  /* height: 430px; */
  border-radius: 4px;
  padding: 10px 5px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  transform-origin: center;
  transform: translate(-40%, -130%) rotateZ(270deg) scale(0.8);
}

.south {
  margin-top: 10px;
  width: 100%;
  /* background-color: #fff; */
  /* height: 430px; */
  border-radius: 4px;
  padding: 10px 5px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  transform-origin: center;
  transform: translate(10%, -80%) scale(0.8);
}

.trick {
  margin-top: 10px;
  width: 100%;
  /* background-color: #fff; */
  /* height: 430px; */
  border-radius: 4px;
  padding: 10px 5px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  transform-origin: center;
  transform: translate(5%, -300%) scale(0.8);
}

/* .trick :nth-child(2n) {
  transform-origin: center;
  transform: translate(10%, 10%) rotate(90deg) scale(1);
} */
/* .container:nth-child(8n) {
  margin-right: 0px;
} */

@media screen and (max-width: 625px) {
  .north {
    /* height: 480px; */
    padding: 10px 0px;
  }
  .south {
    /* height: 480px; */
    padding: 10px 0px;
  }
  .trick {
    /* height: 480px; */
    padding: 10px 0px;
  }
}
@media screen and (max-width: 370px) {
  .north {
    height: 100%;
  }
  .south {
    height: 100%;
  }
  .trick {
    height: 100%;
  }
}
</style>
