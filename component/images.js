import { renderImg } from '../convertImg.js'
import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'

function images(img){
return html`
            <div class="image_line flex">
                ${renderImg(img)}
                <div class="image_des">
                    ${img.image_decription}
                </div>
            </div>`
}
export default images