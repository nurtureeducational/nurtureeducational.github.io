function getParams(){
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
        for (var i=0; i<pairs.length; i++){
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}
params = getParams();
name = unescape(params["name"]);
phone = unescape(params["phone"]);
message = unescape(params["message"]);
window.open('https://api.whatsapp.com/send?phone=+919751294297&text=NAME : '
+ name +',%0a\n PHONE : '+ phone +',%0a\n MESSAGE : '+ message +'');