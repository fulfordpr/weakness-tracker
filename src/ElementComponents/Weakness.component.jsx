import Card from '../components/UI-UX/Card.component.jsx'
import './Weakness.styles.css'
const Weakness = (props)=>{
    return(
        <div>
            <Card>
                <div className="weakness">
                    <h2>{props.children}</h2>
                    <h2 className="delete">X</h2>
                </div>
            </Card>
        </div>
    )
    
}

export default Weakness;