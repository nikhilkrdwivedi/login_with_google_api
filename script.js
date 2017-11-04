function onSignIn(googleUser) {
	var profile=googleUser.getBasicProfile();
	//document.getElementById("error").innerHTML=profile;
	$(".g-signin2").css("display","none");
	$(".data").css("display","block");
	$("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
}