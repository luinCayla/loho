<template>
    <div class="on-box app-box"   >   
        
        <div id="map"></div>
              
     </div>  
  
</template> 

<script>

    import AMap from 'AMap';   //在页面中引入高德地图

    export default {
        name: 'nearby-map',
        data :function(){
            return {
               
            }
        },
        mounted(){
            this.init();     //加载地图和相关组件
        }, 
        methods:{
            init: function () {
                var geolocation ;
                let that = this;
               const map = new AMap.Map('map', {
                    center: [116.397428, 39.90923],
                    resizeEnable: true,
                    zoom: 11
                })

                AMap.plugin(['AMap.ToolBar', 'AMap.Scale','AMap.Geolocation'], function () {
                    map.addControl(new AMap.ToolBar())
                    map.addControl(new AMap.Scale())

                    geolocation = new AMap.Geolocation({
                        enableHighAccuracy: true,//是否使用高精度定位，默认:true
                        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        GeoLocationFirst: true,
                        maximumAge: 600000 //定位结果缓存0毫秒，默认：0
                    });
                    map.addControl(geolocation)
                    geolocation.getCurrentPosition()
                    AMap.event.addListener(geolocation, 'complete', function(data) {
                        console.log(data.position.getLat(),data.position.getLng())

                        //定位成功返回的经度
                       //定位成功返回的纬度
                    //    data.position.getLng();
                    //    data.position.getLat();
                    }); 
                    
                    //返回定位信息
                    AMap.event.addListener(geolocation, 'error', function(data) {
                        if (data.info == 'FAILED') {
                            alert('获取您当前位置失败！')
                        }
                    });                 
                });
               
               
            }
        }

    }
</script>
<style scoped>


</style>