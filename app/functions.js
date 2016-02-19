exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str1){
      return str+", "+str1
    }
  },

  makeClosures : function(arr, fn) {
    var i;
    for(i=0;i<arr.length;i++){
        arr[i] = function(){
          return fn(arr[i]);
        }
    }
    return arr;
  },

  partial : function(fn, str1, str2) {
    return function(punctuation){
      return fn(str1,str2,punctuation);
    }
  },

  useArguments : function() {
    var x=0,total=0;
    for(x in arguments){
        total+=arguments[x];
    }
    return total;
  },

  callIt : function(fn) {
    
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
