function timeConversion(s: string): string {
  const meridiem = s.slice(-2)
  let [hour, min, sec] = s.split(':').map((item: string) => parseInt(item))

  // Check AM or PM
  // If AM, only case is to change 12:mm:ss to 0:mm:ss
  // If PM, convert hours to 24-hour format and add 12 to hours, except 12:mm:ss
  if (meridiem === 'AM') {
    if (hour === 12) {
      hour = 0
    }
  } else {
    if (hour!== 12) {
      hour += 12
    }
  }

  return `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}
const result = timeConversion('07:05:45PM')
console.log(result)