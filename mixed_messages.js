const message = {
    intros: ['Hello stranger!', 'Howdy!', 'Hi There!', "What's up?", 'Hello old friend!', 'Welcome!', 'Hiya!', 'Hey Hotshot!', 'Greetings!', 'Great to see you!'],
    subjects: ['You', 'Zac Efron', 'The Yeti', 'Bart Simpson', 'Your archenemy', 'The love of your life', 'Ebeneezer Scrooge', 'Raymond Reddington', 'Foxhound Remy', 'Your best friend'],
    predictions: ['will win the lottery', 'will go on an extraordinary vacation', 'will find inner peace', 'will win an esteemed award', 'will discover buried treasure', 'will step on dog poop', 'will get into a dangerous car accident', 'will fall down the stairs', 'will be wrongly accused of murder', 'will get fired from work'],
    locations: ['in Egypt', 'in Burkina Faso', 'in Athens', 'in Manhattan', 'in Antarctica', 'down the road', 'at the gas station', 'in your hometown', 'in Dublin, Ireland', 'within 10 miles from where you stand'],
    timeFrames: ['One month from now', '6 months from now', '5 years from now', '20 years from now', '50 years from now', 'Tomorrow', '4 score and 7 years from now', 'On June 9th', 'On your next birthday', 'In the future'],
    randomNum() {
        let randNum = Math.floor(Math.random() * 10);
        return randNum
    },
    randIntro() {
        let num = this.randomNum();
        let intro = this.intros[num];
        return intro;
    },
    randSubject() {
        let num = this.randomNum();
        let subject = this.subjects[num];
        return subject;
    },
    randPrediction() {
        let num = this.randomNum();
        let prediction = this.predictions[num];
        return prediction;
    },
    randLocation() {
        let num = this.randomNum();
        let location = this.locations[num];
        return location;
    },
    randTimeFrame() {
        let num = this.randomNum();
        let timeFrame = this.timeFrames[num];
        return timeFrame;
    },
    randMessage() {
        return `${this.randIntro()} My name is the great and powerful Zoltar! Here is my daily prediction...${this.randTimeFrame()}, ${this.randLocation()}- ${this.randSubject()} ${this.randPrediction()}.`;
    }
}
console.log(message.randMessage());