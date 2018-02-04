<template>
    <div class="west">
        <Card v-for="(card, index) of westCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
    </div>
</template>

<script>
import Card from "./Card";

import { mapActions, mapGetters } from "vuex";

import { STATUS } from "../../vuex/store/statusEnum";

export default {
  data() {
    return {
      lastCard: null
    };
  },

  computed: {
    ...mapGetters(["leftMatched", "cards", "status", "westCards"])
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

  components: { Card }
};
</script>

<style scoped>
.west {
  margin-top: 10px;
  margin-left: 70px;
  width: 92%;
  background-color: #fff;
  height: 430px;
  border-radius: 4px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;
}

.container:nth-child(3n) {
  margin-right: 0px;
}

@media screen and (max-width: 450px) {
  .west {
    height: 480px;
    padding: 10px 0px;
  }
}
@media screen and (max-width: 370px) {
  .west {
    height: 450px;
  }
}
</style>
