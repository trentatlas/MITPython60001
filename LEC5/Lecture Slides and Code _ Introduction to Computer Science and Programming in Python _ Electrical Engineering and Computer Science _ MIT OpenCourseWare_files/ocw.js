// MIT OpenCourseWare 

$(document).ready(function() {
    //enableSurvey();	
	//googleAdCampaign();
	populateYoutubePlaceholders();
    showRandomSidebarQuote();
	shuffled_sponsors_markup();
	setCopyrightText();
	//showRandomIndividualSupporterQuote();	
	highlightMenu();
	//To enable/disable facebook quote functionality
	enableFacebookQuotes();
	
	$('#closeCitation, #citeOverlay').die("click").live('click', function() {		//This will close close cite popup
		unloadCitePopupBox();
	});	
				
	$('#showCitation').die("click").live('click', function() {		
		if(!$('#citeOverlay').length){ 
			$('<div></div>').prependTo('body').attr('id', 'citeOverlay'); //This will create overlay div for Pop up and disable background
		}
		loadCitePopupBox();
	});
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
	if(isMac){
	addClassforMac(isMac);	
	}
	
	threePlayScriptTags = $( "script:contains('createThreePlayParams')" );
	if ((threePlayScriptTags.length == Object.keys(threePlayParams).length) && (Object.keys(threePlayParams).length>0) ){
		threePlayTranscriptAsyncFunct(threePlayParams);	
		var e = document.createElement('script');
		e.async = true;
		e.src = "//p3.3playmedia.com/p3.js" 
		document.getElementById(target).appendChild(e);	
	}
});

function highlightMenu(){
	var url = '';
	$( "link" ).each(function( index ) {
		if ( $( this ).attr("rel") == "canonical" ) {
			url = $( this ).attr("href");
		}
	  console.log( index + ": " + $( this ).text() );
	});

	if ( url != '') {
		var fields = url.split('/');
		var virtualUrlFields = fields.slice(3, fields.length);		
		
		if ( url.indexOf('/high-school')>-1) {
			if ((virtualUrlFields.length == 1 && virtualUrlFields[0] == 'high-school') || (virtualUrlFields[0] == 'high-school' && virtualUrlFields[1] == '')) {
				$("li#menu_home").addClass("selected");
			} else if (virtualUrlFields[1] == 'more') {
				$("li#drop_3").addClass("selected");
			} else if (virtualUrlFields.length > 2 && virtualUrlFields[2] == 'exam-prep') {
				$("li#drop_2").addClass("selected");
			} else {
				$("li#drop_1").addClass("selected");
			} 
		} else {
			var current_module = '/' + virtualUrlFields[0].split('index.htm')[0];
			if (current_module == '/') {
				$("li#menu_home").addClass("selected");
			} else if (current_module == '/resources' || current_module == '/courses') {
				$("li#drop_1").addClass("selected");
			} else if (current_module == '/about') {
				$("li#drop_4").addClass("selected");
			} else if (current_module == '/give') {
				$("li#drop_3").addClass("selected");
			} else if (current_module == '/educator') {
				$("li#drop_2").addClass("selected");
			}
		}
	}
	
}

//Mac-mozilla fix for "CITE THIS RESOURCE" text alignment
function addClassforMac(){
	$("div#course_info p#showCitation.citeResource a").addClass("mac");
}

function disableHfhAlert(){
random_num = 1;
var cookiename = "HelpOverlay2000";
if ((random_num == 1) && (navigator.appName.indexOf('WebTV') == -1)){
   WM_setCookie(cookiename,'2015',24*500)   
   $( ".help.slide-bottom" ).fadeOut();
   $( ".help.popup-center" ).fadeOut();    
}
}

threePlayParams = {};
//Code to set the 3Play transcript plug-in
function setThreePlayTranscriptPlugin(project_id, video_id){
	createThreePlayParams(project_id, video_id);
	threePlayTranscriptAsyncFunct(threePlayParams);}

function createThreePlayParams(project_id, video_id, container, start, end){	
	container = container || "embed_1";
	start = start || 0;
	end = end || 0;
	//return;     /* UNCOMMENT THIS IF YOU WANT TO DISABLE THE PLUGIN*/
	if (container=="embed_1"){target = "transcript1";}
	else{target = container  + "transcript1";}	
	threePlayParams[container] = {
			  player_type: "jw",
			  file_id: video_id, /* THIS SHOULD MATCH YOUR 3PLAY FILE ID */             
              api_version: "simple",
              project_id: project_id, /* THIS SHOULD MATCH YOUR 3PLAY PROJECT ID */
              transcript: {
                // OPTIONS
              can_collapse: true,
			  download_format: "pdf",
			  collapse_onload: true,
              target: target,
              skin: "cardinal_red",
              template: "default",
              progressive_tracking: true,
              width: 529,
              height: 208,
              can_print: true,
              search_placeholder:"Search this Video",
              hide_onerror:true,
			  can_clip: true,
			  search_transcript_stemming: true,
			  keyup_search: true,
			  transcript_start: start*1000,
			  transcript_end: end*1000,
	}}		
}
function threePlayTranscriptAsyncFunct(threePlayParams){
	p3_external_stylesheet = window.location.host + "/styles/three_play.css"; 	
	window.p3_async_init = function(){	
	P3.init(threePlayParams,"");}
	}
      
function togglePlus(tableRowObj){ 
  
  var MOTag =$(tableRowObj).children().find("strong");
  var MOArray =$(MOTag).text().split(' ')
  
  MO = MOArray[1] + " " + MOArray[2] + " " + MOArray[3]
  if (MOArray[0]  == '+'){ $(MOTag).text('- '+MO) }
  else{ $(MOTag).text('+ '+MO) } 
};


function unloadCitePopupBox() {	// TO Unload the Popupbox
	$('#cite_popup_box').fadeOut("slow");
	$('#citeOverlay').css({ // this is just for style		
	"display": "none"
}); 
}	
		
function loadCitePopupBox() {	// To Load the Popupbox
	var popup = $('#cite_popup_box');
	popup.fadeIn("slow");
	
	$('#citeOverlay').css({ // this is just for style
	"display": "block"
	});	
	popup.css('top', parseInt(($(window).height()/2) - popup.height()/2));
	popup.css('left', parseInt(($(window).width()/2) - popup.width()/2 -20));
}
// The Below funtion is to randomize the Home Page Features Rotator.
function randomize(slotid,slot_len) // This will take Slot ID and Slot Length from Viewlet HTML Markup.
{

if ($('#'+slotid).length > 0) {

$('#'+slotid).children().css("display", "none");
var slot_feature_lenth=document.getElementById(slot_len).value;
var rand = Math.floor(Math.random()*parseInt(slot_feature_lenth));
var slot_div_id= rand.toString()+slotid;
var div_tag_id = document.getElementById(slot_div_id); // This will get the Required DIV(Feature) to make it Visible and rest of the DIVs will be Hidden
css = {
      position: "absolute",
      width: '952px',
      display: "block"
    };
// This will set the Visibility of the Required DIV.
for(i in css){
   div_tag_id.style[i] = css[i];
}
}

}

// Code Start for Shuffling sponsors Logos.

var sponsors_image_array = {
	img0 : [ 'https://ocw.mit.edu/images/logo_mathworks.png', 'Mathworks logo.', 'http://www.mathworks.com/'],
	img1 : [ 'https://ocw.mit.edu/images/logo_accenture.png', 'Accenture logo.', 'http://careers.accenture.com/'],
	img2 : [ 'https://ocw.mit.edu/images/logo_lockheed.png', 'Lockheed Martin logo.', 'http://www.lockheedmartin.com/'],
	img3 : [ 'https://ocw.mit.edu/images/logo_dow.png', 'Dow logo.', 'http://www.dow.com/'],
	img4 : [ 'https://ocw.mit.edu/images/logo_abinitio.png', 'Ab Initio logo.', 'http://www.abinitio.com/'],
    img5 : [ 'https://ocw.mit.edu/images/logo_telmex.png', 'Telmex logo.', 'http://www.academica.mx/']
	}
	
// This will return length of associative array
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

//This function will shuffle the sponsors image array
function shuffle_sponsor_array(sponsors_image_array, len) {
	var shuffled_sponsors_array = sponsors_image_array;
 	var i = len;
	while (i--) {
	 	var random_position_no = parseInt(Math.random()*len);                                  //  This is 
		var current_sponsor = shuffled_sponsors_array['img'+i]                                 //  based on
		shuffled_sponsors_array['img'+i] = shuffled_sponsors_array['img'+random_position_no];  //  Fisher Yates algorithm
	  	shuffled_sponsors_array['img'+random_position_no] = current_sponsor;                   //  for shuffling
 	}
	return shuffled_sponsors_array;
}

// This will generate shuffled HTML markup for sponsors logos.
function shuffled_sponsors_markup()
{if(typeof googletag === 'undefined'){	// gogletag is variable which is generated through script present in htmlhead.py and this function is used only for mirror site footer sponsor logos.
	var len = Object.size(sponsors_image_array);
	
	shuffled_sponsors_image_array = shuffle_sponsor_array(sponsors_image_array, len);
	
	shuffled_sponsors_html = '<h4 class="footer">Our Corporate Supporters</h4>';
	
	for (var i=0;i < len ;i++)
	{
		if (i%2 == 0) // Condition for checking whether logo will appear on left or right side and based on that inline styles will be applied.
		{
			if (shuffled_sponsors_image_array['img'+i][2] == '') // Checking whether logo has any anchor tag or not
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<img alt="'+ shuffled_sponsors_image_array['img'+i][1] + '" src="' + shuffled_sponsors_image_array['img'+i][0] + '" style="height: 53px; width: 145px; margin: 10px 10px 10px 0;" />';
			}
			else
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<a href="'+ shuffled_sponsors_image_array['img'+i][2] + '"><img alt="' + shuffled_sponsors_image_array['img'+i][1] + '" src="'+ shuffled_sponsors_image_array['img'+i][0] + '" style="height: 53px; width: 145px; margin: 10px 10px 10px 0;" /></a>';
			}
			
		}
		else
		{
			if (shuffled_sponsors_image_array['img'+i][2] == '')
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<img alt="'+ shuffled_sponsors_image_array['img'+i][1] + '" src="' + shuffled_sponsors_image_array['img'+i][0]  + '" style="height: 53px; width: 145px; margin: 10px 0;" /><br />';
			}
			else
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<a href="'+ shuffled_sponsors_image_array['img'+i][2] + '"><img alt="' + shuffled_sponsors_image_array['img'+i][1] + '" src="'+ shuffled_sponsors_image_array['img'+i][0] + '" style="height: 53px; width: 145px; margin: 10px 0;" /></a><br />';
			}
			
		}
	}
	$("#foot-c5").empty();
	$("#foot-c5").append(shuffled_sponsors_html);

  }
}

// Code End for Shuffling sponsors Logos.

function changeQuote(){
var quotes = new Array(
'I\'m a physics student in Argentina, and I appreciate the teaching material. I\'d like OCW to be kept free for others.\"',
'Because I believe in the world class education that MIT is giving to the human society.\"',
'I am so thankful for the lectures in classical physics which help me improve my understanding.\"',
'I and others believe in the way of knowledge to unlock human potential, hopefully beyond.\"',
'It\'s a delight to learn new stuff, see reading lists and video-classes from MIT lecturers.\"',
'I donate to OCW because I love the idea of sharing knowledge for its own sake and the humanity of freely sharing, rather than for profit.\"',
'I feel it\'s kind of a gift being able to study on my own this way.\"',
'I think that online learning is absolutely the right way for education to be conducted in the future.\"',
'I intend to become a teacher and teach math in the most interesting way to every child, including my daughter.\"',
'I donated to encourage this invaluable humanitarian venture and help others receive its benefits.\"',
'I need to understand spoken English and improve my scientific knowledge. There\'s nothing better than lectures on my scientific areas.\"',
'I am dedicated to teaching myself with OCW. I may never get a degree, but I will never be denied access to these remarkable resources.\"',
'It\'s an indirect way to contribute to the development of my country where poverty, child labor and hunger are challenges to be solved.\"',
'I\'ll suggest to my kids that MIT will be a good place for them to realize their dream as well.\"',
'Spreading knowledge, sharing information will save the world.\"',
'Because I believe every person has a chance to make a difference in this world through education and self-improvement.\"',
'I love it :)\"',
'I consider that investment in education is an investment for future of the mankind.\"',
'OCW gives me the opportunity to learn and discover present-day technology in a very fascinating and exciting way.\"',
'OCW allows me to pursue my dream career while working a realistic full time job, thanks OCW.\"',
'Your efforts enable ordinary people to access extraordinary knowledge.\"',
'The OCW lectures really confirmed my decision to enroll in a physics course at my local university soon.\"',
'I\'m amazed by the wealth of courses here and it\'s a great that MIT opens up knowledge for people everywhere.\"',
'This course material is free and of prime quality.\"',
'I am contributing to a great project that will help many others improve their lives, materially, intellectually and spiritually.\"',
'To provide such cutting-edge information freely is truly a herculean generosity.  It deserves supporting.\"'
					);
					
var images=new Array(
' <img src=\"/images/individualsupporter/2012_hp_donor_alberto_t.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Alberto.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_arthur_n.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Arthur.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_asbjoern_p.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Asbjoern.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_charles_r.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Charles.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_eire_z.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Eire.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_gary_s.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Gary.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_hans_k.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Hans.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_ian_r.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Ian.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_itamar_o.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Itamar.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_joajo_m.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Joao.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_luiz_d.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Luiz.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_moses_k.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Moses.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_ramon_r.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Ramon.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_xueyi_c.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Xueyi.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_zoran_b.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Zoran.\" /> ',' <img src=\"/images/individualsupporter/2012_hp_donor_rica_p.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Ricardo.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_animesh.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Animesh.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_prakash.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Prakash.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_alessandro.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Alessandro.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_aaron.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Aaron.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_lawrence_c.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Lawrence.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_martin_u.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Martin.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_vassilis.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Vassilis.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_francesco_b.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Francesco.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_carlos_f.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Carlos.\" /> ',
' <img src=\"/images/individualsupporter/2012_hp_donor_sigit.jpg\" style=\"width: 73px; height: 68px; float: left;\" alt=\"A photo of OCW Supporter Sigit.\" /> '
	);
var names=new Array(
'<p><strong>Alberto</strong><br /><span style=\"font-size: 0.9em;\">Student - College/University<br />Argentina</span></p>',
'<p><strong>Arthur</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Canada</span></p>',
'<p><strong>Asbjoern</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Denmark</span></p>',
'<p><strong>Charles</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Belgium</span></p>',
'<p><strong>Eire</strong><br /><span style=\"font-size: 0.9em;\">Student<br />Brazil</span></p>',
'<p><strong>Gary</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Australia</span></p>',
'<p><strong>Hans</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Denmark</span></p>',
'<p><strong>Ian</strong><br /><span style=\"font-size: 0.9em;\">Parent<br />Canada</span></p>',
'<p><strong>Itamar</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Brazil</span></p>',
'<p><strong>Joao</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Canada</span></p>',
'<p><strong>Luiz</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Brazil</span></p>',
'<p><strong>Moses</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Canada</span></p>',
'<p><strong>Ramon</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />Brazil</span></p>',
'<p><strong>Xueyi</strong><br /><span style=\"font-size: 0.9em;\">Self Learner<br />China</span></p>',
'<p><strong>Zoran</strong><br /><span style=\"font-size: 0.9em;\">Parent - College/University<br />Croatia</span></p>',
'<p><strong>Ricardo</strong><br /><span style="font-size: 0.9em;">Independent Learner<br />Mexico</span></p>',
'<p><strong>Animesh</strong><br /><span style="font-size: 0.9em;">Student<br />India</span></p>',
'<p><strong>Prakash</strong><br /><span style="font-size: 0.9em;">Parent<br />India</span></p>',
'<p><strong>Alessandro</strong><br /><span style="font-size: 0.9em;"><br />Italy</span></p>',
'<p><strong>Aaron</strong><br /><span style="font-size: 0.9em;">Independent Learner<br />United Kingdom</span></p>',
'<p><strong>Lawrence</strong><br /><span style="font-size: 0.9em;">Independent Learner<br />USA</span></p>',
'<p><strong>Martin</strong><br /><span style="font-size: 0.9em;">Student - High School<br />Germany</span></p>',
'<p><strong>Vassilis</strong><br /><span style="font-size: 0.9em;">Independent Learner<br />Greece</span></p>',
'<p><strong>Francesco</strong><br /><span style="font-size: 0.9em;">Independent Learner<br />Italy</span></p>',
'<p><strong>Carlos</strong><br /><span style="font-size: 0.9em;">Independent Learner<br />Italy</span></p>',
'<p><strong>Sigit</strong><br /><span style="font-size: 0.9em;">Educator - College/University<br />Indonesia</span></p>'
	);
	
	var rand = Math.floor(Math.random()*quotes.length);

var txt="";
document.getElementById("support-c1").innerHTML="<p>Support OCW</p>";
document.getElementById("support-c2").innerHTML=quotes[rand];
txt+=images[rand];
txt+=names[rand];
document.getElementById("support-c3").innerHTML=txt;
document.getElementById("support-c4").innerHTML="<a href=\"/donate\"><img src=\"/images/button_donate.png\" style=\"width: 172px; height: 36px;\" alt=\"Donate Now\" /></a>";

}




function fillEmailText()
{
    var txt='';
    txt+='<ul><li class="email"><a href="javascript:emailPopUp()">Email this page<\/a><\/li><\/ul>';
    if(document.getElementById("switchbutton"))
        document.getElementById("switchbutton").innerHTML=txt;
//Enable survey on Site Home Page
   // customResearch();
}

function showRandomSidebarQuote()
{
	var quotes = new Array(
	'<p>&quot;I donated because I want MIT to keep OCW going.&quot;<br /><br /> &mdash;Heath Novak<br />Student, USA</p>', 
	'<p>&quot;OCW inspires just as much as it enriches.&quot;<br /><br /> &mdash;Jeff Breidenbach<br /> MIT Alumnus, Class of 1996</p>',
	'<p>&quot;It\'s every person\'s responsibility to stand up and support the things he (or she) values.&quot;<br /><br /> &mdash;Assaf Tal<br /> Self Learner, Israel</p>',
	'<p>&quot;Supporting OCW was my way of saying \'thank you\' for having the courage and insight to take this bold step.&quot;<br /><br /> &mdash;Ted Inoue<br /> Self Learner, USA</p>',
	'<p>&quot;I gained so much by the educational materials from MIT faculty.&quot;<br /><br /> &mdash;Aditi Gupta<br /> Student, USA</p>',
	'<p>&quot;OCW has been instrumental in my professional development.&quot;<br /><br /> &mdash;Harry Crissy<br /> Self Learner, USA</p>') 
	
	var rand = Math.floor(Math.random() * quotes.length);
	var sidebarQuotesPlaceHolder = document.getElementById("quote_sidebar");
	if(sidebarQuotesPlaceHolder){
		sidebarQuotesPlaceHolder.innerHTML = "<strong>" + quotes[rand] + "</strong>" ;
	}
}
function showRandomIndividualSupporterQuote()
{
	var images = new Array (
	"/images/individualsupporter/donor_1.gif", 
	"/images/individualsupporter/donor_2.gif", 
	"/images/individualsupporter/donor_3.gif",
	"/images/individualsupporter/donor_4.gif",
	"/images/individualsupporter/donor_5.gif",
	"/images/individualsupporter/donor_6.gif",
	"/images/individualsupporter/donor_7.gif",
	"/images/individualsupporter/donor_8.gif",
	"/images/individualsupporter/donor_9.gif",
	"/images/individualsupporter/donor_10.gif");

	var quotes = new Array(
	'OpenCourseWare is how MIT will be remembered 500 years from now.',
	'I gave to OCW because I think it\'s one of the most noble endeavors imaginable. MIT, you rock! I\'m so proud of you!',
	'I\'ve used OCW as a reference long after my old college \'bibles\' ended up in the recycling bin. OCW is a shining example of ideas being celebrated.',
	'I\'ve been dreaming for years an initiative like the OCW for young students in Haiti and other Developing countries.',
	'I know the value of good educational content - and the tangible positive changes it can bring to an aspiring student. It really transforms life.',
	'I support you because you support me! Thank you for contributing to my professional development.',
	'As a Physics teacher, I find your website to be of enormous utility both for my own edification, as well as the education of my students.',
	'I find it inspiring that so many people, rich or poor, get to learn anything they desire from OpenCourseWare.',
	'This is the way education should be: open, high-quality and available to all who are interested in learning.',
	'This is what education is all about and it is boundless. This is why I support OCW.') 
	
	var rand = Math.floor(Math.random() * quotes.length);
	var sidebarQuotesPlaceHolder = document.getElementById("rotating_quotes");
	if(sidebarQuotesPlaceHolder){
		sidebarQuotesPlaceHolder.innerHTML = '<p><img title="' + quotes[rand] + '" src="' + images[rand] + '" alt="' + quotes[rand] + '" \/><\/p>';
	}
}

function emailPopUp()
{
	var pageTitle = document.title;
	var pageUrl   = document.location;
	var URL = "/jsp/emailpage.jsp?title=" + pageTitle + "&referer=" + pageUrl;
	window.open(URL,null,"height=660,width=530,status=yes,toolbar=no,menubar=no,location=no,resizable=yes");
}

//Clear the default value of search input 

function clearSearchBox()
{
	if(document.getElementById("terms").value == "Search")
	{
		document.getElementById("terms").value = "";	
	}
	
}

function fillSearchBox()
{
	if(document.getElementById("terms").value == "")
	{
		document.getElementById("terms").value = "Search";	
	}
}

function clearEmailBox()
{

	if(document.getElementById("email").value == "Enter Email")
	{
		document.getElementById("email").value = "";	
	}
	
} 

function fillEmailBox()
{
	if(document.getElementById("email").value == "")
	{
		document.getElementById("email").value = "Enter Email";	
	}
}

//Redirect the selected value of Translated Courses

function OnTranslatedCoursesChange(url)
{
	if(url !="")
	{
		location = url;
	}
}


function populateYoutubePlaceholders(){
    var stringToReplace = "ACTUAL_LINK_GOES_HERE";
    var videoinjectionstring = '<object type="application/x-shockwave-flash" style="width:425px; height:344px;" data="' + stringToReplace+ '">'
            + '<param name="movie" value="' + stringToReplace + '"></param>'
            + '<param name="allowFullScreen" value="true"></param></object>';
    var blacklist_div = document.getElementById("dept_links");
    if(blacklist_div != null){
        return;
        }
    var videoContainers = document.getElementsByClassName("youtubevideo");
    
    for(i = 0; i < videoContainers.length; i ++){
        var videoURL = videoContainers[i].getElementsByTagName("a")[0].getAttribute("href");
        var finalvideoinjectionstring = videoinjectionstring.replace(stringToReplace, videoURL).replace(stringToReplace, videoURL);
        videoContainers[i].innerHTML = finalvideoinjectionstring;
    }
}

document.getElementsByClassName = function(cl) {
    var retnode = [];
    var myclass = new RegExp('\\b'+cl+'\\b');
    var elem = this.getElementsByTagName('div');
    for (var i = 0; i < elem.length; i++) {
    var classes = elem[i].className;
    if (myclass.test(classes)) {
        retnode.push(elem[i]);
        break;
        }
    }
    return retnode;
};


// This next little bit of code tests whether the user accepts cookies.
var WM_acceptsCookies = false;
if(document.cookie == '') {
	document.cookie = 'WM_acceptsCookies=yes'; // Try to set a cookie.
	if(document.cookie.indexOf('WM_acceptsCookies=yes') != -1) {
	WM_acceptsCookies = true;
	}// If it succeeds, set variable
} else { // there was already a cookie
	WM_acceptsCookies = true;
}

function WM_setCookie (name, value, hours, path, domain, secure) {
if (WM_acceptsCookies) { // Don't waste your time if the browser doesn't accept cookies.
var not_NN2 = (navigator && navigator.appName && (navigator.appName == 'Netscape') && navigator.appVersion && (parseInt(navigator.appVersion) == 2))?false:true;

if (!hours)
hours = 72;

if(hours && not_NN2) { // NN2 cannot handle Dates, so skip this part
	if ( (typeof(hours) == 'string') && Date.parse(hours) ) { // already a Date string
	var numHours = hours;
	} 
	else if (typeof(hours) == 'number') { // calculate Date from number of hours
	var numHours = (new Date((new Date()).getTime() + hours*3600000)).toGMTString();
	}
}
document.cookie = name + '=' + escape(value) + ((numHours)?(';expires=' + numHours):'') + ';path=/' + ((domain)?';domain=' + domain:'') + ((secure && (secure == true))?'; secure':''); // Set the cookie, adding any parameters that were specified.
}
} // WM_setCookie

function WM_readCookie(name) {
if(document.cookie == '') { // there's no cookie, so go no further
	return false;
} 
else { // there is a cookie
	var firstChar, lastChar;
	var theBigCookie = document.cookie;
	firstChar = theBigCookie.indexOf(name); // find the start of 'name'
	var NN2Hack = firstChar + name.length;
	if((firstChar != -1) && (theBigCookie.charAt(NN2Hack) == '=')) { // if you found the cookie
		firstChar += name.length + 1; // skip 'name' and '='
		lastChar = theBigCookie.indexOf(';', firstChar); // Find the end of the value string (i.e. the next ';').
		if(lastChar == -1) lastChar = theBigCookie.length;
		return unescape(theBigCookie.substring(firstChar, lastChar));
	} else { // If there was no cookie of that name, return false.
		return false;
	}
}
} // WM_readCookie

//Code for 2013 Fall campaign
document.getElementsByClassName = function(cl) {
var retnode = [];
var myclass = new RegExp('\\b'+cl+'\\b');
var elem = this.getElementsByTagName('div');
for (var i = 0; i < elem.length; i++) {
var classes = elem[i].className;
if (myclass.test(classes)) {
	retnode.push(elem[i]);
	break;
	}
}
return retnode;
};

function enableSurvey(){
var metaTags = document.getElementsByTagName('meta');
for(i=0;i<metaTags.length;i++){
    if(metaTags[i].getAttribute('name')== 'WT.cg_s'){
        content = metaTags[i].getAttribute('content');        
    }
}
var domain = window.location.hostname;
if(content != 'Home' && domain != "search.mit.edu"){
customResearch();
}
}


function customResearch(){
var n = 100; /* One out of n visitors will be given survey */
var random_num;
var offset = -1;
var cookiename = "Campaign2016";

var img_array = ["https://ocw.mit.edu/ans7870/banners/ocw/2017fall-overlay.png"];

var coords_array = ["751,171,871,196"];

				  
var link_array = ["https://ocw.mit.edu/give/why-give/?utm_source=site&utm_medium=rotator&utm_campaign=donate&utm_content=2017fallcampaign_poor"];

//var indx = Math.floor((Math.random() * 2));
var indx = 0;  //If there is only 1 image

var surveymarkup = '<div id="grid">'
surveymarkup += '<img border="0" src=' + img_array[indx] + ' usemap="#campaign" alt="Donate to OCW today" />'
surveymarkup += '<map name="campaign">'
surveymarkup += '<area shape="rect" coords="895,0,959,25" onclick="onClickMinimize();" href="javascript:void(0)">'
surveymarkup += '<area shape="rect" coords='+ coords_array[indx] +' href='+link_array[indx]+' onclick="onClickGetStarted();">'
surveymarkup += '</map>'
surveymarkup += '</div>';

var pageHeader = document.getElementsByTagName('body')[0];

random_num = Math.round(n * Math.random());
random_num = 1; // uncomment this line to debug, this will trigger the research everytime
if ((random_num == 1) && (navigator.appName.indexOf('WebTV') == -1))
	if (!WM_readCookie(cookiename)) {
	//insert survey code
	var ndiv = document.createElement("div");
    ndiv.id = "mainsurvey";
	ndiv.innerHTML = surveymarkup;
	ndiv.style.backgroundColor="black";//for survey backgroundColor
	if(!(pageHeader.innerHTML == surveymarkup))
    pageHeader.insertBefore(ndiv,pageHeader.firstChild);	
	}
}
var newwindow = '';
function onClickGetStarted(url) {
document.getElementById("mainsurvey").style.display = "none";
random_num = 1;
var cookiename = "Campaign2016";
if ((random_num == 1) && (navigator.appName.indexOf('WebTV') == -1))
  if (!WM_readCookie(cookiename)) {
   /* comment this to prompt until they complete the survey */
    WM_setCookie(cookiename,'2016')
     /* if (!newwindow.closed && newwindow.location) {
        newwindow.close();
        newwindow=window.open("https://www.surveymonkey.com/s/2013OCWVisitorSurvey","Custom_Research"+Math.random(),'height=760,width=500');
    }
    else {
        newwindow=window.open("https://www.surveymonkey.com/s/2013OCWVisitorSurvey","Custom_Research","WIDTH=760,HEIGHT=500,scrollbars,resizable,status");
        if (!newwindow.opener) newwindow.opener = self;
    }
    return false;*/
}
}

function onClickMinimize(){
random_num = 1;
var cookiename = "Campaign2016";
var cururl = window.location;
if ((random_num == 1) && (navigator.appName.indexOf('WebTV') == -1)){
   WM_setCookie(cookiename,'2016',24*5)
   document.getElementById("mainsurvey").style.display = "none";
}
}
//Code for 2013 Fall campaign ends

function disableHelpPopup(){
random_num = 1;
var cookiename = "HelpOverlay2015";
if ((random_num == 1) && (navigator.appName.indexOf('WebTV') == -1)){
   WM_setCookie(cookiename,'2015',24*500)   
   $( ".help.slide-bottom" ).fadeOut();
   $( ".help.popup-center" ).fadeOut();
   $(".googleAdCampaign").css('bottom','0px');
}
}

//Code to set the copyright text 
function setCopyrightText(){
$("p.copyright").html('');
present_date=new Date();
return $("p.copyright").append("&copy; 2001&ndash;"+ present_date.getFullYear() + "<br/> Massachusetts Institute of Technology");
}


// code for Edx converted courses

// Function for making new windows with specified html content
var windowRef = [];
window.newWindow = function(html,eqnstr) {
if ((windowRef[eqnstr] != undefined) &&(!windowRef[eqnstr].closed) ){ windowRef[eqnstr].close(); }
	windowRef[eqnstr] = window.open("",eqnstr,"height=100,width=400");
	if (windowRef[eqnstr]) {
        var d = windowRef[eqnstr].document;
        d.open();
        d.write(html);
        d.close();
    }

windowRef[eqnstr].focus();
}

// Add event listeners to allow edX onload functions to run in addition to our own (specified below)
if (window.addEventListener) { // Mozilla, Netscape, Firefox
    window.addEventListener('load', WindowLoad, false);
} else if (window.attachEvent) { // IE
    window.attachEvent('onload', WindowLoad);
}

// Our own onload function to listen for DOMSubtree modifications to call another javascript function that modifies the feedback "Correct" or "Incorrect" for the justification response section
function WindowLoad(event) {
    process_justifications();
    $("#seq_content").bind("DOMSubtreeModified", function() {
        process_justifications();
    });
}

function process_justifications() {
    var debugs = document.getElementsByClassName("debug");
    for (var i=0; i<debugs.length; i++) {
        if (debugs[i].innerHTML == "incorrect") {
             debugs[i].innerHTML = "provide justification";
        }
        if (debugs[i].innerHTML == "correct") {
            debugs[i].innerHTML = "justification submitted";
        }
    }
    // make something that sets Save buttons to hidden when "Sample Problems" is active in the menu
    if ($("li:contains('Sample Problems')").hasClass('active')) {
        var save_buttons = document.getElementsByClassName("save");
        for (var i=0; i<save_buttons.length; i++) {
            save_buttons[i].setAttribute('type','hidden');
        }
    }
}

//Functions for edx Assessments
//nostatus class ==> no tick no cross
//correct class ==> show tick
//wrong class ==> show cross
function numericTypedOrDropDownSelected(qid){//For numericalresponse and optionresponse problems
	var status_p = document.getElementById("Q"+qid+"_normal_status");
	var aria_status_p = document.getElementById("Q"+qid+"_aria_status");
	status_p.className="nostatus";
	aria_status_p.innerHTML="";
}

function optionSelected(qid){//for multiplechoiceresponse and choiceresponse problems
	var slides = document.getElementsByName("Q"+qid+"_input");
	for(var i = 0; i < slides.length; i++){		
		var status_p = document.getElementById(slides.item(i).id+"_normal_status");
		status_p.className="nostatus";
		var aria_status_p = document.getElementById(slides.item(i).id+"_aria_status");
		if(aria_status_p!=null){
		aria_status_p.innerHTML="";		
		}
		
	}
	//remove combined status_p of choiceresponse
	var status_p_combined=document.getElementById("Q"+qid+"_status_combined");
	if(status_p_combined!=null){
		status_p_combined.className="nostatus";
		status_p_combined.innerHTML="";	
	}	
 } 

function checkNumericalResponse(usr_input, ans, tolerance){//ans should be in range
	if((usr_input>=ans && usr_input<=(ans+tolerance)) || (usr_input<=ans && usr_input>=(ans-tolerance))){
		return true;
		}
	return false;	
}

function showHideSolution(prob_id_type_array, probem_btns_id, solution_div_array){	
	var button=document.getElementById("Q"+probem_btns_id+"_button_show");
	var sdiv=document.getElementById("S"+probem_btns_id+"_div");	
	var btnInnerHTML="Show Answer";
	var disp="none";
	var opResDisp="none";
	var statusClass="nostatus";
	var aria_text="";
		
	if (button.innerHTML=="Show Answer"){
		btnInnerHTML="Hide Answer";
		disp="block";
		statusClass="correct";
		opResDisp="inline";
		aria_text="[correct]";
	}
	
	button.innerHTML=btnInnerHTML;
	
	for (var qid in prob_id_type_array) {		
		type = prob_id_type_array[qid]		
		if (type=="optionresponse" || type=="stringresponse"){ 
			var ansp = document.getElementById("Q"+qid+"_ans_span");
			ansp.style.display=opResDisp;			
			ansp.focus();	
		}
	
		if(type=="numerical"){
			var ansp = document.getElementById("S"+qid+"_ans");
			ansp.innerHTML="Solution: "+document.getElementById("Q"+qid+"_ans").value;
			ansp.style.display=disp;			
			ansp.focus();
		}
		
		if(type=="choiceresponse" || type=="multiple_choice"){
			var checkboxes = document.getElementsByName("Q"+qid+"_input");
			for (var i=0; i<checkboxes.length; i++) {
					if( checkboxes[i].getAttribute('correct')=='true'){
						var status_p=document.getElementById(checkboxes[i].id+"_normal_status");
						status_p.className=statusClass;
						var aria_status_p=document.getElementById(checkboxes[i].id+"_aria_status");
						aria_status_p.innerHTML=aria_text;
					}											
			}				
	}
	
	if (solution_div_array.length > 0){
		for (var i = solution_div_array.length-1; i >= 0; i--) {
			sdiv = document.getElementById("S"+solution_div_array[i]+"_div")			
			if (sdiv.innerHTML=='&nbsp;'){sdiv.innerHTML = sdiv.innerHTML.replace(/&nbsp;/g,'')}			
			if(sdiv!=null && sdiv.innerHTML.trim()){
			sdiv.style.display=disp;
			sdiv.focus();
			}//if solution div is empty do not show it
		}
	}
	}
}

function showHideVidSolution(prob_id_type_array, probem_btns_id, solution_div_array){   
    var button=document.getElementById("Q"+probem_btns_id+"_button_show");
    var sdiv=document.getElementById("S"+probem_btns_id+"_div");    
    var btnInnerHTML="Show Answer Videos";
    var disp="none";
    var opResDisp="none";
    var statusClass="nostatus";
    var aria_text="";
        
    if (button.innerHTML=="Show Answer Videos"){
        btnInnerHTML="Hide Answers";
        disp="block";
        statusClass="correct";
        opResDisp="inline";
        aria_text="[correct]";
    }
    
    button.innerHTML=btnInnerHTML;
    
    for (var qid in prob_id_type_array) {       
        type = prob_id_type_array[qid]      
        if (type=="optionresponse" || type=="stringresponse"){ 
            var ansp = document.getElementById("Q"+qid+"_ans_span");
            ansp.style.display=opResDisp;           
            ansp.focus();   
        }
    
        if(type=="numerical"){
            var ansp = document.getElementById("S"+qid+"_ans");
            ansp.innerHTML="Solution: "+document.getElementById("Q"+qid+"_ans").value;
            ansp.style.display=disp;            
            ansp.focus();
        }
        
        if(type=="choiceresponse" || type=="multiple_choice"){
            var checkboxes = document.getElementsByName("Q"+qid+"_input");
            for (var i=0; i<checkboxes.length; i++) {
                    if( checkboxes[i].getAttribute('correct')=='true'){
                        var status_p=document.getElementById(checkboxes[i].id+"_normal_status");
                        status_p.className=statusClass;
                        var aria_status_p=document.getElementById(checkboxes[i].id+"_aria_status");
                        aria_status_p.innerHTML=aria_text;
                    }                                           
            }               
    }
 
    if (solution_div_array.length > 0){
        for (var i = solution_div_array.length-1; i >= 0; i--) {
            sdiv = document.getElementById("S"+solution_div_array[i]+"_div")            
            if (sdiv.innerHTML=='&nbsp;'){sdiv.innerHTML = sdiv.innerHTML.replace(/&nbsp;/g,'')}            
            if(sdiv!=null && sdiv.innerHTML.trim()){
            sdiv.style.display=disp;
            sdiv.focus();
            }//if solution div is empty do not show it
        }
    }
    }
}

function checkAnswer(prob_id_type_array){
	var node;
	var status_p;
	var aria_status_p;
	var correct;
	var input_focus;
	for (var qid in prob_id_type_array) {
		correct=false;
		type = prob_id_type_array[qid];
		
		if(type=="numerical"){		
			input_focus=document.getElementById("Q"+qid+"_input");	
			var usr_input = parseFloat(input_focus.value);	
			var ans = parseFloat(document.getElementById("Q"+qid+"_ans").value);	
			var tolerance = document.getElementById("Q"+qid+"_tolerance").value;
			
			//handle tolerance
			if(tolerance.indexOf("%")>-1){//tolerance in %
				tolerance=parseFloat(tolerance)*(ans/100);
			}
			else{tolerance=parseFloat(tolerance);}	
					
			correct = checkNumericalResponse(usr_input, ans, tolerance);	
			status_p = document.getElementById("Q"+qid+"_normal_status");
			aria_status_p = document.getElementById("Q"+qid+"_aria_status");			
		}
		
		if (type=="stringresponse"){
			input_focus = document.getElementById("Q"+qid+"_input");
			status_p = document.getElementById("Q"+qid+"_normal_status");
			aria_status_p = document.getElementById("Q"+qid+"_aria_status");
			if(input_focus.getAttribute('ckecktype').indexOf("regexp") > -1){//regex case
			}
			else{ correct=(input_focus.value==input_focus.getAttribute('answer')); }			
		}
		
		if (type=="optionresponse"){
			input_focus = document.getElementById("Q"+qid+"_select");
			var option = input_focus.options[input_focus.selectedIndex];
			status_p = document.getElementById("Q"+qid+"_normal_status");
			aria_status_p = document.getElementById("Q"+qid+"_aria_status");
			if( option.getAttribute('correct')=='true' ){ correct=true; }
		}
		
		if(type=="multiple_choice"){
			var options = document.getElementsByName("Q"+qid+"_input");
			for (var i=0; i<options.length; i++) {
				if ( options[i].checked ) {				
					status_p=document.getElementById(options[i].id+"_normal_status");
					aria_status_p=document.getElementById(options[i].id+"_aria_status");
					input_focus=options[i];
					if( options[i].getAttribute('correct')=='true' ){ correct=true; }
					break;//as only one option checked in case of multiple_choice problem						
				}			
			}
		}
		
		if(type =="choiceresponse"){
			correct=true;
			status_p=document.getElementById("Q"+qid+"_status_combined");
			aria_status_p=status_p;//aria-status is also shown by status_p in this case
			input_focus=status_p;							//as of now the focus goes to status_p not any input
			var options = document.getElementsByName("Q"+qid+"_input");
			for (var i=0; i<options.length; i++) {
				if (( options[i].checked && options[i].getAttribute('correct')=='false') || (!options[i].checked && options[i].getAttribute('correct')=='true') ) {	     
					correct=false;
				}
			}		
		}//end choiceresponse
		
		//default is wrong
		if(status_p!=null){status_p.className="wrong";}	
		if(aria_status_p!=null){aria_status_p.innerHTML="[wrong]";}			
			if(correct){	
				if(status_p!=null){status_p.className="correct";}	
				if(aria_status_p!=null){aria_status_p.innerHTML="[correct]";}		
				}
		if(input_focus!=null){input_focus.focus();}				
	}
	return ;
}


function image_popup(img_obj, popup_image_url, caption, credit_line, extended_alt, title){

	focusedElem =  document.activeElement;
	$('body').append('<div id="image_popup_fade" style="display:none;"></div>');
	
	screen_reader_div = $('#modal-body div.screen-reader-only');
	if (!extended_alt){
	screen_reader_div.text(img_obj.alt);
	}
	else {screen_reader_div.text(extended_alt);}
		
	popupimage = $('#popup_image_div img.popup_image');
	popuptitle = $('#modal-title');
	popuptitle.html(title);

	popup_image_div = $('#popup_image_div');
	image_popup_fade = $('#image_popup_fade');

	//$('#caption_image_div').text(caption);
	var caption_image_div = document.getElementById('caption_image_div');
    caption_image_div.innerHTML = caption;

	if (credit_line!=''){credit_line = 'Credit: ' + credit_line}

	//$('#image_credit').text(credit_line);
	var image_credit_div = document.getElementById('image_credit');
    image_credit_div.innerHTML = credit_line;
	popupimage.attr('src', popup_image_url);



	popup_image_div.attr( "aria-hidden", 'false');
	popup_image_div.css({
	    'display' : 'block'
    });
	image_popup_fade.css({
		'display' : 'block'
    });

	setTimeout(function(){document.getElementById("img_popup_close").focus();},0);

	$('#img_popup_close, #image_popup_fade' ).on('click', function(event) { //When clicking on the close or fade layer...
	popup_image_div.attr( "aria-hidden", 'true');
		
    $('#image_popup_fade, #popup_image_div').fadeOut(function() {
        image_popup_fade.remove();  //fade them both out
		});	
		focusedElem.focus();
	});
	$(document).keydown(function (event){
		var container = popup_image_div
		
		if (event.keyCode == 27){
			container.hide();
			$('#image_popup_fade , .img_popup_block').fadeOut(function() {
			image_popup_fade.remove();  //fade them both out
			});
			popup_image_div.attr( "aria-hidden", 'true');
			focusedElem.focus();
		}
	});
	$('#popup_image_div').keydown(function(event){trapTabKey($(this),event,focusedElem);})
}
$('a.imagePopup').live("keydown", function (event){trapKeys($(this),event);});


function trapKeys(obj,evt) {
			 if(evt.which == 1 || evt.which == 32 || evt.which == 13){//Enter key pressed
			 img_obj = obj.children('img');			 
			 var func_call = img_obj.attr("onclick");
			 var func = new Function(func_call);
			 func();
			 }			
	}
		var focusableElementsString ="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";				

		
		function trapTabKey(obj,evt,focusedElem) {
			
			console.log(focusedElem);
			if (evt.which == 32){
				popup_image_div = $('#popup_image_div');
				image_popup_fade = $('#image_popup_fade');
				popup_image_div.attr( "aria-hidden", 'false');
				popup_image_div.css( "display", 'none');
				image_popup_fade.css( "display", 'none');
				focusedElem.focus();
				return false;
				
			}
			// if tab or shift-tab pressed
			if ( evt.which == 9 ) {
				// get list of all children elements in given object
				var o = obj.find('*');
				// get list of focusable items
				var focusableItems;
				focusableItems = o.filter(focusableElementsString).filter(':visible')				
				// get currently focused item
				var focusedItem;
				focusedItem = $(':focus');

				// get the number of focusable items
				var numberOfFocusableItems;
				numberOfFocusableItems = focusableItems.length				
				// get the index of the currently focused item
				var focusedItemIndex;
				focusedItemIndex = focusableItems.index(focusedItem);				
				if (evt.shiftKey) {
					//back tab
					// if focused on first item and user preses back-tab, go to the last focusable item
					if(focusedItemIndex==0){						
						focusableItems.get(numberOfFocusableItems-1).focus();
						evt.preventDefault();
					}
					
				} else {
					//forward tab
					// if focused on the last item and user preses tab, go to the first focusable item
					if(focusedItemIndex==numberOfFocusableItems-1){					
						setTimeout(function(){focusableItems.get(0).focus();},0);
						focusableItems.get(0).focus();
						//evt.preventDefault();				
					}
				}
			}
	}	


	//Function to check if cookie for google ad exist or not and set its display value according to the condition
	function checkCookie() {
		var cookie_name=WM_readCookie("googleAdCampaign2017");
		if (cookie_name != "") {
			document.getElementById("googleAdCampaign").style.display = "none";
		}
	}

	//Function to create cookie if close button is clicked and if spacebar/enter is pressed when close button is at focus.
    //Function to create cookie id google ad is clicked and if spacebar/enter is pressed when google ad is at focus.
	function createCookie() {
       var cookie_value = "Google Ad Campaign 2017"
	   var cookiename = "googleAdCampaign2017"
	   WM_setCookie(cookiename,cookie_value,'24');
	   document.getElementsByClassName("googleAdCampaign")[0].style.display = "none";

    }


function googleAdCampaign(){

    // meta content array for target templates
    var array_cg_s = ["Find Courses by Topic","Introductory Programming Courses","Audio/Video Lectures","Home","OCW Course Index"];
    var array_cg_n = ["electrical-engineering-and-computer-science","mathematics","physics","18-06-linear-algebra-spring-2010","6-00sc-introduction-to-computer-science-and-programming-spring-2011","6-042j-mathematics-for-computer-science-fall-2010","6-006-introduction-to-algorithms-fall-2011","18-06-linear-algebra-spring-2010","6-092-introduction-to-programming-in-java-january-iap-2010","18-05-introduction-to-probability-and-statistics-spring-2014"];

    var metaTags = document.getElementsByTagName('meta');
    for(i=0;i<metaTags.length;i++){
    if(metaTags[i].getAttribute('name')== 'WT.cg_s'){
    var array_cg_sVAL = metaTags[i].getAttribute('content');
    }

    if(metaTags[i].getAttribute('name')== 'WT.cg_n'){
    var array_cg_nVAL = metaTags[i].getAttribute('content');
    }

    }

    var flag1 = 0;
    var flag2 = 0;
    for (i = 0; i < array_cg_s.length; i++) {
        if (array_cg_s[i] == array_cg_sVAL){
            flag1 = 1;
        }
    }

    for (i = 0; i < array_cg_n.length; i++) {
        if ((array_cg_n[i] == array_cg_nVAL) && (array_cg_sVAL == "Course Home" || array_cg_sVAL == "")){
            flag2 = 1;
        }
    }

    if (flag1 == 0 && flag2 == 0){
        return;
    }

    var cookie_name = "googleAdCampaign2017";

    if (WM_readCookie(cookie_name)==""){     //check if Campaign is disabled or not
        var footer = document.getElementById('bottom');
        var gooElm = document.createElement('div');
        gooElm.setAttribute('class','googleAdCampaign');
        gooElm.innerHTML = animation_markup;

        clearAnchor = document.createElement('a');
        clearAnchor.setAttribute('id','clearAnchor');
        clearAnchor.setAttribute('href','javascript:;');
        clearAnchor.setAttribute('tabindex','-1');
        $(clearAnchor).insertBefore(footer);
        $(gooElm).insertBefore(footer);

        setTimeout(function(){

        var footer_height = $(".slide-bottom").css('height'); //check height of the help popup

        var campaign_width = $(".googleAdCampaign").css('width'); //check width of the Google Ad Campaign width, and set left equal to -ve width of campaign

        $(".googleAdCampaign").css('left','-'+campaign_width)
        if (WM_readCookie('HelpOverlay2015') ==""){
                console.log(footer_height);
                if (footer_height){
                $(".googleAdCampaign").css('bottom',"51px");
                }

            }
        else {
            $(".googleAdCampaign").css('bottom','0px')
            }
        $(".googleAdCampaign").css('display','block');
        $(".googleAdCampaign").animate({left: '0px'},2000);

        iframe = document.getElementById("google_ads_iframe_/1064917/FUNDPOPUP_0");
        iframe.setAttribute('tabindex','-1');

        var doc = iframe.contentDocument || iframe.contentWindow.document;
        anchor_tag = doc.getElementsByTagName('a')[0];
        if (anchor_tag != undefined || anchor_tag != null) {//for hiding close button if ad blocker is enabled
        document.getElementById('closeAd').style.display="block";
        document.getElementById('close').style.display="block";

        }
        $(anchor_tag).click(function(event){GoogleAdonClick(event);});
        $(anchor_tag).keydown(function(event){GoogleAdonKeyDown(event);});

        closeAdObj = document.getElementById('closeAd');

        }, 1001);

        }

    };

//Keydown events when google ad is at focus (Accessibility)
	function GoogleAdonKeyDown(event){

    if (event.keyCode == 13 || event.keyCode == 32 ){

        event.preventDefault();
        window.location.href = anchor_tag.href;
        createCookie();//Function to create cookie
    }

    else if (event.keyCode == 9 ){

        if (event.shiftKey){
            event.preventDefault();
            document.getElementsByClassName("googleAdCampaign")[0].style.border = "";
            anchor_tag.setAttribute('aria-selected','False');
            document.getElementById('clearAnchor').focus();

            anchor_tag.blur();

        }

        else{
            anchor_tag.blur();
            iframe.blur();
            document.getElementsByClassName("googleAdCampaign")[0].style.border = "";
            anchor_tag.setAttribute('tabindex','-1');
            anchor_tag.setAttribute('aria-selected','False');
            var closeAdButton = document.getElementById('closeAd');
            closeAdButton.setAttribute('tabindex','0');
            closeAdButton.setAttribute('aria-selected','True');
            document.getElementById('close').focus();
        }

    }
	}


	//Click event when google ad image is clicked
	function GoogleAdonClick(event){
    event.preventDefault();
    window.location.href = anchor_tag.href;
    createCookie();//Function to create cookie
	}


	//Click event when close image on google ad image is clicked
	function closeGoogleAdonClick(event){
    event.preventDefault();
    createCookie();
	}

	//Keydown Event when spacebar/enter key is pressed when close image is at focus on google ad
	function closeGoogleAdKeyDown(event){
    if (event.keyCode == 13 || event.keyCode == 32 ){
        createCookie();
        }
    if (event.keyCode == 9 && event.shiftKey){
        event.preventDefault();
        setFocus(event)
        document.getElementById('closeAd').removeAttribute('tabindex');
        document.getElementById('closeAd').removeAttribute('aria-selected');

    }
    }

	// This function sets the value of tabindex and aria-selected when focus is recieved by the anchor tag inside which the entire add is kept
	function setFocus(event){
    event.preventDefault();
    anchor_tag.setAttribute('tabindex','0');
    anchor_tag.setAttribute('aria-selected','True');
    anchor_tag.focus();
    document.getElementsByClassName("googleAdCampaign")[0].style.border = "1px grey dotted";
}




animation_markup = '<a href="javascript:;" onfocus="setFocus(event)" id ="adContainer" >'+
'<a id="close" onClick="closeGoogleAdonClick(event)" href="javascript:;" style="display:none"><img id="closeAd" style="display:none" width="20" height="20" role="img" alt="Close Ad" title="Close Ad" src="/images/close.png" onkeydown="closeGoogleAdKeyDown(event)"></a>'+
'<meta http-equiv="Content-type" content="text/html; charset=utf-8"> '+
'<title>Widgets Magazine</title> '+
'<style type="text/css" media="screen"> '+
'</style>'+
'<script async=\'async\' src=\'https://www.googletagservices.com/tag/js/gpt.js\'></script>'+
'<script>'+
'  var googletag = googletag || {};'+
'  googletag.cmd = googletag.cmd || [];'+
'</script>'+
''+
'<script>'+
'  googletag.cmd.push(function() {'+
'    googletag.defineSlot(\'/1064917/FUNDPOPUP\', [300, 250], \'div-gpt-ad-1483636590019-0\').addService(googletag.pubads());'+
'    googletag.pubads().enableSingleRequest();'+
'    googletag.enableServices();'+
'  });'+
'</script>'+
''+
''+
'<!-- /1064917/FUNDPOPUP -->'+
'<div id=\'div-gpt-ad-1483636590019-0\' style=\'height:250px; width:300px;\'>'+
''+
'<script>'+
'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1483636590019-0\'); });'+
'</script>'+
'</div>'+
'</a>';

function enableFacebookQuotes(){
    var fbdiv = document.getElementById('fbQuote');
	if (fbdiv != null){
		var fbrootDiv = document.createElement('div');
		fbrootDiv.id = 'fb-root';
		fbdiv.appendChild(fbrootDiv);
		
		var fbquoteDiv = document.createElement('div');
		fbquoteDiv.className = 'fb-quote no-copy';
		fbdiv.appendChild(fbquoteDiv);

		var addThisScript = document.createElement("script");
		addThisScript.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-599578b3dc648546";
		fbdiv.appendChild(addThisScript);
	}
}
