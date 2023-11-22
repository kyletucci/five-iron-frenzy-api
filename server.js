const express = require('express')
const app = express()
const PORT = 8000

const discography = {
    "upbeats and beatdowns": {
        releaseYear: 1996,
        tracks: [
            "the old west",
            "where zero meets 15",
            "these are not my pants (the rock opera)",
            "second season",
            "all that is good",
            "blue comb '78",
            "cool enough for you",
            "suckerpunch",
            "cannonball",
            "the untimely death of brad"
            // Add more tracks as needed
        ]
        },
    "our newest album ever!": {
    releaseYear: 1997,
    tracks: [
        "handbook for the sellout",
        "at least i'm not like all those other old guys",
        "shut up",
        "superpowers",
        "old west",
        "cool enough for you",
        "see the flames begin to crawl",
        "i still like larry",
        "brenda",
        "anthem",
        // Add more tracks as needed
        ]
    },
    "all the hype that money can buy": {
    releaseYear: 2000,
    tracks: [
        "the phantom mullet",
        "blue comb '78",
        "new year's eve",
        "fahrenheit",
        "a flowery song",
        "every new day",
        "combat chuck",
        "amalgamate",
        "eulogy",
        "giants"
        // Add more tracks as needed
        ]
    },
    "five iron frenzy 2: electric boogaloo": {
    releaseYear: 2001,
    tracks: [
        "pre-ex-girlfriend",
        "far, far away",
        "wizard needs food, badly",
        "farsighted",
        "solidarity",
        "so far, so bad",
        "new hope",
        "it's not unusual",
        "arnold and willis and mr. drummond",
        "these aren't the droids you're looking for"
        // Add more tracks as needed
      ]
    },
    "the end is near": {
    releaseYear: 2003,
    tracks: [
        "cannonball",
        "at least i'm not like all those other old guys",
        "so far, so bad",
        "new year's eve",
        "american kryptonite",
        "anchors away",
        "something like laughter",
        "that's how the story ends",
        "on distant shores",
        "wizard needs food, badly"
        // Add more tracks as needed
        ]
    },
    "the end is here": {
        releaseYear: 2004,
        tracks: [
            "intro",
            "old west",
            "handbook for the sellout",
            "where 0 meets 15",
            "cannonball",
            "blue comb '78",
            "at least i'm not like all those other old guys",
            "you probably shouldn't move here",
            "oh canada",
            "when i go out",
            "see the flames begin to crawl",
            "vultures",
            "you can't handle this",
            "american kryptonite",
            "the phantom mullet",
            "medley",
            "a new hope",
            "world without end",
            "every new day"    
            // Add more tracks as needed
        ]
    },
    "engine of a million plots": {
        releaseYear: 2013,
        tracks: [
            "against a sea of troubles",
            "so far",
            "zen & the art of xenophobia",
            "we own the skies",
            "someone else's problem",
            "i am jack's smirking revenge",
            "to start a fire",
            "battle dnacing unicorns with glitter",
            "into your veins",
            "it was a dark & stormy night",
            "i've seen the sun",
            "blizzards & bygones"
            // Add more tracks as needed
        ]
    },
    "until this shakes apart": {
        releaseYear: 2021,
        tracks: [
            "lonesome for her heroes",
            "wildcat",
            "while supplies last",
            "so we sing",
            "one heart hypnosis",
            "homelessly devoted to you",
            "huefano",
            "in through the out door",
            "like something i missed",
            "renegades",
            "bullfight for an empty ring",
            "auld lanxiety",
            "tyrannis"
            // Add more tracks as needed
        ]
    },
    "the end is near": {
        releaseYear: 2003,
        tracks: [
            "cannonball",
            "at least i'm not like all those other old guys",
            "so far, so bad",
            "new year's eve",
            "american kryptonite",
            "anchors away",
            "something like laughter",
            "that's how the story ends",
            "on distant shores",
            "wizard needs food, badly"
            // Add more tracks as needed
        ]
    }        
};


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api',(req, res) => {
    res.json(discography)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})