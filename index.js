const team = [
  {
    name: 'Дарья Малинина',
    img: './img/team/malinina_darya.jpg',
    info: 'Куратор научной части<br>Организатор',
  },

  {
    name: 'Кирилл Решетников',
    img: './img/team/reshetnikov_kirill.jpg',
    info: 'Куратор научной части<br>Организатор',
  },

  {
    name: 'Алёна Старикова',
    img: './img/team/starikova_alyona.jpg',
    info: 'Куратор научной части<br>Организатор',
  },

  {
    name: 'Вера Сысоева',
    img: './img/team/sysoeva_vera.jpg',
    info: 'Куратор научной части<br>Организатор',
  },

  {
    name: 'Марина Фроленкова',
    img: './img/team/frolenkova_marina.jpg',
    info: 'Ответственная за фандрайзинг',
  },
  
  {
    name: 'Анастасия Кислова',
    img: './img/team/kislova_anastasia.jpg',
    info: 'Ответственная за мероприятия',
  },
  
  {
    name: 'Полина Журлова',
    img: './img/team/zhurlova_polina.jpg',
    info: 'Ответственная за CMM',
  },
  
  {
    name: 'Артём Мурзин',
    img: './img/team/murzin_artyom.jpg',
    info: 'Сухая лаборатория',
  },
  
  {
    name: 'Валентина Костенко',
    img: './img/team/kostenko_valentina.jpg',
    info: 'Мокрая лаборатория',
  },
  
  {
    name: 'Иван Кутелёв',
    img: './img/team/kutelev_ivan.jpg',
    info: 'Мокрая лаборатория',
  },
  
  {
    name: 'Александр Минаков',
    img: './img/team/minakov_alexander.jpg',
    info: 'Сухая лаборатория',
  },
  
  {
    name: 'Юлия Васильева',
    img: './img/team/vasilyeva_julia.jpg',
    info: 'Связи с общественностью',
  },
  
  {
    name: 'Валерия Спиридонова',
    img: './img/team/spiridonova_valeria.jpg',
    info: 'Ответственная за коллаборации',
  },

  {
    name: 'Анна Капитонова',
    img: './img/team/kapitonova_anna.jpg',
    info: 'Связи с общественностью',
  },
  
  {
    name: 'Надежда Азбукина',
    img: './img/team/azbukina_nadezhda.jpg',
    info: 'Сухая лаборатория',
  },
  
  {
    name: 'Вячеслав Паско',
    img: './img/team/pasko_vyacheslav.jpg',
    info: 'Сухая лаборатория',
  },
  
  {
    name: 'Диана Загирова',
    img: './img/team/zagirova_diana.jpg',
    info: 'Связи с общественностью',
  },
  
  {
    name: 'Екатерина Колодяжная',
    img: './img/team/kolodyazhnaya_ekaterina.jpg',
    info: 'Мокрая лаборатория',
  },
  
  {
    name: 'Виктория Чебаненко',
    img: './img/team/chebanenko_viktorya.jpg',
    info: 'Ответственная за PR',
  },
  
  {
    name: 'Екатерина Ганжула',
    img: './img/team/ganzhula_ekaterina.jpg',
    info: 'Мокрая лаборатория',
  },

  {
    name: 'Дарья Лунегова',
    img: './img/team/lunegova_darya.jpg',
    info: 'Мокрая лаборатория',
  },
  
  {
    name: 'Екатерина Кравчук',
    img: './img/team/kravchuk_ekaterina.jpg',
    info: 'Мокрая лаборатория',
  },
  
  {
    name: 'Ксения Кусакина',
    img: './img/team/kusacina_ksenia.jpg',
    info: 'Мокрая лаборатория',
  },
  
  {
    name: 'Дарья Баранова',
    img: './img/team/baranova_darya.jpg',
    info: 'Связи с общественностью',
  },
  
  {
    name: 'Наида Мамаева',
    img: './img/team/mamaeva_naida.jpg',
    info: 'Мокрая лаборатория',
  },
  
  {
    name: 'Георгий Чистов',
    img: './img/team/chistov_george.jpg',
    info: 'Сухая лаборатория',
  },
  
  {
    name: 'Павел Кравченко',
    img: './img/team/kravchenko_pavel.jpg',
    info: 'Сухая лаборатория',
  },
  
  // {
  //   name: 'Никита Моторин',
  //   img: './img/team/motorin_nikita.jpg',
  //   info: 'Сухая лаборатория',
  // },
  
  {
    name: 'Маргарита Егиян',
    img: './img/team/egian_margarita.jpg',
    info: 'Связи с общественностью',
  },
  
  {
    name: 'Мария Медведева',
    img: './img/team/medvedeva_maria.jpg',
    info: 'Мокрая лаборатория',
  },

  {
    name: 'Константин Каменский',
    img: './img/team/kamenskii_konstantin.jpg',
    info: 'Мокрая лаборатория',
  },

  {
    name: 'Анастасия Щербакова',
    img: './img/team/sherbakova_anastasia.jpg',
    info: 'Связи с общественностью',
  },

  {
    name: 'Дарья Маркова',
    img: './img/team/markova_darya.jpg',
    info: 'Соцсети и дизайн',
  },
  
];

const sponsors = [
  {
    name: 'Биологический факультет МГУ',
    img: './img/sponsors/biofac.jpg',
    link: 'http://www.bio.msu.ru/',
  },
  {
    name: 'МГУ',
    img: './img/sponsors/msu.png',
    link: 'https://www.msu.ru',
  },
];

function renderTeam (list) {
  const itemsWrapper = document.querySelector('.team__items-wrapper');
  let html = '';
  list.forEach(member => {
    html += `<div class="team__item">
        <div class="team__portrait" style="background-image: url(${member.img});"></div>
        <h3 class="team__name">${member.name}</h3>
        <p class="team__info">${member.info}</p>
      </div>`;
  });
  itemsWrapper.innerHTML = html;
}

function renderSponsors (list) {
  const itemsWrapper = document.querySelector('.sponsors__items-wrapper');
  let html = '';
  list.forEach(sponsor => {
    html += `<div class="sponsors__item" title="${sponsor.name}">
        <a href="${sponsor.link}"> <div class="sponsors__logo" style="background-image: url(${sponsor.img});"></div></a>
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
  } else {
    elemNumber = 2;
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
  renderSponsors(sponsors);
}

document.addEventListener('DOMContentLoaded', init);
