anime({
   targets:'div.bar',
   rotateY:[{value:'94',
   easing:'linear',
   },
   {value:'0',
    easing:'linear',
   },
 ],
 delay:function(el,i,l){return i*90},
 loop:true
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

