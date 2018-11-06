const main = () => {
  const weather = {
    coord: {
      lon: -80.19,
      lat: 25.77
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
      }
    ],
    base: 'stations',
    main: {
      temp: 302.61,
      pressure: 1016,
      humidity: 61,
      temp_min: 302.05,
      temp_max: 303.75
    },
    visibility: 16093,
    wind: {
      speed: 5.7,
      deg: 100
    },
    clouds: {
      all: 40
    },
    dt: 1541444160,
    sys: {
      type: 1,
      id: 1111,
      message: 0.0184,
      country: 'US',
      sunrise: 1541417534,
      sunset: 1541457369
    },
    id: 4164138,
    name: 'Miami',
    cod: 200
  }

  console.log(weather.main.temp)
  // Find the spot in the user interface where I want to put the temperature
  // Create a new element to put the temperature
  // Set that element's text to whatever is inside weather.main.temp
  // make that element appear on the screen
}

document.addEventListener('DOMContentLoaded', main)
