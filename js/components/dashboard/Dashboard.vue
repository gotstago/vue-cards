<template>
    <div class="status-bar">
       <Logo></Logo>
       <Round></Round>
       <Dealer></Dealer>
    </div>
</template>

<script>
import Logo from "./Logo";
import Round from "./Round";
import Dealer from "./Dealer";

export default {
  components: { Logo, Round, Dealer }
};
</script>

<style scoped>
.status-bar {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
