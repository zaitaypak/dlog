import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'

function form_list({SBS, index}){
        return html`<div class="SBS flex">
            <div id="lower" class="flex" index="${index}" sb="${SBS[index-1]}"><</div>
            <div class="SBS_number flex"> ${SBS && SBS[index]} </div>
            <div id="higher" class="flex" index="${index}" max="${SBS.length}" sb="${SBS[index+1]}">></div>
            <div class="SBS_button flex" id="${SBS[index]}">PRINT</div>`
}
export default connect()(form_list)
