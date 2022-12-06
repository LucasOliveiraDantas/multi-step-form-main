
function cardM(){
	let swithcPlan = document.getElementById('switch-plan')
	swithcPlan.classList.add("monthly")
	swithcPlan.classList.remove("yearly")

	let descPlanArcade = document.getElementById("desc-card-arcade-monthly")
	descPlanArcade.innerHTML = "$9/mo"

	let descPlanAdvanced = document.getElementById("desc-card-advanced-monthly")
	descPlanAdvanced.innerHTML = "$12/mo"

	let descPlanPro = document.getElementById("desc-card-pro-monthly")
	descPlanPro.innerHTML = "$15/mo"

	let descCardyearly = document.getElementById("desc-card-info-yearly")
	
	

}	

function cardY(){
	let swithcPlan = document.getElementById('switch-plan')
	swithcPlan.classList.add("yearly")
	swithcPlan.classList.remove("monthly")



	let descPlanArcade = document.getElementById("desc-card-arcade-monthly")
	descPlanArcade.innerHTML = "$90/yr"

	let descPlanAdvanced = document.getElementById("desc-card-advanced-monthly")
	descPlanAdvanced.innerHTML = "$120/yr"

	let descPlanPro = document.getElementById("desc-card-pro-monthly")
	descPlanPro.innerHTML = "$150/yr"
}	


