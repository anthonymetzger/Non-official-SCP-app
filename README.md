21JAN2026: 

Well. Hello and welcome.

I thought of an idea one day to start a project about the SCP universe. I am going to strongly advise myself to do an absolutely no-ai route so that I can learn the most from the project. I wish the best to my future self, and I truly hope that I can learn a lot from this project.

22JAN2026:

Here I am again, early in the morning and ready to begin coding! I'll try to commit changes daily to my project on GitHub. 

I began to look through the SCP data and I have found out a lot. I am trying to imagine in my head how I am going to process the data. But I made a discovery. For every SCP there is, it is listed by one "raw_content" tag. I think that I will be able to utilize this and pull the data from the JSON by skimming over the data and pulling it that way. It's going to be a little difficult due to the plethora of data it's going to have to sort through. So I think I might just make my own JSON files from this. Since the original JSON files that I am using are scraped from the wiki as raw data, I'll take it, compile it into something neater and useable, and go from there...

I am writing this down now so I can discuss my thought process...

Every SCP under the 'items' folder is separated by 'raw_content'. So maybe each SCP utilizes tags that exist in every SCP...

Every SCP instance contains:
    "history": a bunch of authors and comments saying what they added or took away.... (not going to be used)
    "link": "scp-name"
    "page_id": "xxxxxxx" (not going to be used)
    "rating": integer
    "raw_content": html raw data. I'll try to split it up with what I can find.... Every raw_content has:
        the normal page header and body
            an image of the SCP
            the SCP data starts at: "Item #:" followed by a bunch of HTML bs...
            Object Class:
            Special Containment Procedures:
            if(scp description has "raw_source") then it has more than 1 part to the scp (ie: SCP-002-1, SCP-002-2)
            and FINALLY: an appendix.
        then any references used (not going to be used)
    
