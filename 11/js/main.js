import { initThumbnails } from './thumbnails.js';
import { getData } from './api.js';
import { initLoadPicture } from './load-picture.js';
import { showAlert } from './util.js';

initLoadPicture();
getData(initThumbnails, showAlert);
