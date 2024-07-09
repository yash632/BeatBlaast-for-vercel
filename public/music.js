pbctrl = localStorage.getItem("pbctrl");

if (pbctrl == "loop") {
  document.querySelector(".pbctrl").src = "loop.svg";
}
if (pbctrl == "autonext") {
  document.querySelector(".pbctrl").src = "autonext.svg";
}

document.querySelector(".pbctrl").addEventListener("click", function () {
  if (document.querySelector(".pbctrl").src.includes("loop.svg")) {
    document.querySelector(".pbctrl").src = "autonext.svg";
    localStorage.setItem("pbctrl", "autonext");
  } else {
    document.querySelector(".pbctrl").src = "loop.svg";
    localStorage.setItem("pbctrl", "loop");
  }
});

if (!localName && !localEmail && !localPassword && !localPhone) {
  window.location.href = "index.html";
}

async function retrieveReview() {
  try {
    const response = await fetch(`${webUri}all_reviews`);
    if (response.ok) {
      const reviews = await response.json();

      let htmlReviewData = document.querySelector(".reviewData");
      htmlReviewData.innerHTML = "";

      for (let reviewData of reviews) {
        const reviewElement = document.createElement("li");
        reviewElement.classList.add("reviewData_li");
        reviewElement.innerHTML = `<span>${reviewData.nameForReview}: </span><span>${reviewData.reviewInput}</span>`;
        // Append the new list item to the container
        htmlReviewData.prepend(reviewElement);
      }
    } else {
      console.error("Failed to fetch reviews");
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}

let reviewTab = document.querySelector(".review");
reviewTab.addEventListener("click", async function () {
  if (
    document.querySelector(".searchListCont").classList.contains("searchNone")
  ) {
  } else {
    //document.querySelector('.searchListCont').classList.add('searchNone');
    document.querySelector(".searchBack").click();
  }
  document.querySelector(".reviewCont").classList.remove("searchNone");
  document.querySelector(".right_head").classList.add("none");
  document.querySelector(".control_details").classList.add("none");
  document.querySelector(".right_cont").classList.add("none");

  if (left.classList.contains("leftactive")) {
    left.classList.remove("leftactive");
  }
  left.classList.add("left");

  if (!reviewTab.classList.contains("reviewAdded")) {
    retrieveReview();
    reviewTab.classList.add("reviewAdded");
  }
});

//……………………………Review……………………………………
let reviewForm = document.querySelector("#reviewForm");
reviewForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  let nameForReview = localStorage.getItem("fullName");

  let reviewInput = document.getElementById("reviewInput").value.trim();

  try {
    const response = await fetch(`${webUri}submit_review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameForReview, reviewInput }),
    });

    if (response.ok) {
      document.getElementById("reviewInput").value = "";
      document.querySelector(".reviewSuccess").classList.remove("snone");
      setTimeout(() => {
        document.querySelector(".reviewSuccess").classList.add("snone");
      }, 3000);
      retrieveReview();
    } else {
      alert(`fail to send review`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
//…………………………Review END……………………………

//…………………Some eventListeners………………
let left = document.querySelector(".left");

document.querySelector(".hamburger").addEventListener("click", function () {
  left.classList.remove("left");
  left.classList.add("leftactive");
});

document.querySelector(".cut").addEventListener("click", function () {
  left.classList.remove("leftactive");
  left.classList.add("left");
});
document.querySelector(".about").addEventListener("click", function () {
  window.open("about.html", "_blank");
});

document.querySelector(".infotab").addEventListener("click", function () {
  document.querySelectorAll(".home_list").forEach((item) => {
    item.classList.add("none");
  });
  document.querySelector(".info_data").classList.remove("none");
  document.querySelector(".info_data").innerHTML =
    `<img src="back.svg" class="info_back invert">${details}`;
  document.querySelector(".info_back").addEventListener("click", function () {
    document.querySelector(".info_data").classList.add("none");

    document.querySelectorAll(".home_list").forEach((item) => {
      item.classList.remove("none");
    });
  });
});

document.querySelector(".search_tab").addEventListener("click", function () {
  if (document.querySelector(".reviewCont").classList.contains("searchNone")) {
  } else {
    //document.querySelector('.reviewCont').classList.add('searchNone');
    document.querySelector(".reviewBack").click();
  }
  document.querySelector(".searchListCont").classList.remove("searchNone");
  document.querySelector(".right_head").classList.add("none");
  document.querySelector(".right_cont").classList.add("none");

  if (left.classList.contains("leftactive")) {
    left.classList.remove("leftactive");
    left.classList.add("left");
  }
});

document.querySelector(".searchBack").addEventListener("click", function () {
  document.querySelector(".searchListCont").classList.add("searchNone");
  document.querySelector(".right_head").classList.remove("none");
  document.querySelector(".right_cont").classList.remove("none");
});

document.querySelector(".logOut").addEventListener("click", function () {
  idFlag = 0;
  localStorage.setItem("idFlag", idFlag);
  window.location.href = "index.html";
});

document.querySelector(".reviewBack").addEventListener("click", function () {
  document.querySelector(".reviewCont").classList.add("searchNone");
  document.querySelector(".right_head").classList.remove("none");
  document.querySelector(".control_details").classList.remove("none");
  document.querySelector(".right_cont").classList.remove("none");
});
//…………………EventListeners END………………
