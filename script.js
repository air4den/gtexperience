const questions = [
    "Touched the Ramblin’ Wreck?",
    "Filled out your RAT cap?",
    "Ran the cake race?",
    "Have been asked “What’s the good word?!” by an alumni?",
    "Ran the PI Mile?",
    "Yelled \“Fight! Win! Drink! Get Naked! Drink more! Get more naked!\” at a sporting event?",
    "Visited Sideways’s grave during finals week?",
    "Took a stroll past Brittain during finals week?",
    "Evacuated a Georgia Tech housing building due to a fire alarm?",
    "Fell out of a lofted dorm bed?",
    "Showered in the CULC or Klaus buildings?",
    "Ate at the Varsity?",
    "Seen the homeless man in a wheel chair near the Varsity exit ramp?",
    "Received food poisoning from a dining hall?",
    "Snuck into Willage?",
    "Stole something from a dining hall?",
    "Cried in a dining hall?",
    "Played a round of trivia at Rocky Mountain Pizza?",
    "Placed in the top three at Rocky’s trivia?",
    "Rode the MARTA?",
    "Been harassed on the MARTA?",
    "Visited Piedmont Park?",
    "Walked on the Beltline?",
    "Seen Kevin Randolph roller blading on the Beltline?",
    "Ice-skated at Atlanta Station?",
    "Hiked up Stone Mountain?",
    "Didn’t attend any class for more than a week during the semester?",
    "Passed Linear Algebra?",
    "Swam in the CRC’s olympic swimming pool?",
    "Rode the CRC waterslide?",
    "Boogie-boarded/trash-bagged Tech Green or Burger Bowl during a rainstorm?",
    "Climbed on top of Brittain Dining Hall?",
    "Snuck into Bobby Dodd Stadium?",
    "Have been hit by a scooter?",
    "Caused a collision while riding a scooter or bicycle?",
    "Told a tour group not to come here?",
    "Seen a movie film crew on campus?",
    "Stole a ’T’ on campus?",
    "Shit posted about an individual or organization on Yik Yak?",
    "Been on a date?",
    "Been with a MPS in the BioQuad?",
    "Been on a date on a date to Antico’s?",
    "Taken as a date to a fraternity or sorority formal event?",
    "Witnessed or gave PDA in a dining hall?",
    "Gave PDA in the library?",
    "Climbed onto the Van Leer roof?",
    "Hosted or have been to a pregame in a Georgia Tech dorm or apartment?",
    "Rode in a Fetii?",
    "Rode a waterslide during Wet Weekend?",
    "Partook in a Silly Week bender?",
    "Blacked out during Wet Weekend?",
    "Backed out at a Tailgate?",
    "Frat hopped during Halloweekend?",
    "Stood in line for over 30 minutes to get into a party?",
    "Jumped a fence to get into a party?",
    "Ate BCM pancakes?",
    "Ate at the Tech Square Waffle House?",
    "Walked to Cookout after 2am?",
    "Lost your Buzzcard or wallet while going out?",
    "Obtained an over-21 wristband at a party while being underage?",
    "Used a fake ID to purchase alcohol?",
    "Used someone else’s ID to enter a bar underage?",
    "Had a fake ID taken?",
    "Went to a Home Park party?",
    "Went to a SHPE party?",
    "Drank a rainy beer from Park Tavern?",
    "Bar hopped on the Beltline?",
    "Went out in Athens?",
    "Couldn’t remember the night before?",
    "Came down with the frat flu?",
    "Took an exam while sick with frat flu?",
    "Threw up during or after going out?",
    "Took an exam hungover?",
    "Saw your TA when going out?",
    "Flirted with or have been flirted with by a Georgia Tech employee?",
    "Was hit on at the CRC?",
    "Gave out or received a MPS’s phone number while at the CRC?",
    "Flirted with your TA?",
    "Flirted with a professor?",
    "Received an OSI violation?",
    "Received two OSI violations?",
    "Pregammed an exam?",
    "Made out at Veranda or Lost Dog?",
    "Made out with a student from uGA, GSU, KSU, or Emory?",
    "Made out in a Fetii or Uber?",
    "Made out in a classroom?",
    "Been kicked out for your roommate to engage in a sexual act?",
    "Kicked out a roommate for a hookup?",
    "Saw your roommate's private parts?",
    "Hooked up on the roof of a campus housing building?",
    "Slept with your formal date?",
    "Walked from East to West Campus (or vice versa) and back in one night for a booty call?",
    "Hooked up in the BioQuad?",
    "Hooked up with someone in a lower grade than you?",
    "Hooked up in the CULC?",
    "Hooked up in Crossland 7?",
    "Hooked up with two or more people from the same fraternity or sorority?",
    "Hooked up with your TA?",
    "Hooked up on the Van Leer roof?",
    "Met George P. Burdell?",
]

// Dynaically create questions list
const container = document.getElementById("questions-container");
const questionsList = document.createElement("ol");
questions.forEach((question, i) => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `q${i}`;
    input.name = `q${i}`;

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.textContent = question;

    li.appendChild(input);
    li.appendChild(label);
    questionsList.appendChild(li);
});

container.appendChild(questionsList);

// Form Submission
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkCount = 0;
    let georgeChecked = false;
    checkboxes.forEach((cb, index) => {
        if (cb.checked){
            checkCount++;
            if (index === 99) {
            georgeChecked=true;
            }
        }
        
    })

    if (georgeChecked) {
        window.location.href = "george.html"
    } else {
        const score = 100 - checkCount;
        window.location.href = `score.html?score=${score}`;
    }
    
});
