const center = [53.327906747951054,83.70516784684999];

function init() {
	const map = new ymaps.Map('map', {
		center,
		zoom: 17
	});

  const placemark = new ymaps.Placemark(center, {
    balloonContentHeader: 'Наш адрес',
    balloonContentBody: '',
    balloonContentFooter: '',
  }, {})

	// map.controls.remove('geolocationControl'); // удаляем геолокацию
  // map.controls.remove('searchControl'); // удаляем поиск
  // map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark)
}

ymaps.ready(init);