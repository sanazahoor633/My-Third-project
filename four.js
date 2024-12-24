
var arr = [
    {dp: "https://images.unsplash.com/photo-1613005798967-632017e477c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:  "https://images.unsplash.com/photo-1613005798967-632017e477c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", story:  "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},

    {dp: "https://plus.unsplash.com/premium_photo-1683121766961-3356757f82db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", story:  "https://plus.unsplash.com/premium_photo-1683121766961-3356757f82db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"},

    {dp: "https://plus.unsplash.com/premium_photo-1681493917930-829e1b41add0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8", story:  "https://plus.unsplash.com/premium_photo-1681493917930-829e1b41add0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8"},

    {dp: "https://plus.unsplash.com/premium_photo-1681493954097-3a8190323231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8", story:  "https://plus.unsplash.com/premium_photo-1681493954097-3a8190323231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8"},
];



let storiyan = document.querySelector("#storiyan");
let fullScreen = document.querySelector("#full-screen");
let clutter = "";




arr.forEach(function(elem, idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}"/>
    </div>`;
    storiyan.innerHTML = clutter;
});
storiyan.addEventListener("click", function(dets){
fullScreen.style.display = "block";
fullScreen.style.backgroundImage =`url(${arr[dets.target.id].story})`;
setTimeout(function(){
    fullScreen.style.display = "none";
}, 2000)
})






















