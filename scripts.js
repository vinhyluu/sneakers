const shoes = {

    badWeather: [
        {
            title: "Visvim Virgil",
            img: "images/virgil.jpg",
            weather: "yesweather",
        },
        {
            title: "NikeLab AF1 Downtown X Acronym",
            img: "images/downtown.jpg",
            weather: "yesweather",
        }
    ],
    runShoes: [
        {
            title: "Nike Vapormax",
            img: "images/vapormax.jpg",
            running: "yesrun",
        },
        {
            title: "Nike Sock Dart",
            img: "images/sockdart.jpg",
            running: "yesrun",
        }
    ],
    formalShoes: [
        {
            title: "Visvim Virgil",
            img: "images/virgil.jpg",
            style: "formal",
        },
    ],
    futureShoes: [
        {
            title: "Nike Lunar Force 1 X Acronym",
            img: "images/force.jpg",
            future: "futuristic",
        },
        {
            title: "Nike Air Presto Mid X Acronym",
            img: "images/presto.jpg",
            future: "futuristic",
        }
    ]
};

$(function () {
    //navigating between pages
    $(".questionOne").hide();
    $(".questionTwo").hide();
    $(".questionThree").hide();
    $(".questionFour").hide();
    $(".resultPage").hide();
    $("form").hide();

    $(".start").click(function(){
        $(".splashPage").fadeOut(500);
        $(".questionOne").fadeIn(1300);
    })

    $(".toQuestionTwo").click(function(){
        $(".questionOne").fadeOut("slow");
        $(".questionTwo").fadeIn("slow");
    })

    $(".toQuestionThree").click(function(){
        $(".questionTwo").fadeOut("slow");
        $(".questionThree").fadeIn("slow");
    })

    $(".toQuestionFour").click(function(){
        $(".questionThree").fadeOut("slow");
        $(".questionFour").fadeIn("slow");
    })

    $(".submitButton").click(function () {
        $(".questionFour").fadeOut("slow");
        $(".resultPage").fadeIn("slow");
    })

    $(".backHome").click(function (e) {
        e.preventDefault();
        $("input[type=radio]").val("");
        window.location.reload();
        $(".resultPage").fadeOut("slow");
        $(".splashPage").fadeTo(0, 500);
    })

    $("label").each(function(){
        $(this).click(function(){
            $("label").css("font-weight", "normal");
            $(this).css("font-weight", "bold");
        });
    })


//listen for form on submit
    $("form").on("submit", function (e) {
        e.preventDefault(e);

        const answerOne = $("input[name=weather]:checked").val();
        const answerTwo = $("input[name=running]:checked").val();
        const answerThree = $("input[name=style]:checked").val();
        const answerFour = $("input[name=future]:checked").val();

        let userAnswers = {
            weather: answerOne,
            running: answerTwo,
            style: answerThree,
            future: answerFour,
        }

        //if the weather is bad, only show two possible results from badWeather

        if(answerOne === "yesweather"){
            badArray = shoes.badWeather;
            console.log(badArray);
        
        let badWeatherShoes = [];

        for(let i=0; i < badArray.length; i++){
            if (badArray[i]["weather"]===answerOne){
                badWeatherShoes.push(badArray[i]);
            }
            console.log(badWeatherShoes);
        }

        const randomBadWeatherShoe = Math.floor(Math.random() * badWeatherShoes.length);
        console.log(randomBadWeatherShoe);

        $(".resultTitle").append(`<h2 class="shoeTitle">${badWeatherShoes[randomBadWeatherShoe]["title"]}</h2>`);
        $(".resultImage").append(`<img src="${badWeatherShoes[randomBadWeatherShoe]["img"]}">`);
     }

        //end badWeather

        //if I'm going to be in a rush, store all running shoes into an array
       else if(answerTwo === "yesrun"){
            runArray = shoes.runShoes;
            console.log(runArray);
        
        let runningShoes = [];

        for(let i=0; i < runArray.length; i++){
            if(runArray[i]["running"] === answerTwo){
                runningShoes.push(runArray[i]);
            }
            console.log(runningShoes);
        }

        const randomRunningShoe = Math.floor(Math.random() * runningShoes.length);

        $(".resultTitle").append(`<h2 class="shoeTitle">${runningShoes[randomRunningShoe]["title"]}</h2>`);
        $(".resultImage").append(`<img src="${runningShoes[randomRunningShoe]["img"]}">`);
    }
        //end running 

        //casual/formal -- if user chooses formal, default to Virgil boots
        else if(answerThree === "formal"){
            formalArray = shoes.formalShoes;

        let formalStyle = [];
        
        for (let i = 0; i < formalArray.length; i++) {
            if (formalArray[i]["style"] === answerThree) {
                formalStyle.push(formalArray[i]);
            }
            console.log(formalStyle);
        }

        const randomStyle = Math.floor(Math.random() * formalStyle.length);

        $(".resultTitle").append(`<h2 class="shoeTitle">${formalStyle[randomStyle]["title"]}</h2>`);
        $(".resultImage").append(`<img src="${formalStyle[randomStyle]["img"]}">`);
    }
        

        //end casual/formal

        //future vs non future
        else if(answerFour === "futuristic"){
            futureArray = shoes.futureShoes;
        

        let futureStyle = [];

        for(let i=0; i < futureArray.length; i++){
            if(futureArray[i]["future"] === answerFour){
                futureStyle.push(futureArray[i]);
            }
        }

        const randomFuture = Math.floor(Math.random() * futureStyle.length);

        $(".resultTitle").append(`<h2 class="shoeTitle">${futureStyle[randomFuture]["title"]}</h2>`);
        $(".resultImage").append(`<img src="${futureStyle[randomFuture]["img"]}">`);
    }
        
    });
});