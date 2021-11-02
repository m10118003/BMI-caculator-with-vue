<template>
  <div class="about">
    <h1>This is a Test page</h1>
    <p class="nametag" @click="bmi()">My name is {{name}}</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Zelfy',
      pageName: 'about',
    }
  },
  methods: {
    bmi(){
      console.log('bmi is 18');
    }
  }
}
</script>

