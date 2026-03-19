Day 1 - How the Internet actually works

Block 1 - The request/response cycle

What happens when we type google.com and hit enter
--> Browser asks a DNS server "What is the IP address of google.com"
--> DNS replies with IP "142.250.80.46"
--> Browser will send an HTTP request to that IP address
--> Google server recieves it, processes it and send back and HTTP response.
--> Browser renders the HTML it received.

This is how express server will be recieving it 

Key terms to understand :

Client — the browser, the one asking
Server — the machine answering
HTTP — the language they speak to each other
Request — client asking for something
Response — server replying
Status codes — server's way of saying what happened

CodeMeaning
200 - OK - Everything worked
201 - Created - You successfully saved something
404 - Not Found - Wrong URL
400 - Bad - Request You sent broken data
500 - Server Error-Your backend code crashed


HTTP Methods
Every request has a method that says what action we want

METHOD   MEANING                REAL EXAMPLE
GET      Fetch something        Load your twitter feed
POST     Create something       Send a tweet
PUT      Update something       Edit your bio
DELETE   Remove something       Delete a tweet

In your own words — what is the difference between a client and a server?
A client is any device or application that sends a request — usually the browser. A server is a computer or program that receives that request, processes it, and sends back a response


What status code did you see in DevTools, and on which website?
The Instagram mobile app is the client. When I scroll my feed, the app sends a GET request to Instagram's servers. The server fetches my feed data from the database and sends it back as a response.


What HTTP method would you use to delete a user's account?
I would use the DELETE method with a URL like /users/123 to delete that specific user's account


