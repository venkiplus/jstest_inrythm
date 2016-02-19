exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
  	return constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var newObj=[];
  	for(x in obj){
  		if(obj.hasOwnProperty(x)){
  			newObj.push(x+': '+obj[x]);
  		}
  	}
  	return newObj;
  }
};
