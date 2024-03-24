// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="notification">
      <div>{children[0]}</div>
      <div>
        <h1>{children[1]}</h1>
        <p>{children[2]}</p>
      </div>
      <GrFormClose />
    </div>
  )
}

export default Notification
