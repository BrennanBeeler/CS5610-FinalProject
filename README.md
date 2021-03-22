# CS5610-FinalProject

Google Doc: https://docs.google.com/document/d/2tnghah5k46J4_jsd3H5WoA4wCK-YBisBMIpl3COniOo/edit?usp=sharing
Server repo: https://github.com/jondenman/cs5610-finalproject-server-java

## Problem
People need inspiring or amusing quotes sent to them
## Users
1. Content Creator
	* Create an account which can submit new quotes or create collections of quotes to which other users can subscribe
	* Increase the number of likes/subscriptions they get to increase exposure.
1. Consumer
	* Find inspiration or interesting quotes on the fly.
	* Find and subscribe to content creators which allows them to receive quotes they might like via the webapp (or phone via text).
1. Anonymous
	* Determine if they want to create and account based on the content available, and create that account easily if they so desire.
	* Easily find quotes even without having to create an account or log in.

## Strategy 
	* Web application that allows users to browse quotes based on various criteria
	* Allow users to create content creator or consumer profiles so that they can get quotes based on preset preferences- these could be set to display directly on the webpage.
	* Content creators can create/add new quotes, or just curate collections of quotes that others can subscribe to.
	* User theySaidSo API to get quotes based on category etc. 
	* Use Twilio to optionally send these quotes directly to mobile devices
	* MongoDB or maybe MySQL relational database for storing user information.
## External Web API
	* theySaidSo - A database and RESTful service for inspirational and impactful quotes
	* Twilio - A messaging API to send SMS messages and notifications
