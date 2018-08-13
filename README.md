# SubsplashChallenge

To run the program clone repo down and then in your CLI input 

`npm i`

to ensure that your dependencies are in order. 
___
Currently this still is unable to ping the Subsplash API without receiving the 502 error. As discussed via email thread, I have used vanilla XHR request, and using node's https request. 

I was able to receive the data via the curl method that you have helped me utilize, I was able to hard code this as a json object which I am treating as the "Received" data from the API. (Research topic)

I am currently having some Async problems and will be trying to wrap the requests in a function or promise structure in order to preserve execution order. (The results of calling the YouTube API is not being completed before calling the sorting/printing feature)



