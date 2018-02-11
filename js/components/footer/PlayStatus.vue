<template>
    <div class="status-footer">
        <span v-if="status === READY">Ready</span>
        <span v-if="status === PLAYING">Playing</span>
        <span v-if="status === BIDDING">Bidding</span>
        <a v-if="status === PASS" v-on:click.prevent.stop="reset" href>Play again</a>
        <a v-if="status === READY" v-on:click.prevent.stop="deal" href>Deal</a>
        <a v-if="status === BIDDING" v-on:click.prevent.stop="dealKitty" href>Deal Kitty</a>
        <!-- <span class="elapsed">{{ elapsedMs }} s</span>
        <span>{{ players }}</span> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { STATUS } from "../../vuex/store/statusEnum";

export default {
  data() {
    return STATUS;
  },

  computed: {
    ...mapGetters(["status", "elapsedMs", "players"])
  },

  methods: {
    ...mapActions([
      "reset",
      "dealBiddingHand",
      "dealKittyHand",
      "updateStatus"
    ]),
    deal() {
      // return;
      // if (this.option.flipped) {
      //   return;
      // }
      this.updateStatus(STATUS.BIDDING);
      this.dealBiddingHand();
      // this.$emit("flipped", this.option);
    },
    dealKitty() {
      // return;
      // if (this.option.flipped) {
      //   return;
      // }
      this.updateStatus(STATUS.PLAYING);
      this.dealKittyHand();
      // this.$emit("flipped", this.option);
    }
  }
};
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
a {
  text-decoration: none;
}
.elapsed {
  position: absolute;
  right: 10px;
  font-size: 15px;
  font-weight: normal;
}
</style>
