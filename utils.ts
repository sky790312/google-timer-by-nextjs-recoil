/**
 *
 * format a second time string to YY:MM:SS ex: showYYMMSS(61) => 00:01:01 (give 3661 seond will show 01:01:01)
 */
export const showHHMMSS = (time: number) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time - hours * 3600) / 60)
  const seconds = time - hours * 3600 - minutes * 60
  const showHours = hours < 10 ? `0${hours}` : hours.toString()
  const showMinute = minutes < 10 ? `0${minutes}` : minutes.toString()
  const showSecond = seconds < 10 ? `0${seconds}` : seconds.toString()
  return `${showHours} : ${showMinute} : ${showSecond}`
}
