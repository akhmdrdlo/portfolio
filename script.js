function handleScroll() {
    var about = document.querySelector('.about-me');
    var aboutPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (aboutPosition > (about.offsetTop - windowHeight + 100)) {
      about.classList.add('show');
    } else {
      about.classList.remove('show');
    }

    var skill = document.querySelector('.skill');
    var skillPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (skillPosition > (skill.offsetTop - windowHeight + 100)) {
      skill.classList.add('show');
    } else {
      skill.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleScroll);