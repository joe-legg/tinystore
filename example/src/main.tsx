import { render } from "preact"
import { App } from "./App"

const app = document.getElementById("app")
if (app != null) {
    render(<App />, app)
}
