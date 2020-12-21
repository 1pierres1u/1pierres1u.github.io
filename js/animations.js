let animation = anime({
   targets:'div#home_content > img',
   rotateX:'360',
   easing:'linear',
   loop:true,
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

