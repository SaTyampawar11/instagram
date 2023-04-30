var arr = [
    {name:"Your Story" ,dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" , story:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://th.bing.com/th/id/OIP.4fRHLvSeQMKidm3uhnbZmAHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7" , story:"https://images.unsplash.com/photo-1525299374597-911581e1bdef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://hindutrend.com/wp-content/uploads/2020/01/holi-image-boy-and-girl-hd.jpg" , story:"https://th.bing.com/th/id/OIP.aNZwNAsJgrNf2v8RTIkJPQHaJT?pid=ImgDet&w=207&h=259&c=7&dpr=1.3"},
    {dp:"https://th.bing.com/th/id/OIP.85jpr9uV8AvBDO3HP6llcgHaLl?pid=ImgDet&w=200&h=313&c=7&dpr=1.3" , story:"https://th.bing.com/th/id/OIP.DSf3nhi5PJaOF3Xlhq4XmwHaKO?w=182&h=252&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {dp:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , story:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , story:"https://images.unsplash.com/photo-1615212814093-f56085658024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://th.bing.com/th/id/OIP.9a4dfrqPlT62emlG1-PN-wHaLH?pid=ImgDet&w=204&h=306&c=7&dpr=1.3" , story:"https://images.unsplash.com/photo-1508606572321-901ea443707f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://th.bing.com/th/id/OIP.HTGqo1APqkLGWK6iu9hX3QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1." , story:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" , story:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {dp:"https://images.unsplash.com/photo-1621786037709-6c700b14ea75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" , story:"https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1613764051502-251fc50ad399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , story:"https://images.unsplash.com/photo-1563218819-7d963896383b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , story:"https://images.unsplash.com/photo-1551621955-fa07d4b1376b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
]

var clutter ="";

arr.forEach(function(elem,index){
    clutter = clutter + `
    <h4>Your Story</h4>
    <div class="story">
    <div class="inner">
        <img id = "${index}" src="${elem.dp}" alt="">
    </div>
</div>`
});

document.querySelector("#stories").innerHTML = clutter;

var percent = 0;

document.querySelector("#stories")

.addEventListener("click" , function(dets){
    document.querySelector("#fs img").setAttribute("src" , arr[dets.target.id].story)
    document.querySelector("#fs").style.display = "initial";

    if(percent<100){
        setInterval(function(){
            percent++
            document.querySelector("#progmaker").style.width = `${percent}%`
        },30);
    }else{
        percent=0;
    }
    

    setTimeout(function(){
        document.querySelector("#fs").style.display = "none";
    },3000);
});


document.querySelector("#posts img")

addEventListener("dblclick" , function(){
    document.querySelector("#like").style.color = "red";
})