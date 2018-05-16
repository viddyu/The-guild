/*$(document).ready(function(){

var modal = $("#id01");

$(window).on("click", function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
})

});*/





var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}