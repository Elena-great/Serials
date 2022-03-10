//получаем доступ к инпут(где пользователь будет вводить название сериалов и дивам с сериалами)
const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".movie");

//создаем функцию, чтобы получить доступ к тому, что пишут в графе поиска (событие)
searchInput.addEventListener("keyup", function(event){
  const word = event.target.value.toLowerCase(); //в этой константе мы будем сохранять то что пишет пользователь



//мы должны сравнить, что пишет пользователь в поле инпута(графа поиска) с названием сериалов. Поэтому нужно получить доступ к тегу p, т.к. по факту название сериала хранится там и сравнить его с теми буквами(словами), которые вводит пользователь. Наши фильмы это массив (divs). И нужно получить доступ к каждому сериалу

divs.forEach(item => {
  item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
})

})