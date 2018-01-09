
<template>
  <div id="details-fa">
      <Head></Head>
      <Menue />
      <Banner />
      <Explain />
      
      <Choose />
      <Picture />
      <Footer />
      <!-- <Evaluate /> -->
      <!-- <Argument /> -->
  </div>
</template>


<script>
import axios from 'axios'

// import Argument from './argument';
// import Evaluate from './evaluate';
import Picture from './picture';
import Choose from './choose';
import Footer from './footer';
import Explain from './explain';
import Banner from './banner';
import Head from './header';
import Menue from '../public/Menue';
export default {
  name:'details-fa',
  data(){
      return{

      }
  },
  components:{
    Head,Menue,Banner,Explain,Choose,Picture,Footer
},
methods:{

}
}
</script>

<style>

</style>
