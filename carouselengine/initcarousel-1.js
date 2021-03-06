jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:64,
            showtitle:true,
            showdescription:true,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px;font-weight: bold; text-indent: 10px;font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:justify;}',
            descriptionbottomcss:'{color:#333; font-size:13px;font-weight: normal;text-indent: 10px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:justify; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:200,
        height:308,
        skinsfoldername:"",
        itembottomshadowimagetop:100,
        random:false,
        rownumber:1,
        skin:"Fashion",
        responsive:true,
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        showhoveroverlayalways:false,
        lightboxdescriptionbottomcss:"{color:#333; font-size:13px;font-weight: normal;text-indent: 10px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:justify; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        lightboxthumbwidth:80,
        imagefillcolor:"FFFFFF",
        showwatermark:false,
        arrowwidth:32,
        transparent:false,
        continuousduration:2500,
        watermarkpositioncss:"display:block;position:absolute;bottom:8px;right:8px;",
        lightboxthumbheight:60,
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        usescreenquery:false,
        screenquery:{
	tablet: {
		screenwidth: 900,
		visibleitems: 2
	},
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:16,
        navheight:16,
        watermarkimage:"",
        watermarkstyle:"text",
        imageheight:308,
        lightboxthumbbottommargin:8,
        lightboxtitlebottomcss:"{color:#333; font-size:14px;font-weight: bold; text-indent: 10px;font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:justify;}",
        enabletouchswipe:true,
        navstyle:"bullets",
        arrowstyle:"always",
        navswitchonmouseover:false,
        showitembackgroundimage:false,
        watermarklink:"http://amazingcarousel.com?source=watermark",
        arrowimage:"arrows-32-32-0.png",
        showbackgroundimage:true,
        spacing:18,
        scrollitems:1,
        navdirection:"horizontal",
        watermarktarget:"_blank",
        bottomshadowimagewidth:110,
        donotcrop:false,
        showhoveroverlay:true,
        height:308,
        itembackgroundimagewidth:105,
        backgroundimagetop:-8,
        width:200,
        hoveroverlayimage:"hoveroverlay-64-64-0.png",
        hidehoveroverlayontouch:false,
        transitioneasing:"easeOutExpo",
        lightboxshownavigation:false,
        itembackgroundimage:"",
        direction:"horizontal",
        watermarktext:"amazingcarousel.com",
        lightboxbarheight:64,
        continuous:false,
        pauseonmouseover:true,
        navimage:"bullet-16-16-0.png",
        lightboxthumbtopmargin:12,
        arrowhideonmouseleave:1000,
        backgroundimagewidth:125,
        loop:0,
        arrowheight:32,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        lightboxshowdescription:true,
        bottomshadowimagetop:95,
        showitembottomshadow:false,
        playvideoimagepos:"center",
        circular:true,
        showbottomshadow:false,
        showplayvideo:true,
        itembackgroundimagetop:0,
        lightboxshowtitle:true,
        scrollmode:"page",
        backgroundimage:"fon-dlya-prezentacii-vesna-09c.jpg",
        lightboxnogroup:true,
        navmode:"item",
        interval:3000,
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        itembottomshadowimagewidth:100,
        visibleitems:2,
        imagewidth:200,
        transitionduration:1000,
        autoplay:false
    });
});