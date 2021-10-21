module.exports = toIndonesiaDay = (day) => {
  let indonesiaDay
  switch (day) {
    case 'Monday':
        indonesiaDay = 'Senin'
      break;
    case 'Tuesday':
        indonesiaDay = 'Selasa'
      break;
    case 'Wednesday':
        indonesiaDay = 'Senin'
      break;
    case 'Thursday':
        indonesiaDay = 'Kamis'
      break;
    case 'Friday':
        indonesiaDay = 'Jumat'
      break;
    case 'Saturday':
        indonesiaDay = 'Sabtu'
      break;
    case 'Sunday':
        indonesiaDay = 'Minggu'
      break;
  }
  return indonesiaDay
}