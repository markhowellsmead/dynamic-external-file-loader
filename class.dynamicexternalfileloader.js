/*
dynamic external file loader
append javascript or css file to head of html document (call onload)

by mark howells-mead / permanenttourist.ch
v1.0 / 2012-04-06

usage with e.g. jQuery:
$(document).read(function(){
	FILELOADER = new dynamicFileLoader();
	FILELOADER.addScriptFile('myscriptfile.js');
	FILELOADER.addCSSFile('dynamicrules.css');
});

*/


//	helper function, applied to every object
	if(!Object.insertAfter){
		Object.prototype.insertAfter=function(referenceNode,newNode){
			referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling );
		}//insertAfter
	}

// dynamic file loader
	dynamicFileLoader = function(){};// initialize object
	dynamicFileLoader.prototype.addScriptFile=function(path){
		if(path){
			var htmlTag = document.createElement('script');
			htmlTag.type = 'text/javascript';
			htmlTag.async = true;
			htmlTag.src = path;
			var s = document.getElementsByTagName('script');
			s.insertAfter(s[s.length-1],htmlTag);
		}
	}//addScriptFile
	dynamicFileLoader.prototype.addCSSFile=function(path){
		if(path){
			var htmlTag = document.createElement('link');
			htmlTag.rel = 'stylesheet';
			htmlTag.type = 'text/css';
			htmlTag.href = path;
			var s = document.getElementsByTagName('link');
			s.insertAfter(s[s.length-1],htmlTag);
		}
	}//addCSSFile
