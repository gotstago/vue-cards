<template>
<div class="holy-grail">
  <!-- <header class="grail-header"> -->
    <!-- <span>Header</span> -->
    <!-- <Dashboard></Dashboard> -->
  <!-- </header> -->
  <main class="grail-main">
    <!-- <North></North> -->
    <Status></Status>
    <Table></Table>
    <!-- <span>Main</span>
    <h1>Holy Grail !</h1>
    <p class="caption">This demo is also available for tweaking wih the Visual Grid Editor included in the <a href="https://cssgrid.cc/#get-grid-builder"> CSS Grid Builder app</a>.</p> -->
  </main>
  <!-- <nav class="grail-nav">
    <span>Navigation</span>
  </nav>
  <aside class="grail-aside">
    <span>Aside</span>
  </aside> -->
  <!-- <footer class="grail-footer"> -->
    <!-- <span>Footer</span> -->
    <!-- <Status></Status>
  </footer> -->
</div>
</template>
<script>
import Dashboard from "./dashboard/Dashboard";
import North from "./card/North";
import Table from "./card/Table";
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

  components: { Dashboard, North, Table, Status }
};
</script>

<style>
.grail-header {
  grid-area: header;
  /* background-color: #dcd6fe; */
  /* padding: 20px; */
}

.grail-nav {
  grid-area: navigation;
  background-color: #c6c0ff;
  padding: 20px;
}

.grail-main {
  display: grid;
  grid-area: main;
  /* background-color: #f9f6d2; */
  /* padding: 10px 20px; */
}

.grail-aside {
  grid-area: asider;
  /* background-color: #d4ffd1; */
  padding: 20px;
}

.grail-footer {
  grid-area: footer;
  /* background-color: #ffd1d1; */
  padding: 20px;
}

.holy-grail {
  width: 100%;
  height: 640px;
  border: 4px solid #bdbdbd;
  border-radius: 2px;
  background-color: #faf8ef;
  display: grid;
  /* grid-template-rows: minmax(640px, 700px); */
  grid-template-areas:
      "main";
}

/* @media screen and (min-width: 360px) {
  .holy-grail {
    grid-template-areas:
      "footer footer footer footer footer"
      "main main main main main";
    grid-template-columns:
      5% minmax(10%, 150px) minmax(70%, 150px) minmax(10%, 150px)
      5%;
    grid-template-rows: minmax(100px, auto) 1fr minmax(60px, auto);
    grid-template-rows: 1fr minmax(60px, auto);
  }
  .grail-nav {
    display: none;
  }
  .grail-aside {
    display: none;
  }
}

@media screen and (min-width: 450px) {
  .holy-grail {
    grid-template-areas:      
      "footer footer footer footer footer"
      "main main main main main";
    grid-template-columns:
      5% minmax(10%, 150px) minmax(70%, 150px) minmax(10%, 150px)
      5%;
    grid-template-rows: minmax(100px, auto) 1fr minmax(60px, auto);
    grid-template-rows: 1fr minmax(60px, auto);
  }
  .grail-nav {
    display: none;
  }
  .grail-aside {
    display: none;
  }
} */

/* @media screen and (min-width: 1400px) {
  .holy-grail {
    grid-template-areas:
      "header header header header header"
      ". navigation main asider ."
      "footer footer footer footer footer";
    grid-template-columns: 1fr minmax(10%, 150px) 1000px minmax(10%, 150px) 1fr;
    grid-template-rows: minmax(100px, auto) 1fr minmax(60px, auto);
  }
  .grail-nav {
    display: block;
  }
  .grail-aside {
    display: block;
  }
} */

.caption {
  font-family: helvetica;
  font-size: 16px;
  margin-top: 12px;
}
</style>


