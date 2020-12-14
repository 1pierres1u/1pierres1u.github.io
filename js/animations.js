let animation = anime({
   targets:'div#animated_image',
   translateX:100,
   borderRadius:50,
   duration:2000,
   easing:'linear',
   direction: 'alternate'
});

if(document.title=="Home")
{
  $("ul a").eq(0).css("color","red");
}
else if(document.title=="Projects")
{
  $("ul a").eq(1).css("color", "red");
}
else if(document.title=="About")
{
 $("ul a").eq(2).css("color","red");
}
else if(document.title=="Contact")
{
  $("ul a").eq(3).css("color","red");
}

