import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on("timeupdate", throttle(getCurrentTime, 1000));

function getCurrentTime ({ seconds }) {
    localStorage.setItem("currentSecond", seconds);
};


if (localStorage.getItem("currentSecond")) {
    const currentTime = localStorage.getItem("currentSecond");
    player.setCurrentTime(currentTime);
};