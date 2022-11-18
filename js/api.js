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


  // .then(body => console.log(body))
  // try {
  //   const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     body,
  //   });
  //   if (response.ok) {
  //     onSuccess(response);
  //   } else {
  //     onFail('Не удалось отправить форму. Попробуйте ещё раз');
  //   }
  // } catch {
  //   onFail('Не удалось отправить форму. Попробуйте ещё раз');
  // };
}

export { getData, sendData };
