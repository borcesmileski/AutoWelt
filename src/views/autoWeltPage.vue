<template>
  <main>
    <Heading/>
    <Steps/>
    <Documentation/>
    <LegalEntites/>
  </main>
</template>

<script>
import Heading from "../components/Heading";
import Steps from "../components/Steps";
import Documentation from "../components/Documentation";
import LegalEntites from "../components/LegalEntites";

export default {
  name: "autoWeltPage",
  components:{
    Heading:Heading,
    Steps:Steps,
    Documentation:Documentation,
    LegalEntites:LegalEntites,
  }
}
</script>

<style scoped>

</style>