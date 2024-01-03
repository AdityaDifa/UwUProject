function toggleButton() {
  // Dapatkan elemen tombol dan kotak
  var button = document.getElementById("toggleButton");
  var box = document.getElementById("hiddenBox-1");

  box.style.display = "block";
  button.style.display = "none";
  //   // Toggle antara menampilkan dan menyembunyikan kotak
  //   if (box.style.display === "none") {
  //     box.style.display = "block";
  //     button.style.display = "none";
  //   } else {
  //     box.style.display = "none";
  //     button.style.display = "block";
  //   }
}
function toggleButton2() {
  var box = document.getElementById("hiddenBox-2");
  var box_before = document.getElementById("hiddenBox-1");

  box.style.display = "block";
  box_before.style.display = "none";
}
function toggleButton3() {
  var box = document.getElementById("hiddenBox-3");
  var box_before = document.getElementById("hiddenBox-2");

  box.style.display = "block";
  box_before.style.display = "none";
}
function toggleButton4() {
  var box = document.getElementById("hiddenBox-4");
  var box_before = document.getElementById("hiddenBox-3");

  box.style.display = "block";
  box_before.style.display = "none";
}
function toggleButton5() {
    var box = document.getElementById("hiddenBox-5");
    var box_before = document.getElementById("hiddenBox-4");
  
    box.style.display = "block";
    box_before.style.display = "none";
  }
function toggleButton6() {
    var box = document.getElementById("hiddenBox-6");
    var box_before = document.getElementById("hiddenBox-5");
  
    box.style.display = "block";
    box_before.style.display = "none";
}