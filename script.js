var projectOne = document.getElementById("project1");
var imgs = projectOne.querySelectorAll(".project");
var imgLength = imgs.length;

t = 0;
var gap = 20;
var tot = 0;

// position each img next to each other
for (var i = 0; i < imgLength; i++) {
  var img = imgs[i];

  if (i == 0) {
    img.style.transform = "translate3D(" + tot + "px, -50%, 0)";
  }

  if (i > 0) {
    var prev = imgs[i - 1];
    var prevWidth = prev.clientWidth + gap;
    tot += prevWidth;
    img.style.transform = "translate3D(" + tot + "px, -50%, 0)";
  }
}

function scroll() {
  // check all images to see off left
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var distLeft = img.getBoundingClientRect().left;

    // is this img off screen?
    if (distLeft < 0 - img.clientWidth) {
      var index = i - 1;
      if (index < 0) {
        index = imgLength - 1;
      }

      // get last element postion
      var lastPos = imgs[index].style.transform.split(/[()]/)[1];
      var lastX = lastPos.split(",")[0];
      newX = parseInt(lastX) + imgs[index].clientWidth + gap;

      // push off screen element to end of divs
      img.style.transform = "translate3D(" + newX + "px, -50%, 0)";
    }
  }

  // lets just move the scroller to the left
  t -= 1;
  projectOne.style.transform = "translate3D(" + t + "px, 0, 0)";
  requestAnimationFrame(scroll);
}
requestAnimationFrame(scroll);
