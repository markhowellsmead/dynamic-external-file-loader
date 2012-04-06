/*
dynamic external file loader
append javascript or css file to head of html document (call onload)

by mark howells-mead / permanenttourist.ch
v1.1 / 2012-04-06

usage with e.g. jQuery:
$(document).read(function(){
	FILELOADER = new dynamicFileLoader();
	FILELOADER.addScriptFile('myscriptfile.js');
	FILELOADER.addCSSFile('dynamicrules.css');
});

*/

dynamicFileLoader = function(){};// initialize object

dynamicFileLoader.prototype.addScriptFile=function(path){
	if(path){
		var htmlTag = document.createElement('script');
		htmlTag.type = 'text/javascript';
		htmlTag.async = true;
		htmlTag.src = path;
		var head = document.getElementsByTagName ("head")[0] || document.documentElement;
		head.insertBefore(htmlTag, head.lastChild);
		return htmlTag;
	}else{
		return false;
	}
}//addScriptFile

dynamicFileLoader.prototype.addCSSFile=function(path){
	if(path){
		var htmlTag = document.createElement('link');
		htmlTag.rel = 'stylesheet';
		htmlTag.type = 'text/css';
		htmlTag.href = path;
		var head = document.getElementsByTagName("head")[0] || document.documentElement;
		head.insertBefore(htmlTag, head.lastChild);
	}
}//addCSSFile

dynamicFileLoader.prototype.addCSSFileWithJQuery=function(path){
	if(path){
		var css = $('head').children(':last');
		css.attr({
			rel:  'stylesheet',
			type: 'text/css',
			href: path
		});
	}
}//addCSSFileWithJQuery

dynamicFileLoader.prototype.addScriptFileWithJQuery=function(path,onload){
	if(path && onload){
		$.getScript(path,onload);
	}else if(path){
		$.getScript(path);
	}
}//addScriptFileWithJQuery