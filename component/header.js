import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'
import form_list from './form_list.js'

function header({imgs, info, SBS}){
    return `
    <div id="header-logo" class="" style="padding-right: 0px;">
        <img src="./img/logo.png" style="width: 197px; height: 44px;">
    </div>
    <div class="row main-row flex">
            <h3 style="margin-bottom: 29px; color: #000;">
                TRA CỨU HÀNH TRÌNH
            </h3>
            <div style="margin-bottom: 29px" class="input_form flex">
                ${form_list()}
                <span class="input-group-btn" style="color : black !important;">Tra cứu</span>
            </div>
    </div>`
}
export default connect()(header)