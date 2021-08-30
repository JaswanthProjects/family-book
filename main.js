var images = ["th (2).jpg","th (3).jpg","th (4).jpg", "th.jpg","th (1).jpg"];
var names = ["Mom", "Dad", "Me","Sister", "Family"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}