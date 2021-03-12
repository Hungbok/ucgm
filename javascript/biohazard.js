var type=navigator.appName
        if (type=="Netscape")
        var lang = navigator.language
        else
        var lang = navigator.userLanguage

        if (lang == "en")
            title: "Resident Evil Village",
let multiLanguage = {
  "ko" : {
    title: "Biohazard Village",
  },

  "en" : {
    title: "Resident Evil Village",
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