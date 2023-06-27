import html from '../reducer/core.js'
import { connect } from '../reducer/store.js'
import html_body from './body.js'

function App({SBS}) {
    return `
    ${!SBS ? `<div id="form_sector" class="form flex">
            <input type="text" id="numbers" placeholder="SBS002860866 SBS002897203 SBS002919512...">
            <div class="flex" id="button_get">Track</div>
    </div>` : ``}
    ${SBS && `<div class="page">
        ${SBS && html_body()}
    </div>` } `
}
export default connect()(App)