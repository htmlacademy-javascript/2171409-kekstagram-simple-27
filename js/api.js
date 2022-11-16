const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple/data');
    if (!response.ok) {
      throw new Error('Не удалось загрузить фото');
    };
    const photos = await response.json();
    onSuccess(photos);
  } catch (error) {
    onFail(error.message)
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple/data', {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw new Error('Не удалось отправить фото. Попробуйте еще раз');
    };
    const photos = await response.json();
    onSuccess(photos);
  } catch (error) {
    onFail(error.message)
  }
};

export { getData, sendData };
