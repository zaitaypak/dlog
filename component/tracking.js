import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'
import timeline from './timeline.js'

function tracking({info}){
    if(info){
        let track = info.Tracking
        return html`
        <div>
            <ul class="timeline">
                <li class="time-label">Mã đơn hàng <span>${info && info.POD[0].waybill_number}</span></li>
                ${info && track.map(trk => timeline(trk))}
            </ul>
        </div>`
    }

}
export default connect()(tracking)