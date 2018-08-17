# SubsplashChallenge

To run the program clone repo down and then in your CLI input 

`npm i`

to ensure that your dependencies are in order. 
___
Currently this still is unable to ping the Subsplash API without receiving the 502 error. As discussed via email thread, I have used vanilla XHR request, and using node's https request.

I was able to receive the data via the curl method that you have helped me utilize, I was able to hard code this as a json object which I am treating as the "Received" data from the API.

Current Bug #1 is I am able to confirm that I am reassigning the values in the following lines, however they are no persisting outside the functional scope of the assignment. 

```
subSplashResults[i].duration = bodyString.items[0].contentDetails.duration;
subSplashResults[i].views = bodyString.items[0].statistics.viewCount;
```

This is the main blocker and I have scaffolded out my approach for the rest of the problem in the code itself. 

Please let me know if you have any questions. 

---------
New things that I have noticed - youtube url provided sometimes have extra information past the video ID - need to clean up string parsing method for this. 
