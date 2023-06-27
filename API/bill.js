async function BILL_SELECT(billNumber){
    let result = await fetch('https://ebooking.kerryexpress.com.vn/api/books/GetImgPOD/'+billNumber)
    let data = await result.json()
    return data
}
export default BILL_SELECT

export async function BILL_DETAILS(billNumber){
    let result = await fetch('https://gw.kerryexpress.com.vn/api/WS004GetOrderTrackingKe?data={%22token_key%22:%22NVPjt4uANPAQSSMDiM0SKA==%22,%22waybill_number%22:%22'+billNumber+'%22}')
    let data = await result.json()
    return data
}