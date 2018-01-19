<template>
    <div id="mime " class="my-info">
        <Header title="个人资料" >
             <router-link to="/mime" class="icon-back" slot="left"> 
                <i class="iconfont icon-left" ></i>
            </router-link> 
        </Header>
        <div class="my-info-content">
            <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
            <mt-field label="手机" type="tel" v-model="phone"></mt-field>
            <div  @click="popupVisible2=true">
                <mt-field label="性别" v-model="sex" ></mt-field>
            </div>
            <mt-field label="QQ" placeholder="请输入QQ" v-model="qq"></mt-field>
            <div  @click="popupVisible1=true">
                <mt-field label="生日"  v-model="birthday"></mt-field>
            </div>
        </div>
           
        <mt-button type="danger" size="large" class="save-info">保存领积分</mt-button>

         <mt-popup v-model="popupVisible1" position="bottom" >
            <mt-button size="small" class="pull-left">取消</mt-button>
            <mt-button size="small" class="pull-right" type="primary" >确定</mt-button>
            <mt-picker :slots="slots1" ></mt-picker>        
        </mt-popup>

        <mt-popup v-model="popupVisible2" position="bottom" >
            <mt-button size="small" class="pull-left"  >取消</mt-button>
            <mt-button size="small" class="pull-right" type="primary" >确定</mt-button>
            <mt-picker :slots="slots2" ></mt-picker>        
        </mt-popup>
    </div>
</template>

<script>

    import Header from '../Header';


    export default {
        name: 'my-info',
        data () {
            return {
                username:'',
                phone:'13213113187',
                sex:'保密',
                qq:'',
                birthday:'2018-01-08',
                popupVisible1:false,
                popupVisible2:false,

                slots1: [
                    {
                    flex: 1,
                    values: ['2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2007','2006','2005','2004','2003','2002','2001','2000'],
                    className: 'slot1',
                    textAlign: 'center'
                    }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                    }, {
                    flex: 1,
                    values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    className: 'slot3',
                    textAlign: 'center'
                    },{
                    divider: true,
                    content: '-',
                    className: 'slot4'
                    },{
                    flex: 1,
                    values: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日' ],
                    className: 'slot5',
                    textAlign: 'center'
                    }
                ],
                slots2: [
                    {
                    flex: 1,
                    values: ['男','女'],
                    className: 'slot1',
                    textAlign: 'center'
                    }, 
                ],

            }
        },
        components:{
            Header
        },
        methods:{

        } 
    }


</script>

<style scoped>
    .pull-right{
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .pull-left{
        position: absolute;
        left: 10px;
        top: 10px;
    }
</style>