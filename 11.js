fetch('https://nomoreparties.co/v1/plus-cohort7/users/me', {
  headers: {
    authorization: '55f6dcbe-e189-42c3-b858-3cc6208e5fc5',

  },
})
.then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    console.log('ERROR');
  }})
