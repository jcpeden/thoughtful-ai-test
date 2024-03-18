# John Peden's technical test for Thoughtful.ai

Thanks for checking out my submission!

I know, I know...I'm based in the UK and not the US but hear me out!

* I've worked extensively with US clients in the past. I have a US bank account and can easily set up a US subsidiary for my UK LLC if you need a legal entity in the US.
* I came across the role on Hacker News and was intrigued by how you're linking together disparate healthcare systems. This position looks super interesting and I couldn't resist.
* The tech test was right in the sweet spot of being mildly interesting/challenging without it taking too long.
* I've got +15 years of experience including 2 years at Booking.com. I think I'd bring a lot of value to Thoughtful.

## My approach

I decided to bootstrap it with [Create React App](https://github.com/facebook/create-react-app) and spent roughly 30 minutes building the component and associated tests. 

I probably then spent a further 15 tidying it up and writing this readme...hope that's OK!

## What I've tried to cover

The logic you've asked for should be covered here. I made sure the re-read the spec that the limits were greater than or equal to in all cases.

### Code quality
Feel free to judge me harshly. I baulk at some of the rubbish I wrote 12 months ago when I see it. I always think there's room to improve your code but I try to balance perfectionism with the value it delivers to the business.

### Edge cases and inputs
There's very limited validation on the form inputs and the method itself so it's probably quite easy to break. I'd add more validation and error handling given additional time.

### Test coverage
We're using SonarQube and have to hit 80% test coverage on our work on my current project so I usually just aim for 100% unless it's a real pain to try and hit that figure.

In this case, I'm pretty happy with the level of coverage but the method is pretty straightforward and I've not coverage spurious inputs and unhappy paths, which I'd look to do given more time.

## Running the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

From here, you'll see a basic form allowing you to input the height, length, width and weight of your package. Once you've done that you can click 'Calculate' and see how the package will to be processed (or not if it's too big/heavy).

### `npm test`

Launches the test runner in the interactive watch mode.\

My decision to use react-scripts fed into this. I wanted to add solid test coverage and while unit testing would have probably sufficed, my past few projects have leant more heavily into the testing trophy or diamond.

While I wasn't a massive fan at first, I now see the value in writing these tests against blocks of UI and actual user interactions instead of hundreds of unit tests that are brittle and not representative of how a user actually interacts with your app.

### `npm run build`

You shouldn't need to worry about this...

### `npm run eject`

You shouldn't need to worry about this either...

## Learn More

You can find out more about me here: [https://www.linkedin.com/in/johnpeden/].

