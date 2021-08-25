function getCoords() {
  let coords;
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos: any) {
    coords = pos.coords;
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return coords;
}

export default getCoords;