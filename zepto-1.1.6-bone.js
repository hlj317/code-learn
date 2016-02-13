/*zepto-1.1.6骨架研究*/

//首先把Zepto放到一个大的闭包中
var Zepto = (function(){

    //定义该dom节点是否在选择器中的方法
    zepto.matches = function(element,selector){

    }

    zepto.Z = function(dom,selector){

    }

    zepto.isZ = function(object){
    	return object instanceof zepto.Z;
    }

    zepto.init = function(selector,context){

    	var dom;

    	if(!selector){
    		return zepto.Z();
    	}else if(typeof selector == 'string'){

    		selector = selector.trim();

    		if(selector[0] == '<' && fragmentRE.test(selector)){
    			dom = zepto.fragment(selector,RegExp.$1,context);
    			selector = null;
    		}else if(context !== undefined){
    			
    			return $(context).find(selector);
    		
    		}else{
    			dom = zepto.qsa(document,selector);
    		}

    	}else if(isFunction(selector)){
    		
    		return $(document).ready(selector);
    	
    	}else if(zepto.isZ(selector)){

    		return selector;

    	}else{

            if (isArray(selector)) dom = compact(selector)

            else if (isObject(selector))
                dom = [selector], selector = null

            else if (fragmentRE.test(selector))
                dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null

            else if (context !== undefined) return $(context).find(selector)

            else dom = zepto.qsa(document, selector)

    	}

    	return zepto.Z(dom,selector);
    }

    //选择器初始化方法
    $ = function(selector,context){
    	return zepto.init(selector,context);
    }

    //选择器，?不是特别理解实现原理
    zepto.qsa = function(element,selector){

    }

    //数组过滤方法
    $.grep = function(elements,callback){
    	return filter.call(elements,callback);
    }

    //定义所有的函数方法
    $.fn = {

    	map : function(fn){
    		return $($.map(this,function(el,i){

    			return fn.call(el,i,el);

    		}))
    	}

    }

    //把$.fn作为zepto.Z的原型对象，当获取一个dom包装对象时，直接继承$.fn的所有原型方法
    zepto.Z.prototype = $.fn;

    $.zepto = zepto;

    return $;

})();

//把Zepto设为全局变量
window.Zepto = Zepto;

//判断window.$是否赋值，如果没有，则把Zepto对象赋给window.$
window.$ === undefined && (window.$ = Zepto);

//为dom包装对象增加事件处理的原型方法
;(function($){})(Zepto);

//为dom包装对象增加ajax请求的原型方法
;(function($){})(Zepto);

;(function($){})(Zepto);

//对浏览器兼容性及异常情况作处理
;(function($){})(Zepto);
