"use strict";

function togglePanel(id) {
  var accordion = document.getElementById(id);
  var valueAttr = accordion.getAttribute('data-visible');
  var changeText = accordion.querySelector('.main-section__payments--info-block__link-title');
  console.log('changeText', changeText);

  if (valueAttr === "open") {
    accordion.setAttribute('data-visible', 'close');
    changeText.innerText = 'More info';
  } else {
    accordion.setAttribute('data-visible', 'open');
    changeText.innerText = 'Hide info';
  }
}