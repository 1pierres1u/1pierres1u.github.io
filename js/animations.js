let animation_1 = anime({
   targets:'div#home_content > img#bar_1',
   rotateY:'34',
   easing:'linear',
   loop:true,
});
let animation_2 = anime({
   targets:'div#home_content > img#bar_2',
   rotateY:'55',
   easing:'linear',
   loop:true,
});
let animation_3 = anime({
   targets:'div#home_content > img#bar_3',
   rotateY:'89',
   easing:'linear',
   loop:true,
});
let animation_4 = anime({
   targets:'div#home_content > img#bar_4',
   rotateY:'144',
   easing:'linear',
   loop:true,
});
let animation_5 = anime({
   targets:'div#home_content > img#bar_5',
   rotateY:'233',
   easing:'linear',
   loop:true,
});



/* Add a bar below a menu link corresponding 
 * to the page displayed.
 */
var bottomLine = "2px solid red" ;
if(document.title=="Home")
{
  $("ul li ").eq(0).css("padding","3px");
  $("ul li ").eq(0).css("border-bottom",bottomLine);
}
else if(document.title=="Projects")
{
  $("ul li ").eq(1).css("padding","3px");
  $("ul li ").eq(1).css("border-bottom",bottomLine);
}
else if(document.title=="About")
{
  $("ul li ").eq(2).css("padding","3px");
  $("ul li ").eq(2).css("border-bottom",bottomLine);
}
else if(document.title=="Contact")
{
  $("ul li ").eq(3).css("padding","3px");
  $("ul li ").eq(3).css("border-bottom",bottomLine);
}

