<mt:Ignore>
/*  The following functions and variables are here to support legacy MT templates.
    If you have refreshed your JavaScript template but still use older MT comment
    templates, you may need to uncomment this block in order for those templates 
    to work properly. To use, simply remove the 'mt:Ignore' tags wrapping this
    block of code.
*/
    function hideDocumentElement(id) { return mtHide(id) }
    function showDocumentElement(id) { return mtShow(id) }
    function individualArchivesOnLoad() { return mtEntryOnLoad() }
    function writeCommenterGreeting() { return mtShowGreeting() }
    function rememberMe(f) { return mtRememberMe(f) }
    function forgetMe(f) { return mtForgetMe(f) }
    var commenter_name;
    var commenter_id;
    var commenter_url;
    var commenter_blog_ids;
    var mtcmtmail;
    var mtcmtauth;
    var mtcmthome;
    var captcha_timer;
</mt:Ignore>

// The cookie name to use for storing the blog-side comment session cookie.
var mtCookieName = "<$mt:UserSessionCookieName$>";
var mtCookieDomain = "<$mt:UserSessionCookieDomain$>";
var mtCookiePath = "<$mt:UserSessionCookiePath$>";
var mtCookieTimeout = <$mt:UserSessionCookieTimeout$>;

<mt:Ignore>
/***
 * Simple routine for showing a DOM element (applying a CSS display
 * attribute of 'none').
 */
</mt:Ignore>
function mtHide(id) {
    var el = (typeof id == "string") ? document.getElementById(id) : id;
    if (el) el.style.display = 'none';
}

<mt:Ignore>
/***
 * Simple routine for showing a DOM element (applying a CSS display
 * attribute of 'block').
 */
</mt:Ignore>
function mtShow(id) {
    var el = (typeof id == "string") ? document.getElementById(id) : id;
    if (el) el.style.display = 'block';
}

<mt:Ignore>
/***
 * A utility function for assigning/adding handlers to window events.
 */
</mt:Ignore>
function mtAttachEvent(eventName,func) {
    var onEventName = 'on' + eventName;
    var old = window[onEventName];
    if( typeof old != 'function' )
        window[onEventName] = func;
    else {
        window[onEventName] = function( evt ) {
            old( evt );
            return func( evt );
        };
    }
}

<mt:Ignore>
/***
 * Calls the event named, if there are handlers for it.
 */
</mt:Ignore>
function mtFireEvent(eventName,param) {
    var fn = window['on' + eventName];
    if (typeof fn == 'function') return fn(param);
    return;
}

if(!this.JSON){JSON={};}(function(){function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z';};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());

var MT = window.MT || {};

MT.cons = function () {
  return {
    LOG : 'log',
    WARN : 'warn',
    DEBUG : 'debug',
    INFO : 'info',
    ERR : 'error',
    JSON : 'json'
  };
}();

<mt:Ignore>
/**
 * Used for base functionality related to MT
 * 
 * @package MT
 * @class core
 * @global
 * @param {Object} o optional configuration object
 * Options:
 */
</mt:Ignore>
MT.core = function (o) {
  var _debug = false;
  
  return {
    <mt:Ignore>
    /**
     * Makes remote call and handles response
     * 
     * @param {String} url The URL endpoint
     * @param {String} respType The type of response expected
     * @param {Function} respHandler The function to handle the response
     * @return void
     */
    </mt:Ignore>
    connect : function (url,respType,respHandler) {
      var xh = mtGetXmlHttp();
      if (!xh) return false;
      
      xh.onreadystatechange = function() {
        if ( xh.readyState == 4 ) {
          if ( xh.status && ( xh.status != 200 ) ) {
            // error - ignore
          } else {
            switch (respType) {
              case 'json':
                respHandler(JSON.parse(xh.responseText));
                break;
                
              case 'xml':
                break;
                
              case 'text':
                break;
            }
          }
        }
      };
      
      xh.open('GET',url);
      xh.send(null);
    },
    
    getEl : function (el) {
      return MT.util.checkNodeType(el)==='element' ? id : (document.getElementById(el) || false);
    },
    
    addEvent : function (el,type,func,obj) {
      if(!obj && document.addEventListener) {
        el.addEventListener(type,func,false);
      } else if(obj && document.addEventListener) {
        el.addEventListener(type,function () {
          func.call(obj,event);
        },false);
      } else {
        if(obj) {
          el.attachEvent('on' + type,function () {
            func.call(obj,event);
          });
        } else {
          el.attachEvent('on' + type,function () {          
            func.call(el,event);
          });
        }
      }
    },
    
    <mt:Ignore>
    /**
     * Basic logging function
     * 
     * @param {String} level The log level (WARN|DEBUG|INFO|ERROR|LOG)
     * Specified by one of the MT constants
     * @param {String} msg The log message
     * @return void
     */
    </mt:Ignore>
    log : function (level,msg) {
      if(_debug && window.console) {
        switch(level) {
          case 'warn':
          case 'debug':
          case 'info':
          case 'error':
          case 'log':
            console[level](msg);
            break;
            
          default:
            return false; 
        }
      } else {
        return false;
      }
    }
  }
}();

<mt:Ignore>
/**
 * Utilities class
 * 
 * @package MT
 * @class util
 * @global
 * Options:
 */
</mt:Ignore>
MT.util = function () {
  return {
    toggleVisibility : {
      show : function () {
        var i = arguments.length;
        
        while(i--) {
          if(MT.util.checkNodeType(arguments[i])==='element') {
            arguments[i].style.visibility = 'visible';
          } else {
            MT.core.getEl(arguments[i]).style.visibility = 'visible';
          }
        }
      },
      
      hide : function () {
        var i = arguments.length;
        while(i--) {
          if(MT.util.checkNodeType(arguments[i])==='element') {
            arguments[i].style.visibility = 'hidden';
          } else {
            MT.core.getEl(arguments[i]).style.visibility = 'hidden';
          }
        }
      }
    },
    
    toggleDisplay : {
      show : function () {
        var i = arguments.length;
        while(i--) {
          if(MT.util.checkNodeType(arguments[i])==='element') {
            arguments[i].style.display = '';
          } else {
            MT.core.getEl(arguments[i]).style.display = '';
          }
        }
      },
      
      hide : function () {
        var i = arguments.length;
        while(i--) {
          if(MT.util.checkNodeType(arguments[i])==='element') {
            arguments[i].style.display = 'none';
          } else {
            MT.core.getEl(arguments[i]).style.display = 'none';
          }
        }
      }
    },
    
    <mt:Ignore>
    /**
     * Finds the nearest defining (i.e. with an id) parent to the given element
     * 
     * @param {HTMLElement} origin the node from which to start the search
     * @return {HTMLElement|Boolean} The parent node with an id attribute or false
     */
    </mt:Ignore>
    findDefiningParent : function (origin) {
      if(MT.util.checkNodeType(origin)==='element') {
        for(var node=origin.parentNode;node.parentNode;node=node.parentNode) {
          if((node.hasAttribute && node.hasAttribute('id')) || node.getAttribute('id')) {
            return node;
          }
        }
      }
      return false;
    },
    
    <mt:Ignore>
    /**
     * Tests objects to verify if they are DOM nodes
     * 
     * @param {Object} obj The object to be tested
     * @return {String} the values 'element'|'textnode'|'whitespace'
     */
    </mt:Ignore>
    checkNodeType : function (obj) {
      if (obj && obj.nodeName){
        switch (obj.nodeType) {
          case 1: return 'element';
          case 3: return (/\S/).test(obj.nodeValue) ? 'textnode' : 'whitespace';
        }
      }
    }
  }
}();

<mt:Ignore>
/**
 * mtPaginateComments takes the currently generated static page and either:
 *  - Attempts to find an individual comment link in the query string
 *  - If no link is found, the static page loads
 * In either case, the pagination event is set
 */
</mt:Ignore>
(function () {
  var M = MT.core,
      c = MT.cons,
      u = MT.util,
      cache,
      isLoading,
      direction,
      currentComments,
      commentAnchor,
      commentArrId,
      commentsPerPage,
      commentsTotalPages,
      loadingIcon,
      pageNum,
      commentsOffset,
      totalComments,
      entryID,
      commentContentDiv,
      topNav,
      nav,
      currentCommentsSpan,
      topCurrentCommentsSpan;
            
  M.addEvent(window,'load',_init);
  
  /**
   * Initializes the class
   * 
   * @return void
   */
  function _init () {
    if(!MT.entryCommentCount) {
      return;
    }
    
    _initializeVariables();
    _setCommentOffset(false);
    _checkForAnchor();
		_setCurrentComments();
    _toggleNavLinks();
    _initializeEvents();
  }
  
  <mt:Ignore>
  /**
   * Initializes variables to their initial values
   * 
   * @return void
   */
  </mt:Ignore>
  function _initializeVariables() {
    cache = {};
    isLoading = false;
    commentAnchor = '';
    commentArrId = '';
    commentsPerPage = MT.commentsPerPage || 50;
    currentComments = '';
    direction = 'ascend';
    entryID = MT.entryID;
    totalComments = MT.entryCommentCount;
    commentsTotalPages = Math.ceil(totalComments / commentsPerPage);
    pageNum = 1;
    
    loadingIcon = "<img title='Loading...' src='<$MTStaticWebPath$>images/indicator.white.gif' alt='Loading' />";
    
    commentContentDiv = M.getEl("comments-content");
    topNav = M.getEl("top-comment-nav");
    nav = M.getEl("comment-nav");
    
    currentCommentsSpan = M.getEl("current-comments");
    topCurrentCommentsSpan = M.getEl("top-current-comments");
  }
  
  function _initializeEvents() {
    if (commentsPerPage < totalComments) {
      M.addEvent(nav,'click',_handleEvents);
      M.addEvent(topNav,'click',_handleEvents);
    }
  }
  
  <mt:Ignore>
  /**
   * Checks for an existing anchor tag in the query string
   * If found, it looks for it on the current page
   * If that fails, it tries to find it in comment list and loads
   * the desired page
   * 
   * @return void
   */
  </mt:Ignore>
  function _checkForAnchor() {
    var found = String(window.location.hash).match( /comment-(\d{1,6})/ );
		
		if (found) {
		  M.log(c.DEBUG,found);
			if (!Object.prototype.hasOwnProperty.call(M.getEl(found[0]), 'className')) {
				if (_findIdMatch(found[1])) {
    			pageNum = Math.floor(commentArrId / commentsPerPage) + 1;
    			M.log(c.DEBUG,'Comment Array Id: ' + commentArrId);
    			M.log(c.DEBUG,'Comments Per Page: ' + commentsPerPage);
    			M.log(c.DEBUG,'Page Number: ' + pageNum);
    			M.log(c.DEBUG,'Comment Offset: ' + _getCommentOffset());
    			_updateComments();
    		}
			}
		}
  }
  
  <mt:Ignore>
  /**
   * Sets commentsOffset (i.e. the offset number to the remote list)
   * 
   * @return void
   */
  </mt:Ignore>
  function _setCommentOffset() {
    commentsOffset = commentsPerPage * (pageNum-1);
  }
  
  <mt:Ignore>
  /**
   * Gets the commentsOffset (i.e. the offset number to the remote list)
   * 
   * @return void
   */
  </mt:Ignore>
  function _getCommentOffset() {
    return commentsOffset;
  }
  
  <mt:Ignore>
  /**
   * General event handler
   * 
   * @param {Event} e The event object
   * @return void
   */
  </mt:Ignore>
  function _handleEvents (e) {
    var origin = e.target || e.srcElement,
        parentId;
        
    // stupid IE
    origin = origin.id && M.getEl(origin.id) || false;

    if(origin) {
      parentId = u.checkNodeType(origin.parentNode)==='element' && origin.parentNode.getAttribute('id') && origin.parentNode.id;
    } else {
      return false;
    }
    
    switch(origin.nodeName) {
      case 'A':
        switch (parentId) {
          case 'prev-comments':
          case 'top-prev-comments':
            if(e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue =	false;
            }
            if(!isLoading) {
              _previousPage();
            }
            break;
          case 'next-comments':
          case 'top-next-comments':
            if(e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue =	false;
            }
            if(!isLoading) {
              _nextPage();
            }
            break;
        }
        break;
    }
  }
  
  <mt:Ignore>
  /**
   * Toggles the visibility of the navigation links
   * 
   * @return void
   */
  </mt:Ignore>
  function _toggleNavLinks () {
    M.log(c.DEBUG,M.getEl('top-prev-comments'));
    if(pageNum <= commentsTotalPages && pageNum !== 1) {
      u.toggleVisibility.show('prev-comments');
      u.toggleVisibility.show('top-prev-comments');
    }
    
    if(pageNum >= 1 && pageNum !== commentsTotalPages) {
      u.toggleVisibility.show('next-comments');
      u.toggleVisibility.show('top-next-comments');
    }
    
    if(pageNum===1 || nav.style.visibility==='hidden') {
      u.toggleVisibility.hide('prev-comments');
      u.toggleVisibility.hide('top-prev-comments');
    }
    
    if(pageNum===commentsTotalPages || nav.style.visibility==='hidden') {
      u.toggleVisibility.hide('next-comments');
      u.toggleVisibility.hide('top-next-comments');
    }
  }
  
  <mt:Ignore>
  /**
   * Determines appropriate action based on the id of the parent
   * clicked link. Decrements pageNum based on id.
   * 
   * @param {String} id the id of the parent of the clicked link
   * @return void
   */
  </mt:Ignore>
  function _nextPage () {
    if(pageNum < commentsTotalPages) {
      pageNum++;
      _updateComments();
    }
  }
  
  <mt:Ignore>
  /**
   * Determines appropriate action based on the id of the parent
   * clicked link. Increments/decrements pageNum based on id.
   * 
   * @param {String} id the id of the parent of the clicked link
   * @return void
   */
  </mt:Ignore>
  function _previousPage() {
    if(pageNum > 1) {
      pageNum--;
      _updateComments();
    }
  }
  
  <mt:Ignore>
  /**
   * Searches for a particular comment in the list of ids
   * 
   * @param {String} id The id for which to search
   * @return {Boolean} true, if found, false otherwise
   */
  </mt:Ignore>
  function _findIdMatch (id) {
    var len = MT.commentIds.length;
    
  	while (len--) {
  		if (MT.commentIds[len] == id) {
  			commentAnchor = "comment-" + id;
  			commentArrId = len;
  			return true;
  		}
  	}
  	
  	return false;
  }
  
  <mt:Ignore>
  /**
   * Sets the current comment counts on the page
   *
   * @return void
   */
  </mt:Ignore>
  function _setCurrentComments() {
    var commentsOnPage = pageNum != commentsTotalPages ? commentsOffset + commentsPerPage : totalComments;
    
    _setCurrentCommentsContent([commentsOffset+1," - ",commentsOnPage].join(''));
  }
  
  <mt:Ignore>
  /**
   * Sets the "current-comments" element with the HTML value
   * 
   * @param {String|Element} currentCommentsHTML The content to be set
   * @return void
   */
  </mt:Ignore>
  function _setCurrentCommentsContent(currentCommentsHTML) {
    currentCommentsSpan.innerHTML = currentCommentsHTML;
    topCurrentCommentsSpan.innerHTML = currentCommentsHTML;
  }
  
  <mt:Ignore>
  /**
   * Sets the content of the comment list
   * 
   * @param {String|Element} commentHTML The content to be set 
   * @return void
   */
  </mt:Ignore>
  function _setCommentContent(commentHTML) {
    commentContentDiv.innerHTML = commentHTML;
  }
  
  <mt:Ignore>
  /**
   * Builds the appropriate URL to make a remote call to get the
   * next set of comments
   * 
   * @return void
   */
  </mt:Ignore>
  function _updateComments() {
    var comments, jsonUrl;
    isLoading = true;
    _setCurrentCommentsContent(loadingIcon);
    _setCommentOffset();
    
    jsonUrl = [
        "<$mt:CGIPath$><$mt:CommentScript$>?__mode=comment_listing&direction=",
        direction,
        "&entry_id=",
        entryID,
        "&limit=",
        commentsPerPage,
        "&offset=",
        _getCommentOffset()
      ].join('');
  	
  	if (!commentAnchor) {
      commentAnchor = "comments-content";
    }
    
    if(cache.hasOwnProperty(jsonUrl)) {
      _refreshComments(cache[jsonUrl]);
      isLoading = false;
    } else {
      M.connect(jsonUrl,c.JSON,function (json) {
        cache[jsonUrl] = json.comments;
    	  _refreshComments(json.comments);
    	  isLoading = false;
      });
    }
  }
  
  <mt:Ignore>
  /**
   * Refreshes the comment data with the current
   * 
   * @param {String} commentData The data used to replace current comments
   * @return void
   */
  </mt:Ignore>
  function _refreshComments(commentData) {
    _setCommentContent(commentData);
    _setCurrentComments();
    window.location.hash = 'reset';
    window.location.hash = commentAnchor;
    _toggleNavLinks();
  }
})();

<mt:Ignore>
/***
 * Displays a relative date.
 * 'ts' is a Date object, 'fds' is a string of the date which
 * will be displayed if the given date is older than 1 week.
 */
</mt:Ignore>
function mtRelativeDate(ts, fds) {
    var now = new Date();
    var ref = ts;
    var delta = Math.floor((now.getTime() - ref.getTime()) / 1000);

    var str;
    if (delta < 60) {
        str = 'hace unos momentos';
    } else if (delta <= 86400) {
        // less than 1 day
        var hours = Math.floor(delta / 3600);
        var min = Math.floor((delta % 3600) / 60);
        if (hours == 1)
            str = 'hace 1 hora';
        else if (hours > 1)
            str = 'hace 2 horas'.replace(/2/, hours);
        else if (min == 1)
            str = 'hace 1 minute';
        else
            str = 'hace 2 minutes'.replace(/2/, min);
    } else if (delta <= 604800) {
        // less than 1 week
        var days = Math.floor(delta / 86400);
        var hours = Math.floor((delta % 86400) / 3600);
        if (days == 1)
            str = 'hace 1 día';
        else if (days > 1)
            str = 'hace 2 días'.replace(/2/, days);
        else if (hours == 1)
            str = 'hace 1 hora';
        else
            str = 'hace 2 horas'.replace(/2/, hours);
    }
    return str ? str : fds;
}

<mt:Ignore>
/***
 * Used to display an edit link for the given entry.
 */
</mt:Ignore>
function mtEditLink(entry_id, author_id) {
    <mt:Ignore>
    // This function has been inactivated by default because of the security issue.
    // You can activate this function if "AdminScript" is already known by visitor.
    </mt:Ignore>
    <mt:Ignore>

    var u = mtGetUser();
    if (! u) return;
    if (! entry_id) return;
    if (! author_id) return;
    if (u.id != author_id) return;
    var link = '<a href="<$mt:AdminScript$>?__mode=view&amp;_type=entry&amp;id=' + entry_id + '">Editar</a>';
    document.write(link);

    </mt:Ignore>
}

<mt:Ignore>
/***
 * Called when an input field on the comment form receives focus.
 */
</mt:Ignore>
function mtCommentFormOnFocus() {
    // if CAPTCHA is enabled, this causes the captcha image to be
    // displayed if it hasn't been already.
    mtShowCaptcha();
}

<mt:Ignore>
/***
 * Displays a captcha field for anonymous commenters.
 */
</mt:Ignore>
var mtCaptchaVisible = false;
function mtShowCaptcha() {
    var u = mtGetUser();
    if ( u && u.is_authenticated ) return;
    if (mtCaptchaVisible) return;
    var div = document.getElementById('comments-open-captcha');
    if (div) {
        div.innerHTML = '<$mt:CaptchaFields$>';
        mtCaptchaVisible = true;
    }
}

<mt:Ignore>
/* user object
    -- saved in user cookie --
    u.name (display name)
    u.url (link to home page)
    u.email (for anonymous only)
    u.userpic (url for commenter/author)
    u.profile (link to profile)
    u.is_trusted (boolean)
    u.is_author (user has posting rights)
    u.is_banned (banned status; neither post/comment perms)
    u.can_post (has permission to post)
    u.can_comment (has permission to comment)

    -- status fields --
    u.is_authenticated (boolean)
    u.is_anonymous (user is anonymous)
*/
</mt:Ignore>

var is_preview;
var user;
<mt:Ignore>
/***
 * Assigns a user object as the actively logged in user; also saves the
 * user information in a browser cookie.
 */
</mt:Ignore>
function mtSetUser(u) {
    if (u) {
        // persist this
        user = u;
        mtSaveUser();
        // sync up user greeting
        mtFireEvent('usersignin');
    }
}

<mt:Ignore>
/***
 * Simple function that escapes single quote characters for storing
 * in a cookie.
 */
</mt:Ignore>
function mtEscapeJS(s) {
    s = s.replace(/'/g, "&apos;");
    return s;
}

<mt:Ignore>
/***
 * Simple function that unescapes single quote characters that were
 * stored in a cookie.
 */
</mt:Ignore>
function mtUnescapeJS(s) {
    s = s.replace(/&apos;/g, "'");
    return s;
}

<mt:Ignore>
/***
 * Serializes a user object into a string, suitable for storing as a cookie.
 */
</mt:Ignore>
function mtBakeUserCookie(u) {
    var str = "";
    if (u.name) str += "name:'" + mtEscapeJS(u.name) + "';";
    if (u.url) str += "url:'" + mtEscapeJS(u.url) + "';";
    if (u.email) str += "email:'" + mtEscapeJS(u.email) + "';";
    if (u.is_authenticated) str += "is_authenticated:'1';";
    if (u.profile) str += "profile:'" + mtEscapeJS(u.profile) + "';";
    if (u.userpic) str += "userpic:'" + mtEscapeJS(u.userpic) + "';";
    if (u.sid) str += "sid:'" + mtEscapeJS(u.sid) + "';";
    str += "is_trusted:'" + (u.is_trusted ? "1" : "0") + "';";
    str += "is_author:'" + (u.is_author ? "1" : "0") + "';";
    str += "is_banned:'" + (u.is_banned ? "1" : "0") + "';";
    str += "can_post:'" + (u.can_post ? "1" : "0") + "';";
    str += "can_comment:'" + (u.can_comment ? "1" : "0") + "';";
    str = str.replace(/;$/, '');
    return str;
}

<mt:Ignore>
/***
 * Unserializes a user cookie and returns a user object with the restored
 * state.
 */
</mt:Ignore>
function mtUnbakeUserCookie(s) {
    if (!s) return;

    var u = {};
    var m;
    while (m = s.match(/^((name|url|email|is_authenticated|profile|userpic|sid|is_trusted|is_author|is_banned|can_post|can_comment):'([^']+?)';?)/)) {
        s = s.substring(m[1].length);
        if (m[2].match(/^(is|can)_/)) // boolean fields
            u[m[2]] = m[3] == '1' ? true : false;
        else
            u[m[2]] = mtUnescapeJS(m[3]);
    }
    if (u.is_authenticated) {
        u.is_anonymous = false;
    } else {
        u.is_anonymous = true;
        u.can_post = false;
        u.is_author = false;
        u.is_banned = false;
        u.is_trusted = false;
    }
    return u;
}

<mt:Ignore>
/***
 * Retrieves an object of the currently logged in user's state.
 * If no user is logged in or cookied, this will return null.
 */
</mt:Ignore>
function mtGetUser() {
    if (!user) {
        var cookie = mtGetCookie(mtCookieName);
        if (!cookie) return;
        user = mtUnbakeUserCookie(cookie);
        if (! user) {
            user = {};
            user.is_anonymous = true;
            user.can_post = false;
            user.is_author = false;
            user.is_banned = false;
            user.is_trusted = false;
        }
    }
    return user;
}

<mt:Ignore>
/***
 * Issues a request to the MT comment script to retrieve the currently
 * logged-in user (if any).
 */
</mt:Ignore>
var mtFetchedUser = false;
<mt:IfBlog>
function mtFetchUser(cb) {
    if (!cb) cb = 'mtSetUser';
    if ( ( cb == 'mtSetUser' ) && mtGetUser() ) {
        var url = document.URL;
        url = url.replace(/#.+$/, '');
        url += '#comments-open';
        location.href = url;
    } else {
        // we aren't using AJAX for this, since we may have to request
        // from a different domain. JSONP to the rescue.
        mtFetchedUser = true;
        var u = mtGetUser();
        var script = document.createElement('script');
        var ts = new Date().getTime();
        script.src = '<$mt:CGIPath$><$mt:CommentScript$>?__mode=userinfo&blog_id=<$mt:BlogID$>&jsonp=' + cb + '&ts=' + ts + '&sid=' + u.sid;
        (document.getElementsByTagName('head'))[0].appendChild(script);
    }
}

function mtVerifySession(cb) {
    if (!cb) return;
    var script = document.createElement('script');
    var ts = new Date().getTime();
    var u = mtGetUser();
    script.src = '<$mt:CGIPath$><$mt:CommentScript$>?__mode=verify_session&blog_id=<$mt:BlogID$>&jsonp=' + cb + '&ts=' + ts + '&sid=' + u.sid;
    (document.getElementsByTagName('head'))[0].appendChild(script);
}
</mt:IfBlog>

<mt:Ignore>
/***
 * Called when the 'Remember me' checkbox is changed. If the checkbox
 * is cleared, the cached user cookie is immediately cleared.
 */
</mt:Ignore>
function mtRememberMeOnClick(b) {
    if (!b.checked)
        mtClearUser(b.form);
    return true;
}

<mt:Ignore>
/***
 * Called when comment form is sent.
 * Required parameter: Form DOM object of comment form.
 * If form has a 'bakecookie' member, it will be used to signal
 * storing the anonymous commenter information to a cookie.
 * If form has a 'armor' member, it will be used to store
 * a token that is checked by the comment script.
 */
</mt:Ignore>
<mt:IfBlog>
var mtRequestSubmitted = false;
function mtCommentOnSubmit(f) {
    if (!mtRequestSubmitted) {
        mtRequestSubmitted = true;

        if (f.armor)
            f.armor.value = '<$mt:BlogSitePath encode_sha1="1"$>';
        if (f.bakecookie && f.bakecookie.checked)
            mtSaveUser(f);

        // disable submit buttons
        if (f.preview_button) f.preview_button.disabled = true;
        if (f.post) f.post.disabled = true;

        var u = mtGetUser();
        if ( !is_preview && ( u && u.is_authenticated ) ) {
            // validate session; then submit
            mtVerifySession('mtCommentSessionVerify');
            return false;
        }

        return true;
    }
    return false;
}

function mtCommentSessionVerify(app_user) {
    var f = document['comments_form'];
    if ( app_user && app_user.verified ) {
        f.submit();
    } else {
        alert('La sesión ha caducado. Por favor, identifíquese de nuevo para comentar.');
        mtClearUser();
        mtFireEvent('usersignin');
<mt:IfRegistrationRequired>
        mtShow('comments-form');
        mtHide('comments-open-footer');
</mt:IfRegistrationRequired>
    }
}

function mtUserOnLoad() {
    var u = mtGetUser();

    // if the user is authenticated, hide the 'anonymous' fields
    // and any captcha input if already shown
    if ( document.getElementById('comments-form')) {
        if ( u && u.is_authenticated ) {
            mtShow('comments-form');
            mtHide('comments-open-data');
            if (mtCaptchaVisible)
                mtHide('comments-open-captcha');
        } else {
<mt:IfRegistrationRequired>
            mtHide('comments-form');
</mt:IfRegistrationRequired>
        }
        if ( u && u.is_banned )
            mtHide('comments-form');

        // if we're previewing a comment, make sure the captcha
        // field is visible
        if (is_preview)
            mtShowCaptcha();
        else
            mtShowGreeting();

        // populate anonymous comment fields if user is cookied as anonymous
        var cf = document['comments_form'];
        if (cf) {
            if (u && u.is_anonymous) {
                if (u.email) cf.email.value = u.email;
                if (u.name) cf.author.value = u.name;
                if (u.url) cf.url.value = u.url;
                if (cf.bakecookie)
                    cf.bakecookie.checked = u.name || u.email;
            } else {
                if (u && u.sid && cf.sid)
                    cf.sid.value = u.sid;
            }
            if (cf.post && cf.post.disabled)
                cf.post.disabled = false;
            if (cf.preview_button && cf.preview_button.disabled)
                cf.preview_button.disabled = false;
            mtRequestSubmitted = false;
        }
    }
}
</mt:IfBlog>

<mt:Ignore>
/***
 * Called when an entry archive page is loaded.
 * This routine controls which elements of the comment form are shown
 * or hidden, depending on commenter type and blog configuration.
 */
</mt:Ignore>
<mt:IfBlog>
function mtEntryOnLoad() {
    var cf = document['comments_form'];
    if (cf && cf.preview) cf.preview.value = '';
    <mt:Unless tag="IfPingsAccepted">mtHide('trackbacks-info');</mt:Unless>
    <mt:Unless tag="IfCommentsAccepted">mtHide('comments-open');</mt:Unless>
    mtFireEvent('usersignin');
}

function mtEntryOnUnload() {
    if (mtRequestSubmitted) {
        var cf = document['comments_form'];
        if (cf) {
            if (cf.post && cf.post.disabled)
                cf.post.disabled = false;
            if (cf.preview_button && cf.preview_button.disabled)
                cf.preview_button.disabled = false;
        }
        mtRequestSubmitted = false;
    }
    return true;
}

mtAttachEvent('usersignin', mtUserOnLoad);
</mt:IfBlog>

<mt:Ignore>
/***
 * Handles the action of the "Sign in" link. First clears any existing
 * user cookie, then directs to the MT comment script to sign the user in.
 */
</mt:Ignore>
function mtSignIn() {
    var doc_url = document.URL;
    doc_url = doc_url.replace(/#.+/, '');
    var url = '<$mt:SignInLink$>';
    if (is_preview) {
        if ( document['comments_form'] ) {
            var entry_id = document['comments_form'].entry_id.value;
            url += '&entry_id=' + entry_id;
        } else {
            url += '&return_url=<$mt:BlogURL encode_url="1"$>';
        }
    } else {
        url += '&return_url=' + encodeURIComponent(doc_url);
    }
    mtClearUser();
    location.href = url;
}

function mtSignInOnClick(sign_in_element) {
    var el;
    if (sign_in_element) {
        // display throbber
        el = document.getElementById(sign_in_element);
        if (!el)  // legacy MT 4.x element id
            el = document.getElementById('comment-form-external-auth');
    }
    if (el)
        el.innerHTML = 'Iniciando sesión... <span class="status-indicator">&nbsp;</span>';

    mtClearUser(); // clear any 'anonymous' user cookie to allow sign in
    mtSignIn();
    return false;
}

function mtSetUserOrLogin(u) {
    if (u && u.is_authenticated) {
        mtSetUser(u);
    } else {
        // user really isn't logged in; so let's do this!
        mtSignIn();
    }
}

<mt:Ignore>
/***
 * Handles sign out from the web site.
 * First clears any existing user cookie, then direts to the MT comment
 * script to sign the user out.
 */
</mt:Ignore>
function mtSignOut(entry_id) {
    mtClearUser();
    var doc_url = document.URL;
    doc_url = doc_url.replace(/#.+/, '');
    var url = '<$mt:SignOutLink$>';
    if (is_preview) {
        if ( document['comments_form'] ) {
            var entry_id = document['comments_form'].entry_id.value;
            url += '&entry_id=' + entry_id;
        } else {
            url += '&return_url=<$mt:BlogURL encode_url="1"$>';
        }
    } else {
        url += '&return_url=' + encodeURIComponent(doc_url);
    }
    location.href = url;
}

<mt:Ignore>
/***
 * Handles the action of the "Sign out" link.
 */
</mt:Ignore>
function mtSignOutOnClick() {
    mtSignOut();
    return false;
}

<mt:Ignore>
/***
 * Handles the display of the greeting message, depending on what kind of
 * user is logged in and blog comment policy.
 */
</mt:Ignore>
<mt:IfBlog>
function mtShowGreeting() {
<mt:IfRegistrationAllowed>
    var reg_reqd = <mt:IfRegistrationRequired>true<mt:Else>false</mt:IfRegistrationRequired>;

    var cf = document['comments_form'];
    if (!cf) return;

    var el = document.getElementById('comment-greeting');
    if (!el)  // legacy MT 4.x element id
        el = document.getElementById('comment-form-external-auth');
    if (!el) return;

    var eid = cf.entry_id;
    var entry_id;
    if (eid) entry_id = eid.value;

    var phrase;
    var u = mtGetUser();

    if ( u && u.is_authenticated ) {
        if ( u.is_banned ) {
            phrase = 'No tiene permisos para comentar en este blog (\<a href=\"javas\cript:void(0);\" onclick=\"return mtSignOutOnClick();\"\>cerrar sesión\<\/a\>)';
        } else {
            var user_link;
            if ( u.is_author ) {
                user_link = '<a href="<$mt:CGIPath$><$mt:CommentScript$>?__mode=edit_profile&blog_id=<mt:BlogID>&return_url=' + encodeURIComponent( location.href );
                user_link += '">' + u.name + '</a>';
            } else {
                // registered user, but not a user with posting rights
                if (u.url)
                    user_link = '<a href="' + u.url + '">' + u.name + '</a>';
                else
                    user_link = u.name;
            }
            // TBD: supplement phrase with userpic if one is available.
            phrase = 'Gracias por identificarse, __NAME__. (\<a href=\"javas\cript:void(0)\" onclick=\"return mtSignOutOnClick();\"\>salir\<\/a\>)';
            phrase = phrase.replace(/__NAME__/, user_link);
        }
    } else {
        if (reg_reqd) {
            phrase = '\<a href=\"javas\cript:void(0)\" onclick=\"return mtSignInOnClick(\'comment-greeting\')\"\>Iniciar una sesión\<\/a\>.';
        } else {
            phrase = 'Para comentar \<a href=\"javas\cript:void(0)\" onclick=\"return mtSignInOnClick(\'comment-greeting\')\"\>inicie una sesión\<\/a\> o hágalo de forma anónima.';
        }
    }
    el.innerHTML = phrase;
<mt:Else>
    mtShowCaptcha();
</mt:IfRegistrationAllowed>
}
</mt:IfBlog>

<mt:Ignore>
/***
 * Handles the action of the 'Reply' links.
 */
</mt:Ignore>
function mtReplyCommentOnClick(parent_id, author) {
    mtShow('comment-form-reply');

    var checkbox = document.getElementById('comment-reply');
    var label = document.getElementById('comment-reply-label');
    var text = document.getElementById('comment-text');

    // Populate label with new values
    var reply_text = 'Respondiendo al \<a href=\"#comment-__PARENT__\" onclick=\"location.href=this.href; return false\"\>comentario de __AUTHOR__\<\/a\>';
    reply_text = reply_text.replace(/__PARENT__/, parent_id);
    reply_text = reply_text.replace(/__AUTHOR__/, author);
    label.innerHTML = reply_text;

    checkbox.value = parent_id; 
    checkbox.checked = true;
    try {
        // text field may be hidden
        text.focus();
    } catch(e) {
    }

    mtSetCommentParentID();
}

<mt:Ignore>
/***
 * Sets the parent comment ID when replying to a comment.
 */
</mt:Ignore>
function mtSetCommentParentID() {
    var checkbox = document.getElementById('comment-reply');
    var parent_id_field = document.getElementById('comment-parent-id');
    if (!checkbox || !parent_id_field) return;

    var pid = 0;
    if (checkbox.checked == true)
        pid = checkbox.value;
    parent_id_field.value = pid;
}

<mt:Ignore>
/***
 * Persists a copy of the current user cookie into the browser cookie stash.
 */
</mt:Ignore>
function mtSaveUser(f) {
    // We can't reliably store the user cookie during a preview.
    if (is_preview) return;

    var u = mtGetUser();

    if (f && (!u || u.is_anonymous)) {
        if ( !u ) {
            u = {};
            u.is_authenticated = false;
            u.can_comment = true;
            u.is_author = false;
            u.is_banned = false;
            u.is_anonymous = true;
            u.is_trusted = false;
        }
        if (f.author != undefined) u.name = f.author.value;
        if (f.email != undefined) u.email = f.email.value;
        if (f.url != undefined) u.url = f.url.value;
    }

    if (!u) return;

    var cache_period = mtCookieTimeout * 1000;

    // cache anonymous user info for a long period if the
    // user has requested to be remembered
    if (u.is_anonymous && f && f.bakecookie && f.bakecookie.checked)
        cache_period = 365 * 24 * 60 * 60 * 1000;

    var now = new Date();
    mtFixDate(now);
    now.setTime(now.getTime() + cache_period);

    var cmtcookie = mtBakeUserCookie(u);
    mtSetCookie(mtCookieName, cmtcookie, now, mtCookiePath, mtCookieDomain,
        location.protocol == 'https:');
}

<mt:Ignore>
/***
 * Clears the blog-side user cookie.
 */
</mt:Ignore>
function mtClearUser() {
    user = null;
    mtDeleteCookie(mtCookieName, mtCookiePath, mtCookieDomain,
        location.protocol == 'https:');
}

<mt:Ignore>
/***
 * Sets a browser cookie.
 */
</mt:Ignore>
function mtSetCookie(name, value, expires, path, domain, secure) {
    if (domain && ( domain.match(/^\.?localhost$/) || domain.match(/^[0-9\.]+$/) ))
        domain = null;
    var curCookie = name + "=" + encodeURIComponent(value) +
        (expires ? "; expires=" + expires.toGMTString() : "") +
        (path ? "; path=" + path : "") +
        (domain ? "; domain=" + domain : "") +
        (secure ? "; secure" : "");
    document.cookie = curCookie;
}

<mt:Ignore>
/***
 * Retrieves a browser cookie.
 */
</mt:Ignore>
function mtGetCookie(name) {
    var prefix = name + '=';
    var c = document.cookie;
    var cookieStartIndex = c.indexOf(prefix);
    if (cookieStartIndex == -1)
        return '';
    var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = c.length;
    var this_cookie = c.substring(cookieStartIndex + prefix.length, cookieEndIndex);
    if ( this_cookie.match(/\%u/i) ) {
        return '';
    }
    return decodeURIComponent( this_cookie );
}

<mt:Ignore>
/***
 * Deletes a browser cookie.
 */
</mt:Ignore>
function mtDeleteCookie(name, path, domain, secure) {
    if (mtGetCookie(name)) {
        if (domain && domain.match(/^\.?localhost$/))
            domain = null;
        document.cookie = name + "=" +
            (path ? "; path=" + path : "") +
            (domain ? "; domain=" + domain : "") +
            (secure ? "; secure" : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function mtFixDate(date) {
    var skew = (new Date(0)).getTime();
    if (skew > 0)
        date.setTime(date.getTime() - skew);
}

<mt:Ignore>
/***
 * Returns a XMLHttpRequest object (for Ajax operations).
 */
</mt:Ignore>
function mtGetXmlHttp() {
    if ( !window.XMLHttpRequest ) {
        window.XMLHttpRequest = function() {
            var types = [
                "Microsoft.XMLHTTP",
                "MSXML2.XMLHTTP.5.0",
                "MSXML2.XMLHTTP.4.0",
                "MSXML2.XMLHTTP.3.0",
                "MSXML2.XMLHTTP"
            ];

            for ( var i = 0; i < types.length; i++ ) {
                try {
                    return new ActiveXObject( types[ i ] );
                } catch( e ) {}
            }

            return undefined;
        };
    }
    if ( window.XMLHttpRequest )
        return new XMLHttpRequest();
}

// BEGIN: fast browser onload init
// Modifications by David Davis, DWD
// Dean Edwards/Matthias Miller/John Resig
// http://dean.edwards.name/weblog/2006/06/again/?full#comment5338

function mtInit() {
    // quit if this function has already been called
    if (arguments.callee.done) return;

    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;

    // kill the timer
    // DWD - check against window
    if ( window._timer ) clearInterval(window._timer);

    // DWD - fire the window onload now, and replace it
    if ( window.onload && ( window.onload !== window.mtInit ) ) {
        window.onload();
        window.onload = function() {};
    }
<mt:IfBlog>
<mt:IfRegistrationAllowed>
    mtInitCommenter();
</mt:IfRegistrationAllowed>
</mt:IfBlog>
}

/* for Mozilla/Opera9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", mtInit, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
    if (this.readyState == "complete") {
        mtInit(); // call the onload handler
    }
};
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
    _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            mtInit(); // call the onload handler
        }
    }, 10);
}

/* for other browsers */
window.onload = mtInit;

// END: fast browser onload init

<mt:IfBlog>
<mt:IfRegistrationAllowed>

function mtLoggedIn(ott) {
    var script = document.createElement('script');
    var ts = new Date().getTime();
    script.src = '<$mt:CGIPath$><$mt:CommentScript$>?__mode=userinfo&jsonp=mtSaveUserInfo&ott=' + ott;
    (document.getElementsByTagName('head'))[0].appendChild(script);
}

function mtRefreshUserInfo(sid) {
    var script = document.createElement('script');
    var ts = new Date().getTime();
    script.src = '<$mt:CGIPath$><$mt:CommentScript$>?__mode=userinfo&jsonp=mtSaveUserInfo&sid=' + sid;
    (document.getElementsByTagName('head'))[0].appendChild(script);
}

function mtSaveUserInfo (u) {
    if ( u.error ) {
        if ( !user ) {
            alert('El intento de registro no tuvo éxito; por favor, inténtelo de nuevo.');
        }
        return;
    }
    user = null;
    var cmtcookie = mtBakeUserCookie(u);
    var now = new Date();
    var cache_period = mtCookieTimeout * 1000;

    // cache anonymous user info for a long period if the
    // user has requested to be remembered
    mtFixDate(now);
    now.setTime(now.getTime() + cache_period);
    mtSetCookie(mtCookieName, cmtcookie, now, mtCookiePath, mtCookieDomain,
        location.protocol == 'https:');
    mtFireEvent('usersignin');
}

function mtInitCommenter () {
    /***
     * If request contains a '#_login' or '#_logout' hash, use this to
     * also delete the blog-side user cookie, since we're coming back from
     * a login, logout or edit profile operation.
     */

    var hash = ( window.location.hash );
    hash.match( /^#_(.*)$/ );
    var command = RegExp.$1 || '';
    if ( command === 'refresh' ) {
        // Back from profile edit screen.
        // Reload userinfo with current session ID.
        var u = mtGetUser();
        user  = null;
        mtRefreshUserInfo(u.sid);
    }
    else if ( command === 'logout' ) {
        // clear any logged in state
        mtClearUser();
        mtFireEvent('usersignin');
    }
    else if ( command.match( /^login_(.*)$/ ) ) {
        var sid = RegExp.$1;
        mtLoggedIn(sid);
    }
    else {
        mtFireEvent('usersignin');
    }
}
</mt:IfRegistrationAllowed>
</mt:IfBlog>
<mt:Ignore>
/***
 * Function to track outbound links in Google Analytics
 */
</mt:Ignore>
function trackOutboundLink(link, category, action) {
	try { 
		ga('send', 'event', category, action);
	} catch(err){}
	setTimeout(function() {
		document.location.href = link.href;
	}, 100);
}
