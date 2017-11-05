window.onload=ranse;

function ranse(){
document.getElementById("p_title").innerHTML=localStorage.title;
document.getElementById("p_mp4").src=localStorage.mp4;
document.getElementById("p_ogg").src=localStorage.ogg;
document.getElementById("p_cast").innerHTML=localStorage.cast;
document.getElementById("p_director").innerHTML=localStorage.director;
document.getElementById("p_plot").innerHTML=localStorage.plot;
}


document.getElementById("p_bigbuck").style.cursor="pointer";
document.getElementById("p_casablanca").style.cursor="pointer";
document.getElementById("p_cakemaking").style.cursor="pointer";
document.getElementById("p_nature").style.cursor="pointer";
document.getElementById("p_wildlife").style.cursor="pointer";
document.getElementById("p_wonders").style.cursor="pointer";