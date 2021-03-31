const sideMenu = document.querySelector(".slider-nav");

const mediaQuery = window.matchMedia("(max-width: 796px)");

showMenu = () => {
    sideMenu.style.display = "block";
}

hideMenu = () => {
    sideMenu.style.display = "none";
}

handleTabletChange = (e) => {
if (!e.matches) {
    sideMenu.style.display = "none";
  }
};

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);