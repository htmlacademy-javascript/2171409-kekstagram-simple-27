import { initThumbnail } from './thumbnail.js';
import { getData, sendData } from './api.js';
import { setOnFormSubmit, closeModal } from './form.js';
import { showAlert } from './util.js'
import { showSuccessMessage, showErrorMessage } from './message.js'

const onSendDataSuccess = () => {
    closeModal();
    showSuccessMessage();
}


setOnFormSubmit(async (body) => {
    await sendData(onSendDataSuccess, showErrorMessage, body);
})

getData(initThumbnail, showAlert);
