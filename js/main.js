
document.addEventListener("readystatechange",function() {
setTimeout(()=>{
    var mapEl = document.querySelector(".map")
    mapEl.childNodes[mapEl.childNodes.length - 1].style.display = "none"
},1000)
})
let map;
function initMap() {
   map= new google.maps.Map(document.querySelector(".map"), {
      mapId: "7555eea0ae02bcd3",
      center: { lat:28.373070, lng:-81.556938 },
      zoom: 12,
    });
    const markers = [
       
[ 28.38469944581196 ,-81.62354261425781 , "../icons/1.png" , 38 ,31,"Yoshi's Island (World 1)"],
 [ 28.400864790516255 ,-81.99114515332031  , "../icons/2.png" , 38 ,31,"Donut Plains (World 2)"],
 [ 28.327899417641465 ,-81.59127027539063  , "../icons/3.png" , 38 ,31,"Vanilla Dome (World 3)"],
 [ 28.386209669887855 ,-81.43780500439453  , "../icons/4.png" , 38 ,31,"Twin Bridges (World 4)"],
 [28.330048403449375, -81.35910220465719 , "../icons/5.png" , 38 ,31,"Forest of Illusion (World 5)"],
 
 [ 28.410068354872553 ,-81.7272260859375 , "../icons/6.png" , 38 ,31,  "Chocolate Island (World 6)"],
 [ 28.390740213047106 ,-81.79211408642578  , "../icons/7.png" , 38 ,31,"Valley of Bowser (World 7)"],
 [ 28.367481371190024 ,-81.54629499462891  , "../icons/8.png" , 38 ,31,"Star World (World 8)"],
 [ 28.32306396977608 ,-81.59230024365235  , "../icons/9.png" , 38 ,31,"Special Zone (World 9)"],
 [ 28.35902234607223 ,-81.33961469677735  , "../icons/10.png" , 38 ,31,"The Trial Galaxies"],
 [ 28.397686669834663 ,-81.37120039013672  , "../icons/11.png" , 38 ,31,"Center of the Universe"]

    ];

    for (let i = 0; i < markers.length; i++) {
      const mark =   new google.maps.Marker({
        position: { lat: markers[i][0], lng: markers[i][1] },
        map,
        title:markers[i][5],
        animation: google.maps.Animation.DROP,

        icon:{
            url: markers[i][2],
            scaledSize: new google.maps.Size(markers[i][3],markers[i][4])
        }
      });
      const infoWindow = new google.maps.InfoWindow({
        content: markers[i][5],
      })
      mark.addListener("click",function(e){
        infoWindow.open({
            anchor: mark,
            map,
            shouldFocus: false,
          });
          map.setCenter(e.latLng);

      })
    
    }

  
     
  }

  window.initMap = initMap;
  