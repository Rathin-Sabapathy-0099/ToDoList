exports.getDate = function() {
var today = new Date()
var options = {
    weekday:"long",
    day:"numeric"
}
return  today.toLocaleDateString("en-US",options);

}
