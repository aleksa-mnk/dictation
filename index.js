// заполнение массива

// var arr = [], inp;
// document.getElementById('inp').addEventListener('keydown', function (e) {
//     if (e.keyCode === 13) {
//         inp = document.getElementById('inp').value;
//         arr.push(inp);
//         document.getElementById('inp').value = '';
//     }
// });

// сами массивы
let eng = ["third", "a working day", "a comrade", "near", "a long way from", "far from", "to walk", "a walk", "to go for a walk", "to go for a walk", "to take smb out", "only", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "a week-end", "at the week-end", "for the week-end", "over the week-end", "to last", "a hour", "to receive", "to answer", "an article", "afternoon", "good afternoon", "to discuss", "to finish", "work", "hard", "to stay", "to return", "how long", "what time", "to stop", "neighbour", "depends on", "keen", "digging", "bulbs", "tulips", "daffodil", "snowdrops", "interesting", "exciting", "dangerous", "stressful", "boring", "relaxing", "difficult", "demanding", "tiring", "rewarding", "bank cler", "waiter", "lawyer", "bus driver", "security guard", "shop assistant", "writer", "hairdresser", "bodyguard", "mechanic", "nurse", "journalist", "pilot", "secretary", "receptionist", "firefighter", "graphic designer", "teacher", "intelligent", "brave", "physically fit", "calm", "reliable", "friendly", "polite", "creative", "imaginative", "skillful", "caring", "foreign language", "to study", "in the centre of city", "often", "always", "get home", "in class", "during", "usually", "before classes", "after classes", "already", "know", "well", "badly", "journal", "to translate from one language into another", "learn well", "receive letters", "satellite", "jaws", "physically fit", "scientist"];
let rus = ["третий", "рабочий день", "товарищ", "близко", "далеко от", "далеко от (вопр. и отр.)", "ходить", "прогулка", "идти гулять", "гулять", "повести к-л на прогулку", "только", "пн", "вт", "ср", "чт", "пт", "сб", "вс", "конец недели", "в конце недели", "на выходные", "на выходных", "продолжаться", "час", "получать", "отвечать", "статья/артикль", "после полудня", "добрый день", "обсуждать", "заканчивать (f)", "работа", "усердно", "оставаться", "возвращать", "как долго", "когда...?/во сколько...?", "кончать, прекращать", "сосед", "зависит", "увлекаться", "копать", "луковицы", "тюльпаны", "нарциссы", "подснежники", "интересно", "захватывающе", "опасно", "напряженно", "скучно", "расслабляюще", "сложно", "требовательно", "утомительно", "полезно", "банковский служащий", "официант", "юрист", "водитель автобуса", "охранник", "продавец", "писатель", "парикмахер", "телохранитель", "механик", "медсестра", "журналист", "пилот", "секретарь", "в приемной", "пожарный", "графический дизайнер", "учитель", "умный", "смелый", "физически развитый", "спокойный", "надежный", "дружелюбный", "вежливый", "креативный", "творческий", "умелый", "заботливый", "иняз", "учиться", "в центре города", "часто", "всегда", "возвращаться домой", "в классе", "во время", "обычно", "перед занятиями", "после занятий", "уже", "знать", "хорошо", "плохо", "журнал", "переводить с одного языка на другой", "учитесь хорошо", "получать письма", "спутник", "челюсти", "физически развитый", "ученый"];

// рандомно перемешать массив
let getRandomPermutation = (n) => {
    let arr = Array.from(Array(n).keys());

    for (let i = (n - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * i);

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

// перемешиваю
let permutation = getRandomPermutation(eng.length);
let tempEng = eng.slice();
let tempRus = rus.slice();


for (let i = 0; i < eng.length; i++) {
    eng[i] = tempEng[permutation[i]];
    rus[i] = tempRus[permutation[i]]
}

var help=0;
var mistake=0
// при вводе числа слов
document.getElementById('nmb').addEventListener('keydown', function (e) {
    // если это Enter
    if (e.keyCode === 13) {
        
        nmb = document.getElementById('nmb').value;
        document.getElementById('sect').className = 'words';

        for (let i = 0; i < nmb; i++) {
            let div = document.createElement('div');
            div.className = 'word';
            div.innerHTML = '<div id="left"><label>' + rus[i] + '</label></div><div id="right"><input type="text" id="' + i + '" /><button id="' + eng[i] + '">Не знаю</button></div>';
            sect.appendChild(div);

            let input = document.getElementById(i);
            document.getElementById('0').focus();
            input.addEventListener('keydown', function (e) {
                if (e.keyCode === 9) {
                    mistake+=1;
                    if (this.value != eng[i]) {
                    this.classList.add("mistake");
                    document.getElementById(i).focus();
                    e.preventDefault()
                    }else{
                        this.classList.remove("mistake");
                    }
                }
            });
            input.addEventListener('keydown', function (e) {
                if (e.keyCode === 13) {
                if (this.value != eng[i]) {
                    mistake+=1;
                    this.classList.add("mistake");
                    this.focus();
                } else {
                    this.classList.remove("mistake");
                    if(i==(nmb-1)){
                        document.getElementById('okno').innerHTML = '<p id="centrep">Вы это сделали!</p>Всего слов: ' + nmb + '<br />Использовано подсказок: ' + help + '<br />Допущено ошибок: ' + mistake + '<br /><br /><a href="#" id="centrep" class="close">Закрыть окно</a>';
                        location.replace("#zatemnenie");
                    }else{
                        document.getElementById(i+1).focus();
                    }
                }
                }
            });
            document.getElementById(eng[i]).onclick = function () {
                help+=1;
                alert(eng[i]);
                document.getElementById(i).focus();
            }
        }
    }
});