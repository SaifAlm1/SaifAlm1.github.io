document.addEventListener("DOMContentLoaded", function() {
  const segments = document.querySelectorAll('.segment');

  segments.forEach(segment => {
    segment.addEventListener('mouseover', function() {
      this.style.transform = "scale(1.05)";
      this.style.backgroundColor = "rgba(0, 255, 255, 0.3)";
    });

    segment.addEventListener('mouseout', function() {
      this.style.transform = "scale(1)";
      this.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    });
  });
});
