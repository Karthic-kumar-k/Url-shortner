# Url-shortner
Returns a short url which will redirect to your actual url page.

--------------------------------------------------

Route :  /v1/createUrl
method : POST
Req type : application/json
request : { url : "url you want to short"}

response : {"url": "www.tiny.in/g/3e723b"} //shortened URL

--------------------------------------------------

Route :  /g/hash
method : GET

response : Redirects to your URL page itself

---------------------------------------------------
