const team = [
  {
    name: 'Кирилл Решетников',
    img: './img/team/reshetnikov_kirill.jpg',
    info: 'Team-leader',
  },

  {
    name: 'Вера Сысоева',
    img: './img/team/sysoeva_vera.jpg',
    info: 'Team-leader',
  },

  {
    name: 'Дарья Малинина',
    img: './img/team/malinina_darya.jpg',
    info: 'Куратор научной части',
  },

  {
    name: 'Алена Старикова',
    img: './img/team/starikova_alyona.jpg',
    info: 'Куратор научной части',
  },
  {
    name: 'Валерия Спиридонова',
    img: './img/team/spiridonova_valeria.jpg',
    info: 'Ответственная за коллаборации',
  },

  {
    name: 'Полина Журлова',
    img: './img/team/zhurlova_polina.jpg',
    info: 'Ответственная за SMM',
  },

  {
    name: 'Виктория Чебаненко',
    img: './img/team/chebanenko_viktorya.jpg',
    info: 'Ответственная за PR',
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
    name: 'Вячеслав Паско',
    img: './img/team/pasko_vyacheslav.jpg',
    info: 'Сухая лаборатория',
  },

  {
    name: 'Валентина Костенко',
    img: './img/team/kostenko_valentina.jpg',
    info: 'Связи с общественностью',
  },


  {
    name: 'Надежда Азбукина',
    img: './img/team/azbukina_nadezhda.jpg',
    info: 'Сухая лаборатория',
  },

  {
    name: 'Екатерина Колодяжная',
    img: './img/team/kolodyazhnaya_ekaterina.jpg',
    info: 'Мокрая лаборатория',
  },


  {
    name: 'Анна Капитонова',
    img: './img/team/kapitonova_anna.jpg',
    info: 'Связи с общественностью',
  },

  {
    name: 'Юлия Васильева',
    img: './img/team/vasilyeva_julia.jpg',
    info: 'Связи с общественностью',
  },

  {
    name: 'Константин Каменский',
    img: './img/team/kamenskii_konstantin.jpg',
    info: 'Связи с общественностью',
  },

  {
    name: 'Диана Загирова',
    img: './img/team/zagirova_diana.jpg',
    info: 'Связи с общественностью',
  },

  {
    name: 'Екатерина Ганжула',
    img: './img/team/ganzhula_ekaterina.jpg',
    info: 'Связи с общественностью',
  },

 {
    name: 'Александр Минаков',
    img: './img/team/minakov_alexander.jpg',
    info: 'Сухая лаборатория',
  },

  {
    name: 'Дарья Лунегова',
    img: './img/team/lunegova_darya.jpg',
    info: '',
  },
  {
    name: 'Екатерина Кравчук',
    img: './img/team/kravchuk_ekaterina.jpg',
    info: 'Сухая лаборатория',
  },
  {
    name: 'Анастасия Щербакова',
    img: './img/team/sherbakova_anastasia.jpg',
    info: 'Связи с общественностью',
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
 
  {
    name: 'Никита Моторин',
    img: './img/team/motorin_nikita.jpg',
    info: 'Сухая лаборатория',
  },

  {
    name: 'Маргарита Егиян',
    img: './img/team/egian_margarita.jpg',
    info: 'Связи с общественностью',
  },

  {
    name: 'Никита Моторин',
    img: './img/team/motorin_nikita.jpg',
    info: 'Сухая лаборатория',
  },

  {
    name: 'Артём Мурзин',
    img: './img/team/murzin_artyom.jpg',
    info: 'Сухая лаборатория',
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
}

document.addEventListener('DOMContentLoaded', init);
