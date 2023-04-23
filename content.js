function clickButton() {
    const button = document.querySelector("button.css-1x8cf1d.edgvbvh10");
    if (button) {
      button.click();
      console.log("clicking button every second");
    }
  }
  
  setInterval(clickButton, 60*1000);
  