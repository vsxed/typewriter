$(document).ready(function () {
// -------
setInterval(function(){
	$('.cursor').toggleClass('invis');
},500);

$.fn.wrapInTag = function(opts) {

    var o = $.extend({
        words: [],
        tag: '<strong>'
    }, opts);

    return this.each(function() {
        var html = $(this).html();
        for (var i = 0, len = o.words.length; i < len; i++) {
            var re = new RegExp(o.words[i], "gi");
            html = html.replace(re, o.tag + '$&' + o.tag.replace('<', '</'));
        }
        $(this).html(html);
    });

};

function setCursor(node,pos){
    var node = (typeof node == "string" || 
    node instanceof String) ? document.getElementById(node) : node;
        if(!node){
            return false;
        }else if(node.createTextRange){
            var textRange = node.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd(pos);
            textRange.moveStart(pos);
            textRange.select();
            return true;
        }else if(node.setSelectionRange){
            node.setSelectionRange(pos,pos);
            return true;
        }
        return false;
    }

// $('#search-term').keyup(function() {
// 	$('#search-term').wrapInTag({
// 	    words: ['world', 'red'],
// 	    tag: '<strong>'
// 	});
// });

var totalcount=0;
$(function (){
    $('.term').keyup(
        function (){
              var arr = $(this).html().split(" ");
              var matchitems = count('hello', arr);
              //console.log(matchitems);
              if(matchitems > totalcount){
                $('#search-term').each(function(){
                  $(this).html(
                    $(this).before('<strong>hello</strong>').text().replace(
                      'hello',''))
                });

                    
          
                totalcount = matchitems;
              }
              if(matchitems < totalcount)
              {
                totalcount = matchitems;
              }
        }
    )
})

function count(value, array)
{
    var j=0;
    for(var i=0;i<array.length;i++)
    {
        if(array[i] == "hello"){
            j++;    
        }
    }
    return j;
}

// -------
});

