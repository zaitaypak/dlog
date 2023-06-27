import { convertDV, convertTime } from '../convert.js'
import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'

function table({POD, CustomerInfo, GoodsInfo, Tracking}){
    if(POD){
        return html
`<table class="table table-condensed">
    <thead>
        <tr>
            <th translate="GeneralInformation" class="ng-scope">THÔNG TIN CHUNG</th>
            <th translate="Sender" class="ng-scope">NGƯỜI GỬI</th>
            <th translate="Receiver" class="ng-scope">NGƯỜI NHẬN</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Dịch vụ</td>
                            <td>${convertDV(GoodsInfo[0].madv)}</td>
                        </tr>

                        <tr>
                            <td>Hàng Hóa</td>
                            <td>${GoodsInfo[0].hanghoa}</td>
                        </tr>

                        <tr>
                            <td>Khối lượng</td>
                            <td>
                                <span>${POD[0].weight}</span>
                                <span>Kg</span>
                            </td>
                        </tr>

                        <tr>
                            <td >Trạng thái</td>
                            <td>
                                <b style="color: #ec6c00">Thành công</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>

            <td>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Tên người gửi</td>
                            <td>${CustomerInfo[0].nguoigoi}</td>
                        </tr>

                        <tr>
                            <td>Địa chỉ</td>
                            <td> ${CustomerInfo[0].diachinguoigoi}</td>
                        </tr>
                    </tbody>
                </table>
            </td>

            <td>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Tên người nhận</td>
                            <td>${CustomerInfo[0].nguoinhan}</td>
                        </tr>

                        <tr>
                            <td>Địa chỉ</td>
                            <td>${CustomerInfo[0].diachinguoinhan}</td>
                        </tr>
                        <tr>
                            <td>Ghi chú</td>
                            <td>${CustomerInfo[0].ghichutrahang}</td>
                        </tr>

                        <tr>
                            <td>Thời gian giao hàng</td>
                            <td>${POD[0].status_date}</td>
                        </tr>
                        <tr>
                            <td>Thời gian giao hàng UTC</td>
                            <td id="thoigian_giaohang_UTC">${convertTime(POD[0].status_date)}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`
    }


}
export default connect()(table)