import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'

function timeline(trk){
return html`
    <li class="">
        <div class="timeline-item">
            <div class="time_line flex">
                <div>${trk && trk.warehouse_en}</div>
                <div> ${trk && trk.status_date}</div> 
            </div>
            <div>
                <span>${trk.delivery_man && `Nhân viên giao nhận:`}</span>
                <div> ${trk && trk.delivery_man}</div> 
                <div> ${trk && trk.phone_number}</div> 
                 <br>
            </div>
        </div>
    </li>`
}
export default timeline