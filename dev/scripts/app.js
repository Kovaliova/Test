function togglePanel(id){
  const accordion =  document.getElementById(id);
  const valueAttr =  accordion.getAttribute('data-visible');
  const changeText = accordion.querySelector('.main-section__payments--info-block__link-title');

  console.log('changeText', changeText);
  if(valueAttr === "open"){
    accordion.setAttribute('data-visible', 'close');
    changeText.innerText = 'More info';
  }else{
    accordion.setAttribute('data-visible', 'open');
    changeText.innerText = 'Hide info';
  }

}
