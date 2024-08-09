(function () {
  //Бургер

  document.addEventListener("click", burgerInit);

  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    const burgerNavLink = e.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 780) return;

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  //Табы

  const tabControls = document.querySelector(".tab-control");

  tabControls.addEventListener("click", toggleTab);

  function toggleTab(e) {
    e.preventDefault();

    const tabButton = e.target.closest(".tab-control__link");
    if (document.documentElement.clientWidth < 900) return;

    if (!tabButton) return;

    const tabContendID = tabButton.getAttribute("href");

    document
      .querySelector(".tab-content--active")
      .classList.remove("tab-content--active");
    document.querySelector(tabContendID).classList.add("tab-content--active");

    document
      .querySelector(".tab-control__link--active")
      .classList.remove("tab-control__link--active");
    tabButton.classList.add("tab-control__link--active");
  }

  //Аккордеон на адаптиве
  const oppAccordionItem = document.querySelectorAll(".accordion-list");

  oppAccordionItem.forEach((e) => {
    e.addEventListener("click", (e) => {
      const accordionControl = e.target.closest(".accordion-list__control");
      if (!accordionControl) return;
      if (document.documentElement.clientWidth > 900) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;
      
      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();
