window.addEventListener("load", (event) => {
  let x = false;
  let x2 = false;
  let x3 = false;

  let button = document.querySelectorAll(".openwindow");
  button.forEach((item) => {
    item.addEventListener("click", function showWindow(e) {
      e.preventDefault();
      if (x == false) {
        document.querySelectorAll(".windowl").forEach((item) => {
          item.style.display = "block";
          item.style.width = "auto";
        });

        x = true;
      } else {
        document.querySelectorAll(".windowl").forEach((item) => {
          item.style.width = "0";
          item.style.display = "none";
        });
        x = false;
      }
    });
  });

  let button2 = document.querySelectorAll(".openupdatewindow");
  button2.forEach((item) => {
    item.addEventListener("click", function showWindow(e) {
      e.preventDefault();
      if (x2 == false) {
        document.querySelectorAll(".updatewindow").forEach((item) => {
          item.style.display = "block";
          item.style.width = "100%";
        });
        x = true;
        x2 = true;
      } else {
        document.querySelectorAll(".updatewindow").forEach((item) => {
          item.style.width = "0";
          item.style.display = "none";
        });
        x2 = false;
      }
    });
  });
});
