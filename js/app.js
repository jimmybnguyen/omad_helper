$('.my-form').on('submit', function () {
	var list = [];
	var startValue = document.getElementById("start").value;
	var endValue = document.getElementById("end").value;
    for (var i = startValue; i <= endValue; i++) {
    	list.push(i);
    }
	document.getElementById("result").value = list;
	return false;
});