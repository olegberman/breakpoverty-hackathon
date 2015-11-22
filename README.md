# breakpoverty-hackathon

## Project Name
Community Voice Portal

## Elevator Pitch
Personable, easier, faster and more efficient way to share important and time-sensitive information via a phone

## Demo
https://www.youtube.com/watch?v=7brHAZZiiRI

## How To Use
**Community Message Recording: 855-907-3352**
- Call the number above, as you are the Chief or Health Official, Agriculture Expert or a School Teacher (different TOLL-FREE numbers will be provided for different roles)
- Choose if you want an interaction to be in "1" English or "2" Kiswahili
- Provide your secure (this can be updated via an API) PIN ("1234") which will allow you to record a message to share with people
- Record your message.  Please remember, you are limited to 60 seconds (CONFIGURABLE via API)
- Provide an expiration date for your message so that we do not play this after the expiration date, Format is MMDDYYYY as type in "12 10 2015" for December 10th, 2015
- Choose "1" if you want the message to be broadcasted to all Subscribers or "2" if this is just what people can listen to as they call in as the nature of message is not very urgent.

**Community Voice Portal Access	 855-907-3323** 
- Call the number above, as you are a comminity member in need of receiveing urgent communications and messages from Chief,  Health Officials, Agriculture Experts or a School Teachers.  This can be called anytime or you could opt-in to recieve phone calls with recorded message.
- Choose if you want an interaction to be in "1" English or "2" Kiswahili
- Press "1" for community, "2" for medicine, "3" for education and "4" for agriculture messages
- Once you are listening to messages, you can press any key to skip to next message.
- When you've finished listening to the last message, press "1" to OPT-IN to receive calls with messages instead of calling in every time or press "2" to end the call.

**NOTE: You can see more about this project here: http://devpost.com/software/community-voice-portal/**

## Inspiration
Local, time-sensitive communication is big issue in Rural Kenya.  One of the stories that was shared with us was that sometimes a Chief would have to go door to door in the village to make an important announcement.  Chief and vast majority of the people (80+% of population) have mobile devices that are capable of placing and receiving phones calls and sms.  

Our solution would make a big impact in rural areas in Kenya and other countries where Village Chief and/or other officials distribute information to the general population via a phone tree or worse yet in-person.  Such time-consuming process has many downsides including people missing an important message or not getting it in time.

## What it does
We have chosen to tackle all 3 challenge sets (Education, Health, Agriculture) as well as Community Announcements for this hackathon. The solution we implemented enables personable, easier, faster and more streamlined way to share important, time-sensitive and possibly life-changing information via something as simple as a phone call.  

For villages where lots of mass information communication for Health, Education and Agriculture is done manually or not at all, this solution will be a life changer!!
- Imagine delivering a weekly phone message to farmers with agricultural advice from experts, 
- or good health and hygiene message to folks that subscribed to weekly updates, 
- or female students that had to stay home and take care of the household because their mom was not feeling well that now would be able to get access to coursework notes, homework assignments, etc., 
- or Village Chief who needs to broadcast an important message to the whole community about some upcoming event or even doctor/dentist coming to visit.


## How we built it
We used Genesys Premier Edition APIs and Toll-Free Numbers from http://www.genesys.com/angel for Interactive Voice Response (IVR), Text-to-Speech (TTS) and Outbound Calling.  Integration scripts were written and hosted on Digital Ocean with MEAN stack (Mongo, Express, Angular, Node).  

## Challenges we ran into
Initially we used Voice as a mean of control over a phone conversation, but we soon realized that there might be lots of noise for where people call from or where the chief calls from, and so we opted to use only DTMF and simplify the voice application.  We wanted to make the app be as friendly to locals as possible and so we recorded all the audio prompts in Kiswahili as an option for callers to choose their calling experience in either English or Kiswahili.

## Accomplishments that we're proud of
We believe that improving mass communication with a tool like ours will have a very long term utility until internet is fully mainstream and everyone has access to it.  After all, our solution only uses your telephone and delivers messages to you via voice.  There is no learning curve to use this solution, your phone rings - you pick it up, or, if you missed the call, you dial a number, select an option and listen to a message from Chef, experts, etc.  We decided that phone was a perfect medium for this and culturally when the Community Chief speaks to you, even if via a message, you pay attention and act accordingly.

We're extremely proud of the fact that we built a fully deployable and scalable solution in just 2 days. This could be deployed and used almost right away.

## What we learned
- Teammate selection is key and we were lucky to have formed our group ahead of time
- It is important to lay your scope out from the very beginning
- Not all documentation for services that you use is always 100% accurate or updated
- Leaving time to tinker with things is key.

## What's next for Community Voice Portal
- Hopefully, polishing off and deployment in Rural Kenya as a Pilot and then in other countries and local communities where internet is sparse and communication of time-sensitive data is important or even life-changing.
- Integrate our hotline for doctors and a dashboard to monitor people that call in sick to monitor outbreaks and graph hot-zones of where the outbreaks are at and what kind of outbreaks are. 



