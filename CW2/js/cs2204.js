function checklogin(user, pw) {
  if (Math.floor(Math.random()*3) == 0) check=0;
  else check=1;
}
function getVideo() {
    var from, to, selected=new Array();
    var videoDetail=
        [
         {
            "title":"Casablanca",
            "poster":"../images/casablanca.png",
            "video":["casablanca-s.mp4"],
            "desc":"Casablanca is a 1942 American romantic drama film",
            "director":"Michael Curtiz",
            "cast":["Humphrey Bogart", "Ingrid Bergmen"],
            "plot":"Casablanca is a 1942 American romantic drama film directed by Michael Curtiz and based on Murray Burnett and Joan Alison's un-produced stage play Everybody Comes to Rick's. Set during World War II, it focuses on a man torn between, in the words of one character, 'love and virtue'. He must choose between his love for a woman and helping her Czech Resistance leader husband escape the Vichy-controlled Moroccan city of Casablanca to continue his fight against the Nazis."
         },
         {
           "title":"BigBuck",
           "poster":"../images/bigbuck.png",
           "video":["BigBuck.mp4"],
           "desc":"Adventure of the rabbit Big Buck",
           "director":"Lion King",
           "cast":["Fox", "Rabbit", "Wood Pecker"],
           "plot":"Once upon a time, the plot follows a day of the life of Big Buck Bunny when he meets three bullying rodents, Frank (the leader of the rodents), Rinky and Gimera. The rodents amuse themselves by harassing helpless creatures of the forest by throwing fruits, nuts and rocks at them."
         },
         {
           "title":"Wonders",
           "poster":"../images/wonders.png",
           "video":["wonders.mp4"],
           "desc":"See the wonders of mother nature",
           "director":"Adam Smith",
           "cast":["Voluntees from Nature Association"],
           "plot":"Seven wonders of the world. What are they? They are ....."
         },
         {
           "title":"Nature",
           "poster":"../images/nature.png",
           "video":["nature.mp4"],
           "desc":"Casablanca is a 1942 American romantic drama film",
           "director":"Michael Curtiz",
           "cast":["Humphrey Bogart", "Ingrid Bergmen"],
           "plot":"Seven wonders of the world. What are they? They are ....."
         },
         {
           "title":"Wildlife",
           "poster":"../images/wildlife.png",
           "video":["wildlife.mp4","wildlife.ogg"],
           "desc":"Casablanca is a 1942 American romantic drama film",
           "director":"Michael Curtiz",
           "cast":["Humphrey Bogart", "Ingrid Bergmen"],
           "plot":"Seven wonders of the world. What are they? They are ....."
         }
        ];
        if (arguments[0] == "all") {
          from=0;
          to=videoDetail.length;
        }
        else {
          from=Math.floor(Math.random()*5);
          to=Math.floor(Math.random()*5+1);
        }
        for (i=0; i<to; i++) {
            selected[i]=videoDetail[from];
            from=(from+1)%5;
        }
        return selected;
}