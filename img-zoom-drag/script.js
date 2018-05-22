/*------------------- Image zoom on mouse scroll up/down ---------------------*/

  function imgZoom() {
    event.preventDefault();
    const img = document.querySelector(".img-viewer>img");
    const image = new Image();
    image.src = img.getAttribute("src");
    const imgOriginalWidth = image.naturalWidth;
    const imgWidth = parseInt(window.getComputedStyle(img).width);

    if(event.deltaY < 0) {
      if (imgWidth >= (imgOriginalWidth * 4)) {
        return;
      }
      img.style.width = imgWidth + Math.ceil(imgOriginalWidth / 4) +"px";
    }
    else {
      if (imgWidth <= (imgOriginalWidth / 4)) {
        return;
      }
      img.style.width = imgWidth - Math.ceil(imgOriginalWidth / 4) + "px";
    }
  }

  /*------------------- Image grab & move ---------------------*/

  let isMouseDown = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;
  const imgViewer = document.querySelector(".img-viewer");

  /*------------------- Mouse down ---------------------*/
  imgViewer.addEventListener('mousedown', (event) => {
    imgViewer.classList.add("active");
    isMouseDown = true;
    startX = event.pageX - imgViewer.offsetLeft;
    startY = event.pageY - imgViewer.offsetTop;
    scrollLeft = imgViewer.scrollLeft;
    scrollTop = imgViewer.scrollTop;
  })

  /*------------------- Mouse leave ---------------------*/
  imgViewer.addEventListener('mouseleave', () => {
    isMouseDown = false;
    imgViewer.classList.remove("active");
  })

  /*------------------- Mouse up ---------------------*/
  imgViewer.addEventListener('mouseup', () => {
    isMouseDown = false;
    imgViewer.classList.remove("active");
  })

  /*------------------- Mouse move ---------------------*/
  imgViewer.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
      event.preventDefault();
      const x = event.pageX - imgViewer.offsetLeft;
      const y = event.pageY - imgViewer.offsetTop;
      const moveX = (x - startX) * 3;
      const moveY = (y - startY) * 2;
      imgViewer.scrollLeft = scrollLeft - moveX;
      imgViewer.scrollTop = scrollTop - moveY;
    }
  })