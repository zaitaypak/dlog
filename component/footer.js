import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'

function footer(){
    return html`
    <footer class="footer flex">
            <div class="footer_item flex">
                <div>
                    <a id="footershare"><img src="./img/favicon.png"></a>
                </div>
                <div>
                    <p class="inner"">Hotline: 19006663<br> Email: customer_services@kerryexpress.com.vn</p>
                </div>
            </div>
            <div class="footer_item">
                    Kerry Express (Vietnam)
            </div>
    </footer>`
}

export default connect()(footer)