function toggle(){

  const content = document.getElementById("social-container");
  const mobileContent = document.getElementById("mobile-share-content")
  const isMobileScreen = window.matchMedia("(max-width: 900px)").matches;
  const btnSection = document.getElementById("btn-section")
  const profileCard = document.getElementById("profileCard")


  if(content.style.display === "none" && !isMobileScreen){
    content.style.display = "block";
    btn.style.color = "hsl(217, 19%, 35%)"
  } else{
    content.style.display = "none";
  }

  if(isMobileScreen && mobileContent.style.display === "none") {
    mobileContent.style.display = "block";
    btnSection.style.backgroundColor = "hsl(217, 19%, 35%)"
    profileCard.style.visibility = "hidden"
  } else {
    mobileContent.style.display = "none";
    btnSection.style.backgroundColor = "white"
    profileCard.style.visibility = "visible"
  }
}
