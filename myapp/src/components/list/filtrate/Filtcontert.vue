<template>
    <div  class="filt-contert ">
        <ul class="filt-box ">
            <li v-for="filt in filtrates" :key="filt.id" >
                <div class="filt-title">
                    <p>{{filt.title}}</p> 
                    <i class="iconfont icon-shang"></i>
                </div>
                <div class="filt-content">
                    <label v-for="f in filt.content" >{{f}}</label>
                </div>
            </li>
        
        </ul>        
    </div>

</template>

<script>
    import axios from 'axios'

    
    export default {
        name: 'filt-contert',
        data () {
            return {
                filtrates:[                   
                    {
                        id:1,
                        title:'性别',
                        content:['男','中性','女'],      
                    },
                    {
                        id:2,
                        title:'品牌',
                        content:['LOHO','VINGTANS','Essilor/依视路','ZEISS/蔡司'],      
                    },
                    {
                        id:3,
                        title:'边框',
                        content:['全框','半框','无框'],      
                    },
                    {
                        id:4,
                        title:'产品系列',
                        content:['Mori','Divided','Black','Basic','Retro','Horm','Carbon ribre','AJpha'],      
                    },
                    {
                        id:5,
                        title:'镜框大小',
                        content:['小框','适中','大框'],      
                    },
                    {
                        id:6,
                        title:'镜框形状',
                        content:['椭圆形','圆形','方形'],      
                    },
                    {
                        id:7,
                        title:'镜框材质',
                        content:['板材','金属','塑钢','碳纤维','钛'],      
                    },
                    {
                        id:8,
                        title:'镜框材质',
                        content:['板材','金属','塑钢','碳纤维','钛'],      
                    },
                    {
                        id:9,
                        title:'价格',
                        content:['1-200元','201-400元','401-700元','701-1100元','1100元以上'],      
                    },
                ]
            }
        
        
        },       
        methods:{
           
        }    
    }


</script>

<style scoped>

</style>