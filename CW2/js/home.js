window.onload=slide;

var slidepic=new Array("../images/cakemaking.png","../images/wildlife.png")
function slide(){
	var num=Math.round(Math.random()*(slidepic.length-1));
	document.getElementById("h_spotlight").src=slidepic[num];
	ranselect();
}

Casablanca={
	title:"Casablanca",
	desc:"Casablanca is a 1942 American romantic drama film",
	director:"Michael Curtiz",
	cast:"Humphrey Bogart, Ingrid Bergmen",
	mp4:"http://courses.cs.cityu.edu.hk/cs2204/casablanca-s.mp4",
	ogg:"http://courses.cs.cityu.edu.hk/cs2204/casablanca-s.ogg",
	plot:"Casablanca is a 1942 American romantic drama film directed by Michael Curtiz and based on Murray Burnett and Joan Alison's un-produced stage play Everybody Comes to Rick's. Set during World War II, it focuses on a man torn between, in the words of one character, 'love and virtue'. "
};
BigBuck={
	title:"BigBuck",
	desc:"Adventure of the rabbit Big Buck",
	director:"Michael Curtiz",
	cast:"Humphrey Bogart, Ingrid Bergmen",
	mp4:"http://courses.cs.cityu.edu.hk/cs2204/bigbuck-s.mp4",
	ogg:"http://courses.cs.cityu.edu.hk/cs2204/bigbuck-s.ogg",
	plot:"Once upon a time, the plot follows a day of the life of Big Buck Bunny when he meets three bullying rodents, Frank (the leader of the rodents), Rinky and Gimera. The rodents amuse themselves by harassing helpless creatures of the forest by throwing fruits, nuts and rocks at them."
};
Wonders={
	title:"Wonders",
	desc:"See the wonders of mother nature",
	director:"Adam Smith",
	cast:"Voluntees from Nature Association",
	mp4:"http://courses.cs.cityu.edu.hk/cs2204/wonders.mp4",
	ogg:"http://courses.cs.cityu.edu.hk/cs2204/wonders.ogg",
	plot:"Seven wonders of the world. What are they? They are ....."
};
Nature={
	title:"Nature",
	desc:"have a look in our nature",
	director:"Michael Curtiz",
	cast:"Humphrey Bogart, Ingrid Bergmen",
	mp4:"http://courses.cs.cityu.edu.hk/cs2204/nature.mp4",
	ogg:"http://courses.cs.cityu.edu.hk/cs2204/nature.ogg",
	plot:"Seven wonders of the world. What are they? They are ....."
};
Wildlife={
	title:"Wildlife",
	desc:"enjoy the spectacular views of running wild lives",
	director:"Michael Curtiz",
	cast:"Humphrey Bogart, Ingrid Bergmen",
	mp4:"http://courses.cs.cityu.edu.hk/cs2204/wildlife.mp4",
	ogg:"http://courses.cs.cityu.edu.hk/cs2204/wildlife.ogg",
	plot:"Seven wonders of the world. What are they? They are ....."
};

var must, ran;
function ranselect(){
	ran=Math.floor(Math.random()*5);
	if(ran==1) {must=Casablanca;}
	else if(ran==2) {must=BigBuck;}
	else if(ran==3) {must=Wonders;}
	else if(ran==4) {must=Nature;}
	else{must=Wildlife;}

	var h_1=document.getElementById("h_1");
	var h_2=document.getElementById("h_2");
	var h_3=document.getElementById("h_3");
	var h_4=document.getElementById("h_4");
	var h_5=document.getElementById("h_5");
	h_1.innerHTML="<b>Title: </b>"+must.title;
	h_2.innerHTML="<b>Desc: </b>"+must.desc;
	h_3.innerHTML="<b>Director: </b>"+must.director;
	h_4.innerHTML="<b>Cast: </b>"+must.cast;
	h_5.innerHTML="<b>Plot: </b>"+must.plot;
	
	localStorage.title=must.title;
	localStorage.desc=must.desc;
	localStorage.director=must.director;
	localStorage.cast=must.cast;
	localStorage.plot=must.plot;
	localStorage.mp4=must.mp4;
	localStorage.ogg=must.ogg;
}

document.getElementById("tbody").style.cursor="pointer";

document.getElementById("bigbuck").style.cursor="pointer";
document.getElementById("casablanca").style.cursor="pointer";
document.getElementById("cakemaking").style.cursor="pointer";
document.getElementById("nature").style.cursor="pointer";
document.getElementById("wildlife").style.cursor="pointer";
document.getElementById("wonders").style.cursor="pointer";