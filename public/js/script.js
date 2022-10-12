document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("modern-restaurant-application JS imported successfully!");
  },
  false
);

// Call function only on specific page ('/menu');
if (window.location.pathname==='/menu') {
  trimDescription();
}

// a function to trim longer descriptions to max. 100 characters
function trimDescription() {
  const descriptionArr = document.getElementsByClassName("description-excerpt");
  if (descriptionArr.length > 0) {
    for (let i = 0; i < descriptionArr.length; i++) {
      if (descriptionArr[i].innerHTML.length > 100) {
        const descriptionStr = descriptionArr[i].innerHTML;
        const newStr = descriptionStr.substring(0, 100) + "...";
        descriptionArr[i].innerHTML = newStr;
      }
    }
  }
}

