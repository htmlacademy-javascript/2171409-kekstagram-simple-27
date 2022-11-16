import { isEcapeKey } from './util.js';
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const onSuccessBtnClick = () => {
    hideMessage();
};
const onErrorBtnClick = () => {
    hideMessage();
};

const onEscKeydown = (evt) => {
    if (isEcapeKey(evt)) {
        evt.preventDefault();
        hideMessage();
    }
};

const createWizardsFragment = document.createDocumentFragment();

const showSuccessMessage = () => {
    const successMessageElement = successMessageTemplate.cloneNode(true);
    document.addEventListener('keydown', onEscKeydown);
    successMessageElement.querySelector('.success__button').addEventListener('click', onSuccessBtnClick);
    createWizardsFragment.append(successMessageElement);
    bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
    const errorMessageElement = errorMessageTemplate.cloneNode(true);
    document.addEventListener('keydown', onEscKeydown);
    errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorBtnClick);
    createWizardsFragment.append(errorMessageElement);
    bodyElement.style.overflow = 'hidden';
};

function hideMessage() {
    const messageElement = document.querySelector('.success') || document.querySelector('.error');
    messageElement.remove();
    document.removeEventListener('keydown', onEscKeydown);
    document.removeEventListener('click', onSuccessBtnClick);
    document.removeEventListener('click', onErrorBtnClick);
    bodyElement.style.overflow = 'auto';
};

const onSendDataSuccess = () => { }
const onSendDataFail = () => { }
const onGetDataSuccess = () => { }
const onGetDataFail = () => { }


export { showSuccessMessage, showErrorMessage };
