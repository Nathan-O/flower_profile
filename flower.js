
/* call hydra.render() to complete the magic */



function Flower(name, color, petals, smellsPretty, origin){
   /* Properties */
   // Passed-in values
   this.name = name;
   this.color = color;
   this.petals = petals;
   this.smellsPretty = smellsPretty;
   this.origin = origin;
   
   // Default values
   this.isEdible = false;
   this.wiltFactor = 100; //0 is dead, 100 is fresh
   this.leafCount = 2;
   this.urlPic = "http://i.imgur.com/p0TMNjT.jpg" //image url
   this.comments = "Wow!! This is one hell of a flower. Don't forget it."

    /* Methods */
   this.sniff = function(){
       console.log("Sniff Sniff Sniff!");
   };
   // Demonstrates use of arguments with methods
   this.hasGoodSmell = function(answer) {
       if (answer) {
           return 'This flower smells amazing!';
       } else {
           return 'What a noxious weed!';
       }
   };
   // Demonstrates use of local object variables
   this.describe = function(answer) {
       alert("This flower is " + this.color + ".");
     }
   /// Demonstrates object to object interaction
   this.compare =  function(otherFlower) {
       return("My " + this.color + " flower is much prettier than your " +
         otherFlower.color + " flower :P");
   };
   // render html to website via Underscore
   this.render = function() {
      //$('body').append("<p>My pretty flower is " + this.color + " and has " + this.petals + " pristine petals.");
      var flowerTemplate = _.template($('#flower-template').html());
      var flowerHTML = flowerTemplate(this);
      $('#prettyFlowerTime-placeholder').append(flowerHTML);
   };
   // displays message to console
   this.giveFlower= function(){
       console.log("Here's a flower")
    };
}


/* creates our flower */
var hydra = new Flower("Hydrangea", "Blue-green", 60, true, "SE Asia");









/*
function Bee(flower1, flower2){
   this.flower1 = flower1;
   this.flower2 = flower2;

   this.crossPollinate = function() {
       var colorBlend = flower1.color + "-" + flower2.color;
       var petalAvg = Math.round((flower1.petals + flower2.petals) / 2);
       var leafAvg = Math.round((flower1.leafCount + flower2.leafCount) / 2);
       var smellTrait = flower1.smellsPretty && flower2.smellsPretty;
       var flower3 = new Flower(colorBlend, petalAvg, smellTrait, "Class Room 6");
       flower3.leafCount = leafAvg;

       return flower3;
});
*/







/*
/////////////////////////////////////////////////////////////////

////// notes

need:
  flower name
  petal count
  leaf count
  origin
  edible
  smells pretty

  comments

  <img src="http://i.imgur.com/p0TMNjT.jpg">

  Hydrangea

  origin: SE Asian;

  not edible


////////////////////////////////////////////////////////////////
*/













