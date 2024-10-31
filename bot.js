const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')
const loaders = document.getElementById('loaders')
const container = document.getElementsByClassName('container')

let init = 0

const botSay = (data) => {
	return [
		"halo nama saya nirvanaBot siapa nama kamu.....",
		`halo ${data?.nama}, berapa usia kamu`,
		`ohhhh ${data?.usia}, kalo hobby kamu apa?`,
		`jir sama ${data?.hobi}, ada pacar gak lu btw`,
		`ada namanya ${data?.pacar}, dah ya byee`,
	] 
}

pertanyaan.innerHTML = botSay()[0] //array 0

let usersData = []

function botStart(){
	if(jawaban.value.Length < 1) return alert ('silahkan isi jawaban dulu')
	init++
	if (init === 1){
		botDelay({nama: jawaban.value})
	}else if(init === 2){
		botDelay({usia: jawaban.value})
	}else if(init === 3){
		botDelay({hobi: jawaban.value})
	}else if(init === 4){
		botDelay({pacar: jawaban.value})
	}else if(init === 5){
		finishing()
	}else{
		botEnd()
	}
}

function botDelay(jawabanUser){
	loaders.style.display = "block";
	container[0].style.filter = "blur(8px)"
	setTimeout ( () => {
		pertanyaan.innerHTML = botSay(jawabanUser) [init] 
		loaders.style.display = "none"     
		container[0].style.filter = "none"
	}, [1000])
	usersData.push(jawaban.value)
	jawaban.value = ""
}

function finishing(){
	pertanyaan.innerHTML = `hehehehe terimakasih ${usersData[0]} sudah mampir`
	jawaban.value = ""
}

function botEnd(){
	alert(`terimakasih ${usersData} sudah mampir, anda akan diantar kehalaman utama lagi`)
    window.location.reload()
}
