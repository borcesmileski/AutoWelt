<template>
  <section class="container">

    <h1 class="py-3">Чекори за купување возило на лизинг:</h1>

    <div class="px-4">

      <ol>
        <li v-for="step in steps">
          <h6>{{step.headline}}</h6>
          <p>{{step.description}}</p>
          <strong>{{step.warrning}}</strong>
        </li>
      </ol>

    </div>

  </section>
</template>

<script>
export default {
  name: "Steps",
  data(){
    return{
      steps:[
        {
          headline:'ИЗБЕРЕТЕ ГО ВОЗИЛОТО',
          description:'Најпрво го избирате возилото кое сакате да го купите и добивате понуда за истото. ' +
              'Според изборот и понудата се подготвуваат потребните документи'
        },
        {
          headline:'НАШИТЕ ВРАБОТЕНИ ЌЕ ВИ ГИ ПОБАРААТ ПОТРЕБНИТЕ ПОДАТОЦИ',
          description:'Ги оставате сите потребни податоци на нашите вработени за да ја подготват ' +
              'целокупната документација која е потребна за аплицирање за лизингот. '
        },
        {
          headline:'ПРЕДОДОБРУВАЊЕ',
          description:'Според податоците се преминува на фазата за пред-одобрување која ги елиминира или ' +
              'намалува можностите да бидете одбиени. Затоа е потребно податоците кои ќе ги ' +
              'оставите да бидат точни и прецизни. Лизинг копманијата ја разгледаува ' +
              'вашата апликација и дололку се е во ред ќе Ви го одобрат лизингот ' +
              'и ќе ве известат за тоа. Дополнително ќе ви ги кажат ' +
              'понатамошните чекори.'
        },
        {
          headline:'ИЗБЕРЕТЕ ГО ВОЗИЛОТО',
          description:'Најпрво го избирате возилото кое сакате да го купите и добивате понуда за истото. ' +
              'Според изборот и понудата се подготвуваат потребните документи'
        },
        {
          headline:'КАПАР',
          description:'Доколку помине постапката на пред-одобрување потребно е да оставите капар за ' +
              'избраното возило за да Ви биде резервирано се до конечно одобрувањето од банката.'
        },
        {
          headline:'ПРЕЗЕМАЊЕ НА ВОЗИЛОТО',
          description:'Откако ќе се завршите целата процедура и лизингот ќе биде одобрен се договара ' +
              'датумот за превземање на возилото.',
          warrning:'НАПОМЕНА: Пред превземање на возилото потребно е да обезбедите КАСКО ПОЛИСА'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>