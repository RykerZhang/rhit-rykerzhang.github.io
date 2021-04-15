
var rhit = rhit || {};

rhit.brightnesscount = 0;
rhit.lightness = class {
	constructor() {
        this.updateView();
        const button = document.querySelector("#brightness");
        button.onclick = (event) => {
            rhit.brightnesscount++;
            
            this.updateView();
            console.log("color changed");
        }
	}
    updateView(){
        if(rhit.brightnesscount%2==1){
            document.body.background = "images/backgroundDark.jpg";
            document.querySelector("#brightness").style.backgroundColor="darkslategrey";
            document.querySelector("#brightness").innerHTML = "Dark";
            document.querySelector("#brightness").style.color = "white";
            document.body.style.color = "white";
        }else if(rhit.brightnesscount%2==0){
            document.body.background = "images/backgroundLight.jpg";
            document.querySelector("#brightness").style.backgroundColor="#F2E18D";
            document.querySelector("#brightness").innerHTML = "Bright"
            document.querySelector("#brightness").style.color = "#F29544";
            document.body.style.color = "#F29544";

        } 
    }
}



/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
    new rhit.lightness;
};

rhit.main();
