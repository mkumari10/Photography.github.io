$(document).ready(function(){

//open the page according the button we clicked
$('.direct a').on('click',function(e){
   e.preventDefault();
   $(".pics").hide();
   var toShow = $(this).attr('href');
   $(toShow).show();
})

//active link
$('.home').on('click',function(e){
  $(this).siblings().removeClass('active')
  $(this).addClass('active');
})	
	
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

/*background color gets change of Icons
$('.house').on('focus',function(e){
	var $el=$(e.target);
    $el.addClass('bkg');
}); */

//brower file opening function
$('.btnOpenFileDialogs').on("click",function(e){
	   e.preventDefault();
       $("#fileLoader").click();
});

//select the image from the file
$('input[type="file"]').change(function(e){
            var fileName = URL.createObjectURL(event.target.files[0]);
            if(fileName){
            let imgContainer = `<div class="col-lg-6">
             <img src="${fileName}" class="ph1 img-fluid">
             <div class="row m-0 fig" >
             <div class="heart"></div>
             <div class="comment"></div>
             <div class="three-dots">
             &#10247;
             </div>
             </div>
             </div>`
            $('#picspage').last().append(imgContainer); 
            }
        });	
	
//heart shape click event
$(document).on('click','.heart',function(e){
 //   $(this).hasClass('changed') ? $(this).removeClass('changed').addClass('beatout') : $(this).addClass('changed');  
    if($(this).hasClass('changed'))
    {
      $(this).removeClass('changed').addClass('beatout');    }
    else{
      $(this).addClass('changed');
    }
});

$(document).on('animationend','.heart',function(e){
   if($('.changed').attr('animation-name') == 'beat'){
     $(this).hasClass('changed').css('animation-name','none');
   }
   else if($('.beatout').attr('animation-name') == 'beatOut'){
     $(this).hasClass('beatout').css('animation-name','none');
   }
});


//Three dots functionality
$(document).on('click','.three-dots',function(e){
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
//comment box
$(document).on("click",'.comment',function(e){
	$(e.target).css('background-color','currentColor');
     let $Container = $(e.target).siblings('.combox');
   //  var ids = $(e.target).attr('id');
    if(!$Container.length){
    let box = `
    <div class="combox" id="comm${Math.floor(Math.random() * 100) + 1}">
     <form action="comments_store.php" method="POST" style="display: flex;">
        <input type="text" name="reviews" placeholder="Comments.." autocomplete="off" spellcheck="false" style="flex:1; outline:none;"/>
        <button type="submit" name="Post" class="postButton">Post</button>
     </form>
    </div>`;
    $(this).after(box);
   }
   else{
   	$(this).siblings('.combox').remove();
   	$(e.target).css('background-color','cadetblue');
   }
});
/*
    $('input[type="text"]').emojioneArea({
     pickerPosition:"bottom"
   });
*/
//functionality of post button
$(document).on('click','.postButton',function(e){
  e.preventDefault();
  var $ids = $(this).closest('div').attr('id');
 // console.log(`#${$ids}`);
  let value = $(`#${$ids}`).find('input[type="text"]').val();
 // console.log(value);
  //console.log($(`#${$ids}`).find('input[type="text"]'));
  let uname = "Anju";
  let box = `<div class="postdone">
              <span><img src="iconfinder_expand-color-web2-23_5049207.svg" class="profile_pic"></span>
              <h5 class="username">${uname}:</h5>
              ${value}
            </div>`;
      if($(e.target).parent('.combox').children().hasClass('postdone'))
      {
          $(e.target).parent('.combox').find('.postdone').last().append(box);
      }
      else
      {
          $(e.target).parent('form').parent('.combox').prepend(box);
      }
   $(`#${$ids}`).find('input[type="text"]').val("");
 //        console.log($(`#${$ids}`).parents('div').find('input[type="text"]').val());
});
});
