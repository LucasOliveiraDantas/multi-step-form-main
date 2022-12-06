function stepPersonal(){
	let formPersonal = document.querySelector(".form-personal")
	formPersonal.style.display = "block"

	let formPlan = document.querySelector(".form-plan")
	formPlan.style.display = "none"
}

function stepPlan(){
	let formPlan = document.querySelector(".form-plan")
	formPlan.style.display = "block"

	let formPersonal = document.querySelector(".form-personal")
	formPersonal.style.display = "none"
}