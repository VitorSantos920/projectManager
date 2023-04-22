const inputList = document.querySelectorAll('.input-controller');

inputList.forEach((input) => {
  let label = input.nextElementSibling;
  input.addEventListener('input', () => {
    input.value.trim().length > 0
      ? label.classList.add('has-content')
      : label.classList.remove('has-content');
  });
});
