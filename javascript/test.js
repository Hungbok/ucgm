

// 다국어 언어 예시.
let multiLanguage = {
  "ko" : {
    msg : "안녕하세요.",
    title: "한국어",
  },

  "en" : {
    msg : "Hello World.",
    title: "English",
  }
};

window.onload = () => {

  let koBtn = document.getElementById("koBtn");
  let enBtn = document.getElementById("enBtn");

  let setLanguage = (lang) => {
    let changeNodeList = Array.prototype.slice.call(document.querySelectorAll('[data-detect]'));
    
    // 각 dataset중 detect인 요소들을 찾아 변경하는 곳. 
    changeNodeList.map( v => {
      v.textContent = multiLanguage[lang][v.dataset.detect]
    })
  };

  koBtn.addEventListener("click" , () => {
    setLanguage(koBtn.dataset.lang);
  });

  enBtn.addEventListener("click" , () => {
    setLanguage(enBtn.dataset.lang);
  });
};