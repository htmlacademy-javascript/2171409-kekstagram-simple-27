import { initThumbnail } from './thumbnail.js';
import { getData, sendData } from './api.js';
import { initModal } from './form.js';
import { showAlert } from './util.js'
import { showErrorMessage } from './message.js'

initModal();

getData(initThumbnail, showErrorMessage);