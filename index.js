const team = [
  {
    name: 'Надежда Азбукина',
    img: './img/team/azbukina.png',
    info: '',
  },
  {
    name: 'Дарья Баранова',
    img: './img/team/baranova.jpeg',
    info: '',
  },
  {
    name: 'Вера Сысоева',
    img: './img/team/sysoeva.jpg',
    info: '',
  },
  {
    name: 'Екатерина Ганжула',
    img: './img/team/ganzhula.png',
    info: '',
  },
  {
    name: 'Дарья Лунегова',
    img: './img/team/lunegova.jpg',
    info: '',
  },
  {
    name: 'Диана Загирова',
    img: './img/team/zagirova.png',
    info: '',
  },
];

function renderTeam (list) {
  const itemsWrapper = document.querySelector('.team__items-wrapper');
  let html = '';
  list.forEach(member => {
    html += `<div class="team__item">
        <div class="team__portrait" style="background-image: url(${member.img});"></div>
        <h3 class="team__name">${member.name}</h3>
      </div>`;
  });
  itemsWrapper.innerHTML = html;
}

function setSlider (team) {
  const slider = document.querySelector('.team__slider');
  const left = document.querySelector('#slider-left');
  const right = document.querySelector('#slider-right');
  let elemNumber = 0, start = 0, end = 0;
  let list = [];

  if (slider.offsetWidth >= 1000) {
    elemNumber = 4;
  } else if (slider.offsetWidth >= 768) {
    elemNumber = 3;
  }

  const setPosition = (elemNumber, start, team) => {
    if (start == 0) {
      left.classList.add('hidden');
    } else {
      left.classList.remove('hidden');
    }

    end = start + elemNumber;

    if (end == team.length) {
      right.classList.add('hidden');
    } else {
      right.classList.remove('hidden');
    }
    list = team.slice(start, end);
    renderTeam(list);
  }
  
  setPosition(elemNumber, start, team);
  

  left.addEventListener('click', () => {
    start -= 1;
    setPosition(elemNumber, start, team);
  })

  right.addEventListener('click', () => {
    start += 1;
    setPosition(elemNumber, start, team);
  })

}

function init() {
  setSlider(team);
}

document.addEventListener('DOMContentLoaded', init);