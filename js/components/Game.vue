<template>
    <div class="game-panel">
       <!--  -->
       <Dashboard></Dashboard>
       <!-- <North></North>
       <West></West>
       <East></East> -->
       <South></South>
       <Status></Status>
    </div>
</template>

<script>
import Dashboard from "./dashboard/Dashboard";
import North from "./card/North";
import West from "./card/West";
import East from "./card/East";
import South from "./card/South";
import Status from "./footer/PlayStatus";

import { mapActions } from "vuex";
import { STATUS } from "../vuex/store/statusEnum";

export default {
  methods: {
    ...mapActions(["updateStatus", "reset"])
  },

  created() {
    this.updateStatus(STATUS.READY);
    this.reset();
  },

  components: { Dashboard, South, Status, North, West, East }
};
</script>

<style scoped>
.game-panel {
  width: 450px;
  height: 670px;

  border: 4px solid #bdbdbd;
  border-radius: 2px;
  background-color: #faf8ef;
  padding: 10px;
  display: flex;
  /* grid-template-columns: 1fr 20fr 1fr; */
  flex-direction: column;
}

@media screen and (max-width: 450px) {
  .game-panel {
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
}
</style>
