

<template>
    <div class="detail-choose">
        <div class="d-choose">
            <a >图文详情</a>
            <a >商品价格</a>
            <a >商品参数</a>
        </div>
        <div class="txtcontent" v-html="text"></div>

        <div style="text-align:center;height:.42rem;line-height:.42rem;">------看了又看------</div>
        <div style="text-align:center;height:.42rem;line-height:.42rem;color:gray;margin-bottom:.6rem">------已经到底了------</div>
    
    </div>
</template>

<script>
export default {
   name:'d-choose',
   props:['txtcontent'],
    data(){
        return{

        }
    },
    methods:{
      
    },
    computed:{
        text(){
        //http://image.loho88.com/images/ueditor/20161017/1476677265163940.jpg
            let txtcontent = this.txtcontent;
            txtcontent = txtcontent.replace(/src="\/images\/blank.gif"/g,"");

            txtcontent = txtcontent.replace(/vip-src="\/images\//g,'src="http://image.loho88.com/images/');
            txtcontent = txtcontent.replace(/data-src="\/images\//g,'src="http://image.loho88.com/images/');

            return txtcontent
        }
    }


}
</script>

<style scoped>

</style>

