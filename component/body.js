import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'
import footer from './footer.js'
import header from './header.js'
import PODimage from './PODimage.js'
import table from './table.js'
import tracking from './tracking.js'

function html_body({ imgs, info }) {
        return html`
        ${header()}
        <div id="main_container" class="" style="padding-bottom: 2px;">
        <div class="inner-container">
        <div class="row">
        <div id="main"class="">
        <div class="tracking-results">
        <!-- bảng thông tin -->
        ${table(info)}
        <!-- trạng thái tracking -->
        <div id="tracking">
        ${tracking()}
        </div>
        </div>
        ${imgs && PODimage()}
        </div>
        </div>
        </div>
        </div>
        ${footer()}`
}

export default connect()(html_body)