import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    localStorage.setItem(videoplayer-current-time, data.seconds)
    console.log("Current time :" , localStorage.getItem(videoplayer-current-time))
};
    
player.setCurrentTime(localStorage.getItem(videoplayer-current-time))

player.on('timeupdate', throttle(onPlay, 1000))