import ScrollReveal from 'scrollreveal'

const scrollReveal = () => {
  // SCROLL REVEAL ANIMATION
  const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  });
  
  // profile
  sr.reveal(`.profile_border`);
  sr.reveal(`.profile_name`, { delay: 500 });
  sr.reveal(`.profile_profession`, { delay: 600 });
  sr.reveal(`.profile_social`, { delay: 700 });
  sr.reveal(`.profile_info-group`, { interval: 100, delay: 300 });
  sr.reveal(`.profile_buttons`, { delay: 800 });
  
  // Filters
  sr.reveal(`.filters_content`, { delay: 900 });
  sr.reveal(`.filters`, { delay: 1000 });
}

export default scrollReveal;