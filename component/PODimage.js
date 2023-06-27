import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'
import images from './images.js'

function PODimage({imgs}){
    if(imgs){
    console.log("🚀 ~ file: PODimage.js:5 ~ PODimage ~ imgs", imgs)
        return html`
        <div ng-if="imgConfirmPod" class="ng-scope">
        <div class="row detail-header">
        <p class="text-uppercase head-form-group" translate="ORDERIMAGE">Hình ảnh đơn hàng</p>
        </div>
        <div class="row detail-header">
        <span>Download image</span>
        </div>
        <!-- hình ảnh đơn hàng  -->
        <div class="img_confirm flex">
            ${imgs.map(img => images(img))}
        </div>
        </div>`
    }
}
    export default connect()(PODimage)