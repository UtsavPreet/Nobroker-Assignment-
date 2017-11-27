var user = {
  
        userName: "RealFood",
        userPhoto: "../images/ceo.jpg",
        question: "How was your experience?",
        amount: "1,323.60",
        iconHappy: "../images/happy.png",
        iconSad: "../images/sad.png",

    items: [{
            itemName: "Brownie in a jar",
            price: 140,
            itemDescription: ""
        },

        {
            itemName: "Black Forest",
            price: 140,
            itemDescription: "Chocolate Icecream between soft chocolate buns"
        },
        {
            itemName: "Classic Banana Split with Candy",
            price: 160,
            itemDescription: ""
        },
        {
            itemName: "Black Forest",
            price: 140,
            itemDescription: "Chocolate Ice cream between"
        }
    ]
}

var sad = {
    iconSad: "../images/sad.png",
    iconHappy: "../images/happy.png",
    feedbackText: "We are really Sorry",
    belowFeedbackText: "Tell us what went wrong",
    changeText: "Change my Answer",
    allowText: "Allow us to reply.",
    privacyText: "Your email will not be revealed.",
    submit: "Submit",
    isSad: true,
    options : [{
        name: "Customer Service"
    },
    {
        name: "Wait Time"
    },
    {
        name: "Quality"
    },
    {
        name: "Environment"
    },
    {
        name: " Other"
    }
]
};

var happy = {
    iconSad: "../images/happy.png",
    iconHappy: "../images/sad.png",
    feedbackText: "Thats great!",
    belowFeedbackText: "Tell us what we got right",
    changeText: "Change my Answer",
    allowText: "Allow us to reply.",
    privacyText: "Your email will not be revealed.",
    submit: "Submit",
    isHappy: true,
    options : [{
        name: "Customer Service"
    },
    {
        name: "Wait Time"
    },
    {
        name: "Quality"
    },
    {
        name: "Environment"
    },
    {
        name: " Other"
    }
]
};
