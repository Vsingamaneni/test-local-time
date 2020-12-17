exports = module.exports = {};

exports.currentLocalDateString = function(){
    return new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
}

exports.localDateString = function(localString){
    console.log('localString' + localString);
    return new Date(localString).toLocaleDateString() + " " + new Date(localString).toLocaleTimeString();
}
