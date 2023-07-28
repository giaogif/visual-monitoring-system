<template>
    <div id="container"></div>
</template>

<script>
export default{
    name:"MapShow",
    data(){
        return{}
    },
    created(){

    },
    mounted(){
    //创建地图实例
    var map =new AMap.Map("container",{
        zoom:13,
        resizeEnable: true,
        center: [114.370531,30.624133]
    })
    var marker =new AMap.Marker({
        position:new AMap.LngLat(114.370531,30.624133),
        title:"武汉科技大学青山校区"
    })
    //将创建的点标记添加到已有的地图实例；
    map.add(marker);
    },
    methods:{}
}
    

</script>
<style scoped>
#container{
  padding:0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}
</style>