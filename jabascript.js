
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	alert("ধন্যবাদ! তোমার ফর্মটি সফলভাবে পরীক্ষা করা হয়েছে।");

	form.reset();
});
