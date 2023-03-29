/*
Místo pro váš program
*/
/* OBRAZEK */
let obrazek = document.querySelector('.img');
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
        obrazek.style.marginLeft="100px";
    }

    if (event.key === 'ArrowLeft'){
        obrazek.style.marginLeft="20px"
    }
})

/* FORMULAR */
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

let uvod = document.querySelector('.uvod');
let neuspech = document.querySelector('.neuspech');

const formular = document.querySelector('#prihlaseni')
formular.addEventListener('submit', (event) => {
    event.preventDefault()
    const emailVstup = document.querySelector('#email');
    const hesloVstup = document.querySelector('#heslo');
    const email = emailVstup.value;
    const heslo = hesloVstup.value;
	if (email === user.email && heslo === user.password){
        uvod.innerHTML = "Přihlášený uživatel: " + user.name;

    } else {
        console.log('Dostalo se to sem.')
        neuspech.textContent = "Neplatné přihlašovací údaje!";
        neuspech.style.color = "red";
        emailVstup.value = email;
        hesloVstup.value = "";

    }
});

