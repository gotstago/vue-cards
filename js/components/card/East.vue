<template>
    <div class="east">
        <Card v-for="(card, index) of eastCards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
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
    ...mapGetters(["leftMatched", "cards", "status", "eastCards"])
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
.east {
  margin-top: 10px;
  width: 100%;
  background-color: #fff;
  height: 430px;
  border-radius: 4px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: space-around;
}

.container:nth-child(8n) {
  margin-right: 0px;
}

@media screen and (max-width: 450px) {
  .east {
    height: 480px;
    padding: 10px 0px;
  }
}
@media screen and (max-width: 370px) {
  .east {
    height: 450px;
  }
}
</style>
