const xhr = new XMLHttpRequest(); //this is provided by the browser the xbla bla bla new there is a constructor

/* The XMLHttpRequest method open() initializes 
a newly-created request, or re-initializes an existing one. it takes three parameters the third is (method(get,post,put,delete),url(represents a url to send the request to))*/

console.log(xhr);

/*The XMLHttpRequest.readyState property returns the state an XMLHttpRequest 
client is in. An XHR client exists in one of the following states:
0:UNSENT  open() not called yet. 1:OPENED open() has been called.
 2:HEADERS_RECEIVED send() has been called, and headers and status are available.
  3:LOADING Downloading; responseText holds partial data. 4:DONE	The operation is complete.
*/
/* when this was logged intially the ready state value was 0 ideally 
for every thing to go through it has to be at 4 when open method and passed in its 3 params
we got the changeState  to 1 then we proceed to creating the onreadystatechange method and assign
a callback function  
*/
xhr.open("GET", "./api/sample.txt");
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status=== 200){
console.log({status:xhr.status,text:xhr.statusText})
    }else{
        
    }
};
xhr.send();
