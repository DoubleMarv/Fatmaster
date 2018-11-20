<template id="page1">
  <v-ons-page>
    <p style="text-align: center">
      Welcome home.
    </p>
  </v-ons-page>
</template>

<script>
export default {
  name: 'Page1',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,h2,h3,h4,h5,h6,p{
  font-family: 'Boogaloo', cursive;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
