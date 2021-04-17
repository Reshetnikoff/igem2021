const team = [
  {
    name: 'Надежда Азбукина',
    img: './img/team/azbukina_nadezhda.jpg',
    info: '',
  },
  {
    name: 'Дарья Баранова',
    img: './img/team/baranova_darya.jpg',
    info: '',
  },
  {
    name: 'Виктория Чебаненко',
    img: './img/team/chebanenko_viktorya.jpg',
    info: '',
  },
  {
    name: 'Георгий Чистов',
    img: './img/team/chistov_george.jpg',
    info: '',
  },
  {
    name: 'Маргарита Егиян',
    img: './img/team/egian_margarita.jpg',
    info: '',
  },
  {
    name: 'Марина Фроленкова',
    img: './img/team/frolenkova_marina.jpg',
    info: '',
  },
  {
    name: 'Екатерина Ганжула',
    img: './img/team/ganzhula_ekaterina.jpg',
    info: '',
  },
  {
    name: 'Анна Капитонова',
    img: './img/team/kapitonova_anna.jpg',
    info: '',
  },
  {
    name: 'Анастасия Кислова',
    img: './img/team/kislova_anastasia.jpg',
    info: '',
  },
  {
    name: 'Екатерина Колодяжная',
    img: './img/team/kolodyazhnaya_ekaterina.jpg',
    info: '',
  },
  {
    name: 'Валентина Костенко',
    img: './img/team/kostenko_valentina.jpg',
    info: '',
  },
  {
    name: 'Павел Кравченко',
    img: './img/team/kravchenko_pavel.jpg',
    info: '',
  },
  {
    name: 'Екатерина Кравчук',
    img: './img/team/kravchuk_ekaterina.jpg',
    info: '',
  },
  {
    name: 'Ксения Кусакина',
    img: './img/team/kusacina_ksenia.jpg',
    info: '',
  },
  {
    name: 'Дарья Лунегова',
    img: './img/team/lunegova_darya.jpg',
    info: '',
  },
  {
    name: 'Дарья Малинина',
    img: './img/team/malinina_darya.jpg',
    info: '',
  },
  {
    name: 'Наида Мамаева',
    img: './img/team/mamaeva_naida.jpg',
    info: '',
  },
  {
    name: 'Мария Медведева',
    img: './img/team/medvedeva_maria.jpg',
    info: '',
  },
  {
    name: 'Александр Минаков',
    img: './img/team/minakov_alexander.jpg',
    info: '',
  },
  {
    name: 'Никита Моторин',
    img: './img/team/motorin_nikita.jpg',
    info: '',
  },
  {
    name: 'Вячеслав Паско',
    img: './img/team/pasko_vyacheslav.jpg',
    info: '',
  },
  {
    name: 'Кирилл Решетников',
    img: './img/team/reshetnikov_kirill.jpg',
    info: '',
  },
  {
    name: 'Анастасия Щербакова',
    img: './img/team/sherbakova_anastasia.jpg',
    info: '',
  },
  {
    name: 'Валерия Спиридонова',
    img: './img/team/spiridonova_valeria.jpg',
    info: '',
  },
  {
    name: 'Алена Старикова',
    img: './img/team/starikova_alyona.jpg',
    info: '',
  },
  {
    name: 'Вера Сысоева',
    img: './img/team/sysoeva_vera.jpg',
    info: '',
  },
  {
    name: 'Юлия Васильева',
    img: './img/team/vasilyeva_julia.jpg',
    info: '',
  },
  {
    name: 'Диана Загирова',
    img: './img/team/zagirova_diana.jpg',
    info: '',
  },
  {
    name: 'Полина Журлова',
    img: './img/team/zhurlova_polina.jpg',
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

    if (end >= team.length) {
      right.classList.add('hidden');
    } else {
      right.classList.remove('hidden');
    }
    list = team.slice(start, end);
    renderTeam(list);
  }
  
  setPosition(elemNumber, start, team);
  

  left.addEventListener('click', () => {
    start -= elemNumber;
    setPosition(elemNumber, start, team);
  })

  right.addEventListener('click', () => {
    start += elemNumber;
    setPosition(elemNumber, start, team);
  })

}

function init() {
  setSlider(team);
}

document.addEventListener('DOMContentLoaded', init);