//setup
var interfaceDefault = "dark";
let keys = 0, key = 0, del = false, openingSub = true, closingSub = false, speed = 75, changeLock = false;
//setup ELEMENT
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const names = document.getElementById("names");
const perkenalan = document.getElementById("perkenalan");
const runningText = document.getElementById("running-text");
const texts = document.getElementById("text");
const cursors = document.getElementById("cursors");
const Mabout = document.querySelector('.about-anim');
const Mskill = document.querySelector('.skill-anim');
const card = document.querySelectorAll(".card");
const sbtn = document.querySelectorAll(".sbtn")
const mouse = document.getElementById("mouse");
const upup = document.getElementById("upup");
const changemode = document.getElementById("changemode")


//url
const opens = (act)=>{
  if (act == 1){
    window.open("https://www.instagram.com/syeifsultan/")
  }else if (act == 2){
    window.open("https://wa.me/+6281228020195/")
  }else if (act == 3){
    window.open("https://web.facebook.com/syeifsultoni.akbar/")
  }else if (act == 4){
    window.open("https://github.com/Goldn7799/")
  }else if (act == 5){
    window.open("https://riverzgm.netlify.app/")
  }else if (act == 6){
    window.open("https://github.com/Goldn7799/MyShell/")
  }else if (act == 7){
    alert("Kamu Sudah berada di WEB")
  }else if (act == 8){
    window.open("https://github.com/Goldn7799/MTK")
  }else if (act == 9){
    window.open("https://sgstudios.vercel.app/")
  }else if (act == 10){
    window.open("https://github.com/Goldn7799/GamesWabot-Monitor")
  }else if (act == 11){
    window.open("https://gatotkacae.vercel.app/")
  }else if (act == 12){
    window.open("https://github.com/Goldn7799/sgbrowser")
  }
  else {
    console.log("Not Found")
  }
}
//end url

//dark/light
const detectMode = (type)=>{
  if (type == "dark"){
    mouse.classList.add("mouse-icon-light");
    mouse.classList.remove("mouse-icon-dark")
    changemode.innerHTML = `<i class="fa-solid fa-sun fa-xl"></i>`
    changemode.classList.add("text-light")
    changemode.classList.remove("text-dark")
    body.classList.add("n-dark", "text-light")
    body.classList.remove("n-light", "text-dark")
    nav.classList.add("bg-dark", "navbar-dark")
    nav.classList.remove("bg-light")
    Mabout.classList.remove("n-about-light")
    Mabout.classList.add("n-about-dark")
    Mskill.classList.remove("n-about-light")
    Mskill.classList.add("n-about-dark")
    for (let i = 0; i < card.length; i++) {
      card[i].classList.add("bg-dark", "text-light")
    }
    for (let i = 0; i < sbtn.length; i++) {
      sbtn[i].classList.remove("btn-light")
      sbtn[i].classList.add("btn-dark")
    }
    document.getElementById("sidebar").classList.add("n-side-dark")
    document.getElementById("sidebar").classList.remove("n-side-light")
    document.getElementById("iconmed").classList.add("text-light")
  }else if (type == "light"){
    mouse.classList.remove("mouse-icon-light");
    mouse.classList.add("mouse-icon-dark")
    changemode.innerHTML = `<i class="fa-solid fa-moon fa-xl"></i>`
    changemode.classList.remove("text-light")
    changemode.classList.add("text-dark")
    body.classList.remove("n-dark", "text-light")
    body.classList.add("n-light", "text-dark")
    nav.classList.remove("bg-dark", "navbar-dark")
    nav.classList.add("bg-light")
    Mabout.classList.add("n-about-light")
    Mabout.classList.remove("n-about-dark")
    Mskill.classList.add("n-about-light")
    Mskill.classList.remove("n-about-dark")
    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove("bg-dark", "text-light")
    }
    for (let i = 0; i < sbtn.length; i++) {
      sbtn[i].classList.add("btn-light")
      sbtn[i].classList.remove("btn-dark")
    }
    document.getElementById("sidebar").classList.remove("n-side-dark")
    document.getElementById("sidebar").classList.add("n-side-light")
    document.getElementById("iconmed").classList.remove("text-light")
  }else {
    alert(`${type} Not Found`)
  }
}
const change = ()=>{
  if(changeLock){
    changeLock = false;
    detectMode("dark")
  }else {
    changeLock = true;
    detectMode("light")
  }
}

//startUp
setInterval(()=>{
  document.getElementById("devider").style.height = `${screen.height - 350}px`;
  if(screen.width < 1234){
    document.getElementById("project").style.overflowX = "scroll";
    document.getElementById("hobby").style.overflowX = "scroll";
  }else {
    document.getElementById("project").style.overflowX = "hidden";
    document.getElementById("hobby").style.overflowX = "hidden";
  }
  if (screen.width < 995){
    document.getElementById("navbarNav").style.display = "none";
  }else {
    document.getElementById("navbarNav").style.display = "";
  }
  if (screen.width < 500){
    document.getElementById("iconmed").style.display = "none";
    document.getElementById("mobile-btn").style.display = "";
    document.getElementById("iconmed").classList.remove("d-flex")
  }else {
    document.getElementById("iconmed").classList.add("d-flex")
    document.getElementById("iconmed").style.display = "";
    document.getElementById("mobile-btn").style.display = "none";
    if (sdbar){
      document.getElementById("sidebar").classList.remove("n-sidebar-show")
      sdbar = false;
    };
  }
  if (window.scrollY > 30){
    if (sdbar){
      document.getElementById("sidebar").classList.remove("n-sidebar-show")
      sdbar = false;
    };
  };
}, 100)
window.onload = ()=>{
nav.classList.remove("n-gone")
const MyName = "Syeif Sultoni Akbar"
setTimeout(()=>{
  perkenalan.style.marginTop = "30px"
  setTimeout(()=>{
    const nameCout = setInterval(()=>{
      if(keys > MyName.length){
        clearInterval(nameCout)
        document.getElementById("mainMenu").style.display = "block"
        runningText.style.marginTop = "10px"
        runningText.style.opacity = "1";
        setTimeout(()=>{ 
          mouse.style.marginTop = "0px"
          mouse.style.opacity = "1";
          setTimeout(()=>{ runs() }, 1200)
        }, 500)
      }else {
        keys++;
        names.innerText = MyName.substring(0, keys)
      }
    }, 50)
  }, 200)
}, 500)
}

//RunningText
var text = "I AM Full Stack Developer";
const text1 = "I AM Full Stack Developer";
const text2 = "Game`s or Coder`s?";
const text3 = "I have 2 years experience";
const text4 = "I AM 13 years old";
const sub = "Visit : "
const sub1 = "syeifsultan.vercel.app";
const sub2 = "syeifsultan.netlify.app";
const sub3 = "riverzgm.netlify.app";
const sub4 = "github.com/Goldn7799";
key = text.length;
del = true;
const runs = ()=>{
  const runStop = setInterval(()=>{
    if (key === text.length&&text === text1){
      clearInterval(runStop);
      cursors.style.display = "none";
      texts.classList.add("n-block")
      setTimeout(()=>{
        cursors.style.display = "block";
        texts.classList.remove("n-block")
        key = 0;
        del = false;
        text = text2;
        texts.innerText = ""
        setTimeout(()=>{ runs() }, 100)
      }, 500)
    }else if (key === 0&&text === sub1){
      clearInterval(runStop);
      runSubb();
    }else {
      if (del){
        key--;
      }else {
        key++;
      }
      texts.innerText = text.substring(0, key);
      if(key == text.length){
        del = true;
        clearInterval(runStop);
        setTimeout(()=>{ runs() }, 1000)
      };
      if(del&&key < 1){
        del = false;
        if (text == text2){
          text = text3;
        }else if (text == text3){
          text = text4
        }else if (text == text4){
          text = sub1
        }else {
          console.log("Running Text Error")
        };
      };
    }
  }, speed)
}

const runSubb = ()=>{
  const runSub = setInterval(()=>{
    if (openingSub){
      key++;
      texts.innerText = sub.substring(0, key)
      if (key == sub.length){
        openingSub = false;
        key = 0;
      };
    }else if (closingSub){
      key--;
      texts.innerText = sub.substring(0, key)
      if (key == 0){
        openingSub = true;
        closingSub = false;
        clearInterval(runSub);
        del = false;
        key = 0;
        runs()
      };
    }else {
      if (del){
        key--;
      }else {
        key++;
      }
      texts.innerText = `${sub}${text.substring(0, key)}`;
      if (key == text.length){
        del = true;
        clearInterval(runSub);
        setTimeout(()=>{ runSubb() }, 1000)
      };
      if(del&&key < 1){
        del = false;
        if (text == sub1){
          text = sub2;
        }else if (text == sub2){
          text = sub3
        }else if (text == sub3){
          text = sub4
        }else if (text == sub4){
          text = text1
          key = sub.length;
          closingSub = true;
        }else {
          console.log("Running Sub Error")
        };
      };
    }
  }, speed)
}

//animation
// Remove the transition class
const anim = document.querySelector('.about-anim');
anim.classList.remove('about-show');
let aboutKey = 0, startAbout = false;
const aboutTexts = `Halo Perkenalkan Nama Saya <b>Syeif Sultoni Akbar</b> Saya Lahir di <b>Malang</b> pada <b>30 Maret, 2008</b> dan Umur Saya sekarang 13 tahun, Sekarang Saya Tinggal di <b>Kp.Cigalumpit RT.01 RW.07 gajah mekar, kab. Bandung, Indonesia.</b> dan Berpengalaman <b>2 Tahun</b> menjadi Programmer. Salam Kenal👋🏻`
// Create the observer, same as before:
const aboutss = ()=>{
  const abouts = setInterval(()=>{
    if(startAbout){
      aboutKey++;
      document.getElementById("aboutText").innerHTML = aboutTexts.substring(0, aboutKey)
      if (aboutKey == aboutTexts.length){
        clearInterval(abouts)
      };
    }else {
      clearInterval(abouts)
      aboutKey = 0;
    }
  }, 10)
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anim.classList.add('about-show');
      anim.classList.remove('about-hidden');
      startAbout = true;
      aboutss();
      return;
    }

    anim.classList.add('about-hidden');
    anim.classList.remove('about-show');
    startAbout = false
  });
});

observer.observe(document.querySelector('.about'));

const navbars = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      changemode.style.marginTop = "10px"
      return;
    }

    changemode.style.marginTop = "-50px"
    if (sdbar){
      document.getElementById("sidebar").classList.remove("n-sidebar-show")
      sdbar = false;
    };
  });
});

navbars.observe(document.querySelector('nav'));

const ups = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      upup.style.marginBottom = "-50px"
      upup.style.opacity = "0"
      return;
    }

    upup.style.marginBottom = "15px"
    upup.style.opacity = "1"
  });
});

ups.observe(document.getElementById("perkenalan"));

// Remove the transition class
const skill = document.querySelector('.skill-anim');
skill.classList.remove('skill-show');

// Create the observer, same as before:
const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skill.classList.add('skill-show');
      skill.classList.remove('skill-hidden');
      return;
    }

    skill.classList.add('skill-hidden');
    skill.classList.remove('skill-show');
  });
});

observers.observe(document.querySelector('.skill'));

// Remove the transition class
const project = document.querySelector('.project-anim');
project.classList.remove('project-show');

// Create the observer, same as before:
const observerss = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      project.classList.add('project-show');
      project.classList.remove('project-hidden');
      return;
    }

    project.classList.add('project-hidden');
    project.classList.remove('project-show');
  });
});

observerss.observe(document.querySelector('.project'));

// Remove the transition class
const hobby = document.querySelector('.hobby-anim');
hobby.classList.remove('hobby-show');

// Create the observer, same as before:
const observersss = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hobby.classList.add('hobby-show');
      hobby.classList.remove('hobby-hidden');
      return;
    }

    hobby.classList.add('hobby-hidden');
    hobby.classList.remove('hobby-show');
  });
});

observersss.observe(document.querySelector('.hobby'));
//end animation

//sidebar
let sdbar = false;
const sidebar = ()=>{
  if(sdbar){
    document.getElementById("sidebar").classList.remove("n-sidebar-show")
    sdbar = false;
  }else {
    document.getElementById("sidebar").classList.add("n-sidebar-show")
    sdbar = true;
  }
}
//end sidebar