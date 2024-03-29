// Добавление превью изображения при прикреплении картинки

document.addEventListener('DOMContentLoaded', function () {

	// Получаем инпут в переменную
	const formImage = document.getElementById('formImage')
	// Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview')

	// Слушаем изменения в инпуте file
	formImage.addEventListener('change', () => {
		uploadFile(formImage.files[0]);
	})

	function uploadFile(file) {

		// Проверяем тип файла
		if (!['image/jpeg', 'image/png', 'image/gif',].includes(file.type)) {
			alert('Разрешены только изображения.');
			formImage.value = '';
			return;
		}

		// Проверим размер файла
		if (file.size > 2 * 1024 * 1024) {
			alert('Файл должен быть менее 2 МБ.')
			return
		}

		// Выводим изображение
		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	}
});
