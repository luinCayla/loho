

<template>
    <div class="detail-choose">
        <div class="d-choose">
            <a >图文详情</a>
            <a >商品价格</a>
            <a >商品参数</a>
        </div>
        <div class="txtcontent" v-html="txtcontent"></div>

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
    mounted(){
    
        var str = this.txtcontent;       
        //http://image.loho88.com/images/ueditor/20161017/1476677265163940.jpg
        let imgurl = str.substr(0,12)+'http://image.loho88.com/'+str.substr(40,);

         console.log(str)
         //<p><img src="/images/blank.gif" vip-src="/images/ueditor/20171227/1514372026687401.jpg" title="1514372026687401.jpg" alt="02.jpg"/><img src="/images/blank.gif" vip-src="/images/ueditor/20171227/1514370858353825.jpg" style="" title="1514370858353825.jpg"/></p>
         //<p><img src="/images/blank.gif" vip-src="/images/ueditor/20171227/1514370858113426.jpg" style="" title="1514370858113426.jpg"/></p><p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370858456574.jpg" style="" title="1514370858456574.jpg"/></p>
         //<p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370859136501.jpg" style="" title="1514370859136501.jpg"/></p><p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370859499729.jpg" style="" title="1514370859499729.jpg"/></p>
         //<p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370859630793.jpg" style="" title="1514370859630793.jpg"/></p><p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370859864259.jpg" style="" title="1514370859864259.jpg"/></p>
         //<p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370859239474.jpg" style="" title="1514370859239474.jpg"/></p><p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370860996153.jpg" style="" title="1514370860996153.jpg"/></p>
         //<p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370860661787.jpg" style="" title="1514370860661787.jpg"/></p><p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370860642117.jpg" style="" title="1514370860642117.jpg"/></p>
         //<p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370860123013.jpg" style="" title="1514370860123013.jpg"/></p><p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370861458656.jpg" style="" title="1514370861458656.jpg"/></p>
         //<p><img src="/images/blank.gif" data-src="/images/ueditor/20171227/1514370861246523.jpg" style="" title="1514370861246523.jpg"/></p>
         //<p><br/></p>

    }

}
</script>

<style scoped>

</style>

