/**
 * Created by Administrator on 2017/8/30.
 */
    //窗体加载完成之后的代码
var flat=0;
window.onload=function (){
    //获取所有的li元素
    var listli=document.getElementsByClassName("li_list");
    //让li里面第一个元素 默认样式
    listli[0].style.background="#3E89FC";
    listli[0].style.color="white";
    listli[0].style.height="50px";
    //获取多有的容器
    var block=document.getElementsByClassName("blockData");
    var mtop=document.getElementsByClassName("mtop");
    for(var i=0;i<listli.length;i++)
    {
        /*索引 index*/
        listli[i].index=i;
        listli[i].onclick=function (){
            /*this 在事件里面的this 指代的是当前事件的执行对象*/
            /*其他的边框为灰色*/
            for(var k=0;k<listli.length;k++)
            {
                listli[k].style.height="50px";
                listli[k].style.border="1px solid #3E89FC";
                listli[k].style.background="white";
                listli[k].style.color="#3E89FC";

            }
            /*点击的为红色*/
            this.style.height="50px";
            this.style.border="1px solid #3E89FC";
            this.style.background="#3E89FC";
            this.style.color="white";

            /*其他容器隐藏*/
            for(var k=0;k<block.length;k++)
            {
                block[k].style.display="none";
                mtop[k].style.display="none";
            }
            //当前点击的容器显示
            block[this.index].style.display="block";
            mtop[this.index].style.display="block";
        }
    }

}