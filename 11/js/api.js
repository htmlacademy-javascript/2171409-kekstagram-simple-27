const URL_GET = 'https://27.javascript.pages.academy/kekstagram/data';
const URL_POST = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(URL_GET);
    if (!response.ok) {
      throw new Error('Не удалось загрузить фото');
    }
    const photos = await response.json();
    onSuccess(photos);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, data) => {
  try {
    const response = await fetch(URL_POST, {
      method: 'POST',
      body: data,
    });
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };
