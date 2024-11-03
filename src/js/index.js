const btnAdvice = document.getElementById('btn');
const idAdvice = document.querySelector('.advice-number');
const advice = document.getElementById('advice-text');


async function changeAdvices() {
    try {
        const url = "https://api.adviceslip.com/advice";
        const response = await fetch(url);
        const data = await response.json()
        if(!response.ok){
            throw "Foi encontrado um erro"
        }
        idAdvice.innerText = `${data.slip.id}`
        advice.innerText = `${data.slip.advice}`

    } catch (error) {
        console.log("Não foi possível buscar conselho");
    }
}

btnAdvice.addEventListener('click', changeAdvices);




