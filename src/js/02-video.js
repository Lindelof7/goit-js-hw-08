import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const playerEl = new Vimeo.Player(iframe);

const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log("Current time :" , localStorage.getItem("videoplayer-current-time"));
};
    
playerEl.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

playerEl.on('timeupdate', throttle(onPlay, 1000));
