exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var promise = new Promise (function(resolve, reject){
  		if(value){
  			resolve(value);
  		}
  		else{
  			reject(value);
  		}
  	});
  	return promise;
  },

  manipulateRemoteData : function(url) {
  	var promise = new Promise (function(resolve, reject){
	  	var request = new XMLHttpRequest();
	  	request.onload = function(){
	  		if(request.status>=200){
	  			var result = (JSON.parse(request.response)).people;
	  			function compare(a,b) {
				  if (a.name < b.name)
				    return -1;
				  else if (a.name > b.name)
				    return 1;
				  else 
				    return 0;
				}
				result.sort(compare);
	  			resolve(result);
	  		}
	  	}
	  	request.open("GET", url, true);
	  	request.send();
	});
	return promise;
  }
};
