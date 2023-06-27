
export function convertTime(dateTime){
    let day = dateTime.slice(0,2)
    let month = dateTime.slice(3,5)
    let year = dateTime.slice(6,10)
    let hour = dateTime.slice(11,13)
    let min = dateTime.slice(14,16)

    const d = new Date(year, Math.floor(month)-1, day, hour, min, 0, 0);

const utcStr = d.toUTCString()

function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
}
    let time = [
        padTo2Digits(d.getUTCHours()),
        padTo2Digits(d.getUTCMinutes()),
        padTo2Digits(d.getUTCSeconds()),
      ].join(':')
    console.log("🚀 ~ file: convert.js:23 ~ convertTime ~ time", time)
return dateTime.slice(0,10) + ` ` + time.slice(0,5)
}


export function convertDV(code){
    var dichvu = {'0207' : 'Xe Nguyên Chuyến',
        '0203' : 'Hỏa tốc',
        '0205' : 'Chuyển phát đường bộ'}
      if(code){
        return dichvu[code]
      }
}

export function locations(substring,string){
    var a=[],i=-1;
    var list =[]
    while((i=string.indexOf(substring,i+1)) >= 0){
        a.push(i)
        let ele = string.slice(i,i+12)
        list.push(ele)
    }
    return list;
}
