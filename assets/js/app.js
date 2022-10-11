const chart = document.querySelector('.chart')
const dollarValue = chart.querySelectorAll('.value')
const bar = chart.querySelectorAll('.bar')
const day = chart.querySelectorAll('p')

//Method 1
// fetch('../data.json')
// .then((reponse)=>reponse.json())
// .then((json)=>console.log(json));


//Method 2
// let file = '../data.json';
extract('../data.json');

async function extract(file){
    let Obj1 = await fetch(file);
    let myJson = await Obj1.text();
    console.log(myJson);

    const jsonExtracted = JSON.parse(myJson);
    console.log(jsonExtracted);

    for (let i = 0; i < dollarValue.length; i++) {
        dollarValue[i].textContent = '$' + jsonExtracted[i].amount;
        day[i].textContent = jsonExtracted[i].day;
        bar[i].style.height = jsonExtracted[i].amount*3 + 'px';

        const nowDay = new Date().getUTCDay();
        bar[nowDay].style.backgroundColor = 'hsl(186, 34%, 60%)';
    }

}

//JSON parse(); stringify();
var obj = {name: 'Fred', age: 20, study: 'Civic Education'};
var s = JSON.stringify(obj);
var q = JSON.parse(s);
for (const key in q) {
    if (Object.hasOwnProperty.call(q, key)) {
        // console.log(`${key}: ${q[key]}`);
    }
}