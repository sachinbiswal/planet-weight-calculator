planets=[
    {name:"Earth", value:0, value1:1, add:"https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {name:"Mercury", value:1, value1:3.61 ,add:"https://cdn.britannica.com/05/110305-050-42CA686B/Mercury-Wide-Angle-Messenger-probe-hemisphere-image-Jan-14-2008.jpg"},
    {name:"Venus", value:2, value1:8.83,add:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/venus_atmosphere-one_one.jpg?VersionId=mujpjOnQ9mwaWpRpwrFAUmCcZHubnjem"},
    {name:"Mars", value:3, value1:3.75,add:"https://solarsystem.nasa.gov/internal_resources/3841"},
    {name:"Jupiter", value:4, value1:26,add:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Jupiter%27s_swirling_colourful_clouds.jpg"},
    {name:"Satern", value:5, value1:11.2,add:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/06/03164628/nasa-2W-QWAC0mzI-unsplash-2.jpg?tr=w-1200,h-900"},
    {name:'Uranus', value:6, value1:10.5,add:"https://www.techexplorist.com/wp-content/uploads/2020/04/uranus.jpg"},
    {name:'Naptune', value:7, value1:13.3,add:"https://images.immediate.co.uk/production/volatile/sites/25/2019/10/Neptune-full-disc-dd021b2.jpg"},
    {name:'Pluto', value:8, value1:0.61,add:"https://cdn.mos.cms.futurecdn.net/DoZSMXF87kCuzbymsuEFHo.jpg"},
    {name:'moon', value:9, value1:1.625, add:"https://i.natgeofe.com/k/082b37d7-d83c-4033-886e-b081fa4fa0f2/moon_4x3.jpg"},
    {name:'sun', value:10, value1:28.2, add:"https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"},
]
planets.map((e)=>{
      let ele=document.getElementById('planet');
      let opt=document.createElement('option');
      opt.setAttribute("value",e.value);
      opt.innerText=`${e.name}`
      ele.appendChild(opt);
    //   console.log(e.add);
})

let city="";
    document.getElementById('planet').addEventListener('change', (showCity)=>{
        city=showCity.target.value;
        let text=document.getElementById('text')
        
        // console.log(city);
    })



    function hello(){
        // console.log(text.innerText); 
        if(text.value!="")  {
            console.log(planets[Number(city)].add);
            let ans=planets[Number(city)].value1+Number(text.value)
            document.getElementsByClassName("card")[0].innerHTML=`<div class="innercard"><img src="${planets[Number(city)].add}" alt="" height="250px" width="250px">
            <div><p>Your Weight On planet : ${planets[Number(city)].name}</p>
            <h3> ${ans} kg</h3></div></div>`
        }
        else{
            document.getElementsByClassName("card")[0].innerHTML=`<div class="innercard">Enter Ur weight First</div>`
            
           
        }
    
}

