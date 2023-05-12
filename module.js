exports.getday =function(){
  var current = new Date();

  var options =
  {
    weekday:"long",
    day:"numeric",
    month:"long"
  }

return current.toLocaleString("en-US",options);


}
