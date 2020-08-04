const navbar=document.querySelector('.nav_bar');
const navbarHight=navbar.getBoundingClientRect().height;
const home=document.querySelector('.home');
const homeHight=home.getBoundingClientRect().height;
const arrow=document.querySelector('.arrow');
const homebutton=document.querySelector('.home_button');
const imgbox=document.querySelector('.img_box');
const imgboxHight=imgbox.getBoundingClientRect().height;
const aboutimg=document.querySelector('.about_img');
const left=document.querySelector('.left');
const up=document.querySelector('.up');
const right=document.querySelector('.right');

document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHight / 2){
        arrow.style.visibility='visible';
    }else 
    {
        arrow.style.visibility='hidden';
    }
});

document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

document.addEventListener('scroll',()=>{
    if(window.scrollY>imgboxHight){
        left.classList.add('move-box');
        up.classList.add('move-box');
        right.classList.add('move-box');
    } else{
        left.classList.remove('move-box');
        up.classList.remove('move-box');
        right.classList.remove('move-box');
    }

  
});


arrow.addEventListener('click',()=>{
    scrollIntoView('.home')
});

function scrollIntoView(selector){
    const scroll=document.querySelector(selector);
    scroll.scrollIntoView({behavior:'smooth'});
}

homebutton.addEventListener('click',()=>{
    scrollIntoView('.about');
});


// img slide

const slides=document.querySelector('.slider').children;
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
let index=0;


prev.addEventListener('click',()=>{
    prevslide();
    resetTimer();
});

next.addEventListener('click',()=>{
    nextslide();
    resetTimer();
});


function prevslide(){
    if(index==0){
        index=slides.length-1;
    } else{
        index--;
    }
    changeSlide();
};

function nextslide(){
    if(index==slides.length-1){
        index=0;
    } else{
        index++;
    }
    changeSlide();
};

function changeSlide(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
};

function autoplay(){
    nextslide();
}

function resetTimer(){
    clearInterval(timer);
    let timer=setInterval(autoplay,5000);

}
let timer=setInterval(autoplay,5000);

// about animation Text

const abouttitle=document.querySelector('.about_title');
const abouttitleHeight=abouttitle.getBoundingClientRect().height;
const aboutdescription=document.querySelector('.about_description');

window.addEventListener('scroll',()=>{
    if(window.scrollY>abouttitleHeight){
        abouttitle.classList.add('effect')
        aboutdescription.classList.add('effect')
    } else{
        abouttitle.classList.remove('effect')
        aboutdescription.classList.remove('effect')
    }
});

const Gallerytitle=document.querySelector('.Gallery_title');
const GallerytitleHight=Gallerytitle.getBoundingClientRect().height;
const Gallerydesciption=document.querySelector('.Gallery_desciption');
const effectleft=document.querySelector('.effect_left');
const effectright=document.querySelector('.effect_right');
const effectheight=1100;
window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    console.log(GallerytitleHight);
    if(window.scrollY>effectheight){
        Gallerytitle.classList.add('effect')
        Gallerydesciption.classList.add('effect')
    } else{
        Gallerytitle.classList.remove('effect')
        Gallerydesciption.classList.remove('effect')
    }
});


// total animation

const totaltitle=document.querySelector('.total_title');
const totalgraph=document.querySelector('.total_graph');
const totalHeight=2600;
const totalGage=document.querySelector('.total_Gage');
const one=document.querySelector('.one');
const two=document.querySelector('.two');
const three=document.querySelector('.three');
const four=document.querySelector('.four');
window.addEventListener('scroll',()=>{
    if(window.scrollY >totalHeight){
        totaltitle.classList.add('effect');
        totalgraph.classList.add('effect');
        one.classList.add('effect');
        two.classList.add('effect');
        three.classList.add('effect');
        four.classList.add('effect');
    } else {
        totaltitle.classList.remove('effect');
        totalgraph.classList.remove('effect');
        one.classList.remove('effect');
        two.classList.remove('effect');
        three.classList.remove('effect');
        four.classList.remove('effect');
    }
});

const navlistBt=document.querySelector('.nav_list_Bt');
const navlist=document.querySelector('.nav_list');
navlistBt.addEventListener('click',()=>{
    navlist.classList.toggle('add');
});