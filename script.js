const body = document.querySelector("body"),
      nav =  document.querySelector("nav"),
      modeToggle =  document.querySelector(".dark-light"),
      searchToggle  =  document.querySelector(".searchToggle"),
      siderbarOpen  =  document.querySelector(".siderbarOpen"),
      siderbarClose=  document.querySelector(".siderbarClose");


    //  js code  to toggel dark and light mode
      modeToggle.addEventListener("click",() =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

    // js code to keep user selcected mode even page refresh or file respons

        if(!body.classList.contains("dark")){
          localStorage.setItem("mode ", "light-mode");
        }else{
          localStorage.setItem("mode" , "dark-mode")
        }
      });


    //  js code  to toggel dark search box
    searchToggle.addEventListener("click",() =>{
      searchToggle.classList.toggle("active");
      
      });

      // js code to toggle siderbar
      siderbarOpen.addEventListener("click",() =>{
        nav.classList.add("active");
      });
      // js code to toggle siderbar
       body.addEventListener("click",e =>{
        let clickElm = e.target;
        
        if(!clickElm.classList.contains("siderbarOpen") && !clickElm.classList.contains("menu"))
        nav.classList.remove("active");
       });


      //  skill section for js

      let boxes = document.querySelectorAll(".box");

      window.onload = function(){
        load_bars();
      }

      function load_bars(){
        boxes.forEach(box =>{
          let line = box.querySelector(".line");
          let increasing_percentage = box.querySelector(".increasing_percentage");
          let total_percentage = box.querySelector(".total_percentage")

          let p = 0;
          let my_interval = setInterval(() =>{
            p++;
            line.style.width = p + "%";
            increasing_percentage.innerHTML = p + "%";
            if(increasing_percentage.innerHTML == total_percentage.innerHTML ){
              clearInterval(my_interval);
            }

          }, 25);
        })
      }

      // softskill for js code
      let circularProgress = document.querySelector(".circular_progress"),
          progressValue = document.querySelector(".progress-value");

      let progressStarValue  = 0,
          progressEndValue = 90,
          speed = 25;

     let progress = setInterval(() =>{
      progressStarValue++

      progressValue.textContent = `${progressStarValue}%`
      circularProgress.style.background = `conic-gradient(#4070F4 ${progressStarValue * 3.6}deg,#ededed 0deg)`

      if(progressStarValue == progressEndValue){
        clearInterval(progress);
      }
    
     },speed);

      
// project section sof js code

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
     