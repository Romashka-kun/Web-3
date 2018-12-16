$(document).ready(function () {

    var allQuestions = [
        {
            type: "choose one",
            question: "В одном из приведённых ниже слов допущена ошибка в постановке ударения: НЕВЕРНО выделена " +
                "буква, обозначающая ударный гласный звук. Укажите это слово.",
            answers: {
                "1": "диспансЕр",
                "2": "бухгалтерОв",
                "3": "плодоносИть",
                "4": "нажИвший",
                "5": "донЕльзя"
            },
            correctAnswer: "2"
        },
        {
            type: "choose one",
            question: "<i><b>(1)</b>Температура на поверхности Титана составляет около –180 градусов по шкале Цельсия. " +
                "<b>(2)</b>Этот крупнейший спутник Сатурна является одним из двух небесных тел в Солнечной системе, " +
                "на поверхности которых доказано существование жидкости. <b>(3)</b><…> в отличие от водоемов Земли, " +
                "моря и каналы Титана образованы не водой, а углеводородами, преимущественно метаном.</i><br><br>" +
                "Какое из приведенных ниже слов (сочетаний слов) должно стоять на месте пропуска в третьем (3) предложении текста?",
            answers: {
                "1": "также",
                "2": "вероятно,",
                "3": "однако,",
                "4": "несмотря на это,",
                "5": "а"
            },
            correctAnswer: "3"
        },
        {
            type: "choose one",
            question: "В одном из приведённых ниже слов допущена ошибка в постановке ударения: НЕВЕРНО выделена " +
                "буква, обозначающая ударный гласный звук. Укажите это слово.",
            answers: {
                "1": "тамОжня",
                "2": "озлобИть",
                "3": "сОгнутый",
                "4": "отдАв"
            },
            correctAnswer: "2"
        },
        {
            type: "choose multiply",
            question: "Выберите верные суждения об образовании",
            answers: {
                "1": "Образование связано с открытием новых знаний о мире и обществе",
                "2": "Среднее профессиональное образование сегодня можно получить в школе, окончив 11 классов",
                "3": "Получить образование — это и право и обязанность каждого гражданина РФ",
                "4": "В течение всей жизни человек может заниматься самообразованием",
                "5": "Учащийся получает основное общее образование по окончании 9-ти классов"
            },
            correctAnswer: ["3", "4", "5"]
        },
        {
            type: "choose multiply",
            question: "Ниже приведен перечень терминов. Все они, за исключением двух, относятся к социальным " +
                "потребностям человека. Найдите два термина, не соответствующих общему ряду слов",
            answers: {
                "1": "в жилище",
                "2": "в познании",
                "3": "в общении",
                "4": "в совместном труде",
                "5": "в заботе",
                "6": "в признании"
            },
            correctAnswer: ["1", "2"]
        },
        {
            type: "choose multiply",
            question: "Анатолий Степанович посетил концерт известного эстрадного артиста. " +
                "Какие факты свидетельствуют о том, что данное мероприятие является проявлением массовой культуры?",
            answers: {
                "1": "Концерт проведён анонимными авторами-исполнителями",
                "2": "Мероприятие организовано по заказу клуба любителей классической симфонической музыки",
                "3": "Артист получил за концерт большой гонорар",
                "4": "Концерт носил развлекательный характер",
                "5": "Критики заявили, что репертуар концерта сложен для понимания неподготовленной публики",
                "6": "Билеты на концерт были распроданы задолго до его начала, зал был полный, всем хотелось увидеть " +
                    "популярного артиста"
            },
            correctAnswer: ["3", "4", "6"]
        },
        {
            type: "write a word",
            question: "В приведенном ниже ряду найдите понятие, которое является обобщающим для всех " +
                "остальных понятий. Запишите это слово.<br><br><i>Подсистема, институт, общество, группа, личность.</i>",
            correctAnswer: "общество"
        },
        {
            type: "write a word",
            question: "Запишите термин, о котором идёт речь: государственные органы территориального управления " +
                "народным хозяйством СССР с 1917 по 1932 год и период проведения экономической реформы в 1957—1965 годы.",
            correctAnswer: "совнархозы"
        },
        {
            type: "write a word",
            question: "В приведенном ниже ряду найдите понятие, которое является обобщающим для всех остальных " +
                "представленных понятий. Запишите это слово.<br><br><i>Мировоззрение, знания, эмоции, ценности, поступки.</i>",
            correctAnswer: "мировоззрение"
        },
        {
            type: "matching",
            question: "Установите соответствие между памятником культуры (обозначено буквами) и его " +
                "автором (обозначено цифрами).<br><br><table><tr><td>А) скульптура «Медный всадник»<br><br>" +
                "Б) картина «Явление Христа народу»<br><br>В) мавзолей В. И. Ленина<br><br>" +
                "Г) «Хождение за три моря»<br></td><td>1) К. Тон<br><br>2) А. А. Иванов<br><br>3) А. Никитин<br><br>" +
                "4) В. И. Суриков<br><br>5) А. В. Щусев<br><br>6) Э. М. Фальконе</td></tr></table>",
            answers: ["А", "Б", "В", "Г"],
            correctAnswer: ["6", "2", "5", "3"]
        },
        {
            type: "matching",
            question: "Установите соответствие между событием (обозначено буквами) и участником " +
                "этого события (обозначено цифрами).<br><br><table><tr><td>А) «стояние» на р. Угре<br><br>" +
                "Б) Семилетняя война<br><br>В) Крымская война<br><br>Г) наступление Вооружённых сил Юга Росиии" +
                "на Москву<br></td><td>1) П. А. Румянцев<br><br>2) Василий III<br><br>3) М. Д. Скобелев<br><br>" +
                "4) Иван III<br><br>5) Г. Я. Сокольников<br><br>6) Н. И. Пирогов<br></td></tr></table>",
            answers: ["А", "Б", "В", "Г"],
            correctAnswer: ["4", "1", "6", "5"]
        },
        {
            type: "matching",
            question: "Установите соответствие между видом мышечной ткани человека (обозначено цифрами) и " +
                "особенностью ее строения (обозначено буквами).<br><br><table><tr><td>А) не обладает поперечной исчерченностью" +
                "<br><br>Б) образовалась путём слияния одноядерных клеток<br><br>В) управляется вегетативной нервной" +
                "системой<br><br>Г) волокна поперечно исчерчены<br><br>Д) в клетках по одному ядру<br><br>" +
                "Е) подвластна волевому контролю</td><td>1) скелетная<br><br>2) гладкая<br></td></tr></table>",
            answers: ["А", "Б", "В", "Г", "Д", "Е"],
            correctAnswer: ["2", "1", "2", "1", "2", "1"]
        }
    ];

    shuffle(allQuestions);

    var myQuestions = [];
    var quantity = 5;
    for (var i = 0; i < quantity; i++)
        myQuestions.push(allQuestions[i]);

    createNavBar(quantity);

    var quizContainer = $("#quiz");
    var resultsContainer = $("#results");
    var submitButton = $("#submit");

    // display quiz right away
    createQuiz();

    var nextButton = $("#next");
    var slides = $(".slide");
    var nav = $("#nav");
    var navBar = $("#nav span");
    var currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.click(showResults);
    nextButton.click(showNextSlide);
    navBar.click(showSelectedSlide);

    $(window).scroll(headerScroll);

    function shuffle(a) {
        var j, x;
        for (var i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    function headerScroll() {
        if ($(window).scrollTop() > $("#header").height() * 2)
            nav.addClass('fixed');
        else
            nav.removeClass('fixed');
    }

    function createNavBar(quantity) {
        for (var i = 0; i < quantity; i++) {
            $("#nav").append("<span>" + (i + 1) + "</span>")
        }
    }

    function createQuiz() {
        // we'll need a place to store the HTML output
        var output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            if (currentQuestion.type === "choose one") {
                // we'll want to store the list of answer choices
                var answers = [];

                // and for each available answer...
                for (var ansNo in currentQuestion.answers)
                    // ...add an HTML radio button
                    answers.push(
                        "<label>" +
                            "<input type='radio' name='question" + questionNumber + "' value='" + ansNo + "'>" +
                            ansNo + ") " + currentQuestion.answers[ansNo] +
                        "</label>"
                    );

                // add this question and its answers to the output
                output.push(
                    "<div class='slide quest" + questionNumber + "'>" +
                        "<div class='question'>" + currentQuestion.question + "</div>" +
                        "<div class='answers'>" + answers.join("") + "</div>" +
                    "</div>"
                );

            } else if (currentQuestion.type === "choose multiply") {
                var answers = [];
                for (var ansNo in currentQuestion.answers)
                    answers.push(
                        "<label>" +
                            "<input type='checkbox' name='question" + questionNumber + "' value='" + ansNo + "'>" +
                            ansNo + ") " + currentQuestion.answers[ansNo] +
                        "</label>"
                    );

                output.push(
                    "<div class='slide quest" + questionNumber + "'>" +
                        "<div class='question'>" + currentQuestion.question + "</div>" +
                        "<div class='answers'>" + answers.join("") + "</div>" +
                    "</div>"
                );

            } else if (currentQuestion.type === "matching") {
                var answers = [];

                for (var ans in currentQuestion.answers)
                    answers.push(
                        "<input type='text' name='question" + questionNumber + "' placeholder='" +
                        currentQuestion.answers[ans] + "'>"
                    );

                output.push(
                    "<div class='slide quest" + questionNumber + "'>" +
                        "<div class='question'>" + currentQuestion.question + "</div>" +
                        "<div class='answers'>" + answers.join("")+ "</div>" +
                    "</div>"
                );

            } else {

                output.push(
                    "<div class='slide quest" + questionNumber + "'>" +
                        "<div class='question'>" + currentQuestion.question + "</div>" +
                        "<div class='answers'>" +
                            "<input type='text' name='question" + questionNumber + "' placeholder='Ответ'>" +
                        "</div>" +
                    "</div>"
                );
            }
        });


        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.prepend(output.join(""));
    }

    function showResults() {

        submitButton.css("display", "none");
        slides.addClass("active-slide");
        slides.addClass("result-border");
        // gather answer containers from our quiz
        var answerContainers = $(".answers");

        // keep track of user's answers
        var numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            if (currentQuestion.type === "choose one") {
                // find selected answer
                var selector = $("input[name=question" + questionNumber + "]:checked");
                var userAnswer = selector.first().val();

                // if answer is correct
                if (userAnswer === currentQuestion.correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers.eq(questionNumber).css("color", "lightgreen");
                } else
                // if answer is wrong or blank
                // color the answers red
                    answerContainers.eq(questionNumber).css("color", "red");

            } else if (currentQuestion.type === "choose multiply") {
                var selector = $("input[name=question" + questionNumber + "]:checked");
                selector.each( function () {
                    if (currentQuestion.correctAnswer.includes($(this).val())) {
                        numCorrect++;
                        answerContainers.eq(questionNumber).css("color", "lightgreen");
                    } else
                        answerContainers.eq(questionNumber).css("color", "red");
                });
            } else if (currentQuestion.type === "matching") {
                var selector = $("input[name=question" + questionNumber + "]");
                selector.each( function (i) {
                    if ($(this).val() === currentQuestion.correctAnswer[i]) {
                        numCorrect++;
                        answerContainers.eq(questionNumber).css("color", "lightgreen");
                    } else
                        answerContainers.eq(questionNumber).css("color", "red");
                });
            } else {
                var selector = $("input[name=question" + questionNumber + "]");
                if (selector.val() === currentQuestion.correctAnswer) {
                    numCorrect++;
                    answerContainers.eq(questionNumber).css("color", "lightgreen");
                } else
                    answerContainers.eq(questionNumber).css("color", "red");
            }
        });

        // show number of correct answers out of total
        resultsContainer.text(numCorrect + " out of " + myQuestions.length);
    }

    function showSlide(n) {
        slides.eq(currentSlide).removeClass("active-slide");
        slides.eq(n).addClass("active-slide");

        navBar.eq(currentSlide).removeClass("active-span");
        navBar.eq(n).addClass("active-span");

        currentSlide = n;

        if (currentSlide === slides.length - 1) {
            nextButton.css("display", "none");
            submitButton.css("display", "inline-block");
        } else {
            nextButton.css("display", "inline-block");
            submitButton.css("display", "none");
        }
    }

    function showSelectedSlide() {
        if (slides.length === $(".active-slide").length)
            scrollToQuest($(this));
        else
            showSlide($(this).text() - 1);
    }

    function scrollToQuest(clickedEl) {
        navBar.removeClass("active-span");
        clickedEl.addClass("active-span");

        let id = clickedEl.text() - 1;
        console.log(clickedEl);
        let offs = $(".quest" + id).offset().top - nav.height() * 3;

        $("html, body").animate( {scrollTop: offs}, 500);
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }
});