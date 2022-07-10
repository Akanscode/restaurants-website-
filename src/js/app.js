// toggle navbar dropdown

/*var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");
document.onclick = check;

function check(e) {
  var target = (e && e.target) || (event && event.srcElement);
  // Nav Menu

  if (!checkParent(target, navMenuDiv)) {
    // click not on the menu

    if (checkParent(target, navMenu)) {
      // click o the lik

      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      navMenuDiv.classList.add("hidden");
    }
  }
}



function checkParent(t, elm) {
  while (t.parentNode) {
    if (t === elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}*/

let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex ");
};
//tabs

function setup() {
  return {
    activeTab: 0,
    tabs: ["All", "Breakfast", "Dinner", "Lunch"],
  };
}
