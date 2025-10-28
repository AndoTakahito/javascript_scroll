// JavaScript
//実行する機能
const show = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0',0]
      }
      entry.target.animate(keyframes,600);

            //一度表示されたら止める
      obs.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(show);

//監視対象
const images = document.querySelectorAll('.img');
images.forEach(img =>{
  observer.observe(img);
});


const look = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      const keyframes = {
        opacity: [0, 1],
        translate: ['-200px 0',0]
      }
      entry.target.animate(keyframes,600);

            //一度表示されたら止める
      obs.unobserve(entry.target);
    }
  });
}

const observer2 = new IntersectionObserver(look);

//監視対象
const images2 = document.querySelectorAll('.right');
images2.forEach(img =>{
  observer2.observe(img);
});
