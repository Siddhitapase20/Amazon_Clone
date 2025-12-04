let slidebtnleft=document.getElementById("slide-btn-left");
let slidebtnright=document.getElementById("slide-btn-right");
let imageitem=document.querySelectorAll(".image-item");

let start=0;
let end = (imageitem.length-1)*100;


slidebtnleft.addEventListener("click",()=>{
    if(start<0){
        start=start+100;
    }
    imageitem.forEach(Element=>{
        Element.style.transform=`translateX(${start}%)`;
    })
})
slidebtnright.addEventListener("click",()=>{
    if(start > -end) {
    start = start - 100;
    }
    imageitem.forEach(Element=>{
        Element.style.transform=`translateX(${start}%)`;
    })
})

// sidebar Navigation
const sidebar=document.getElementById("sidebar-navigation");
const sidebaropenbtn=document.getElementById("sidebar-open-btn");
const sidebarclosebtn=document.getElementById("sidebar-close");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function toggleSidebar() {
    sidebar.classList.toggle("sidebar-show");
    sidebarOverlay.classList.toggle("sidebar-show");
    
    if (sidebar.classList.contains("sidebar-show")) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

sidebaropenbtn.addEventListener("click", toggleSidebar);
sidebarclosebtn.addEventListener("click", toggleSidebar);
sidebarOverlay.addEventListener("click", toggleSidebar);
