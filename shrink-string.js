/*! Shrink String, http://tpkn.me */
String.prototype.shrink = function(len, between){
   if(typeof len !== 'number' || len <= 0){
      len = 32;
   }
   if(typeof between !== 'string'){
      between = '..';
   }
   if(this.length <= len + between.length){
      return this.toString();
   }

   return this.substr(0, len / 2) + between + this.substr(-len / 2, this.length - 1);
}
