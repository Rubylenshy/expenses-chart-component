const chart = document.querySelector('.chart')


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

    const jsonExtracted = JSON.parse(myJson);
    
    let htmlChart = ''; 
    jsonExtracted.forEach(item=>{
        let newChart = `<div class="day">
                            <div class="value">$${item.amount}</div>
                            <div class="bar" style="height: ${item.amount*3}px;"></div>
                            <p>${item.day}</p>
                        </div>`
    
        htmlChart += newChart;

        
    })

    chart.innerHTML = htmlChart;
        window.addEventListener('load', ()=>{
            const bar = document.querySelectorAll('.bar')
            const newDay = new Date().getUTCDay();
            for (let i = 0; i < bar.length; i++) {
                bar[newDay-1].style.backgroundColor = `hsl(186, 34%, 60%)`;
            }
        });

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