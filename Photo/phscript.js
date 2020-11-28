$(document).ready(function(){

//hpage = $('.pics > div').clone(true);	
//open a setting tab
$('#set').on('click',function(){
       alert("setting");
});

//post 
$('#post').on('click',function(){
      alert("profile");  
});

//invitation card
$('.invitation').on('click',function(e){
      let inv = '<h1>INVITATION CARD</h1>';
      $('.pics').replaceWith(inv);
});

//log out
$('.logout').on('click',function(){
	   if(confirm('Are you sure you want to logout?')){
	   	return true;
	   }    
	   return false;
});

//Mobile tap function
$('.house').on('tap',function(){
    alter('Tapped');	
});

//background color gets change of Icons
$('.house').on('focus',function(e){
	var $el=$(e.target);
    $el.addClass('bkg');
});

/*add a div in middle div
$('.IC').on('click',function(e){
	if(!($('.middle > div').length))
	{ 
	  $('.middle').append('<div class="col invic"></div>');	
	}   
});
*/
//Append the homepage in middle column
$('.homepage').on('click',function(e){
   $('.pics > div').replaceWith(hpage);
});


//heart shape click event
$('.heart').on('click',function(e){
 //   $(this).hasClass('changed') ? $(this).removeClass('changed').addClass('beatout') : $(this).addClass('changed');  
    if($(this).hasClass('changed'))
    {
    	$(this).removeClass('changed').addClass('beatout');    }
    else{
    	$(this).addClass('changed');
    }
});

$('.heart').on('animationend',function(e){
   if($('.changed').attr('animation-name') == 'beat'){
   	$(this).hasClass('changed').css('animation-name','none');
   }
   else if($('.beatout').attr('animation-name') == 'beatOut'){
   	$(this).hasClass('beatout').css('animation-name','none');
   }
});

//brower file opening function
$('#btnOpenFileDialog').on("click",function(e){
	   e.preventDefault();
       $("#fileLoader").click();
       /*
       if (e.files && e.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL(input.files[0]);
        }*/
});

//brower file opening function
$('#btnOpenFileDialogs').on("click",function(e){
	   e.preventDefault();
       $("#fileLoaders").click();
});


//Three dots functionality
$('.three-dots').on('click',function(e){
  // $(this).css('background-color','gainsboro');
   var $delContainer = $(this).siblings('.dele');
   if(!$delContainer.length){
   let del = `<div class="dele">Delete</div>`;
   $(this).before(del);
   }
   else{
   	$(this).siblings('.dele').remove();
   }
});

//delete the pic
$(document).on('click','.dele',function(e){
  if(confirm("Want to delete?")){
  	$(e.target).closest('div[class="col-lg-6"]').remove();  
	   	return true;
	   }    
	   return false;
 
});
});
