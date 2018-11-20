<template id="page2">
  <v-ons-page>
    <!-- ////////////////// -->
<v-ons-row style="width: 100%;">
<v-ons-col>
 <p style="text-align: center">
     Your Calories: {{allcals}}
    </p>
     <p style="text-align: center">
     Your Limit: {{mylimit}}
    </p>
     <p style="text-align: center">
     Remaining: {{difference}}
    </p>
</v-ons-col>
</v-ons-row>
<!-- ////////////////// -->
<v-ons-row style="width: 100%;">
<v-ons-col width="50%" v-for="x in allfood.foods">
  <div class="foodcol">
<v-ons-button modifier="quiet" style="margin: 6px 0" @click="pushCals(x.calories)">{{x.namo}}<br>{{x.calories}}</v-ons-button>
</div>
</v-ons-col>
</v-ons-row>

  </v-ons-page>
</template>


<script>
import foods from '../assets/data/food.json'


export default {
  name: 'Page2',
  props: {
    // msg: String
  },
  data(){
    return{
      allcals: 0,
      allfood: foods,
      mylimit: 2000,
      difference: 0
    }
  },
      methods: {
    pushCals(calzone) {
      var newcalnum = parseInt(calzone);
      var allcalsnum = parseInt(this.allcals);
     this.allcals=(allcalsnum+newcalnum);
     this.figureCals();
    }
  },
computed: {
  figureCals(){
    var getcals = parseInt(this.allcals);
    var limitcals = parseInt(this.mylimit);
    var caldiff = (limitcals-getcals);
    return this.difference = caldiff;
  }
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


.foodcol{
  border-radius: 7px;
  border: 1px solid #33bec3;
  box-shadow: 1px solid #e5e5e5;
  padding: .5em;
  color: #fff;
  text-align: center;
  border-radius: 10px;
}
.foodcol:hover{
  background: #33bec3;
  color: #fff;
}
</style>
