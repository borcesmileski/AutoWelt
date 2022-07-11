<template>
  <main>
    <heading/>
    <teps/>
    <documentation/>
    <legalEntites/>
  </main>
</template>
<script>

import Heading from "../components/Heading";
import Steps from "../components/Steps";
import Documentation from "../components/documentation";
import LegalEntites from "../components/LegalEntites";

export default {
  name: "autoWeltPage",
  components:{Heading, Steps, Documentation, LegalEntites,
  }
}
</script>

<style scoped>

</style>