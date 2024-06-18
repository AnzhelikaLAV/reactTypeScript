import Button from "components/Button/Button"
import { Homework08Component } from "./styles"

function Homework08() {
    const clickActive = () => {
        console.log('Active')
    }

    const clickDisabled = () => {
        console.log('Disabled')
    }
    return (<Homework08Component>
        <Button name="Active Button" onClick={clickActive}/>

        <Button name="Disabled Button" disabled onClick={clickDisabled}/>
        </Homework08Component>)
}
 export default Homework08