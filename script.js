function handleMouseFollower(sectionSelector, elementSelector) {
  const section = document.querySelector(sectionSelector);
  const element = section.querySelector(elementSelector);

  if (!section || !element) return;

  section.addEventListener('mousemove', (event) => {
    const sectionRect = section.getBoundingClientRect();

    // Check if mouse is within the section bounds
    if (event.clientX >= sectionRect.left && event.clientX <= sectionRect.right && event.clientY >= sectionRect.top && event.clientY <= sectionRect.bottom) {
      element.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    }
  });
}

function getScreenWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

document.addEventListener('DOMContentLoaded', () => {
  handleMouseFollower('.section.section-random', '.box');
  handleMouseFollower('.section.section-02', '.box');
});
