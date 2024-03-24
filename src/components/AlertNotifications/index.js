// Write your code here

import {MdInfo, MdWarning} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'

import {AiFillCheckCircle} from 'react-icons/ai'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div>
    <h1>Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle />
      Success
      <p>You can access all the files in the folder</p>
    </Notification>
    <Notification>
      <RiErrorWarningFill />
      Error
      <p>Sorry, you are not authorized to have access to delete the file</p>
    </Notification>
    <Notification>
      <MdWarning />
      Warning
      <p>Viewers of this file can see comments and suggestions</p>
    </Notification>
    <Notification>
      <MdInfo />
      Info
      <p>Anyone on the internet can view these files</p>
    </Notification>
  </div>
)

export default AlertNotifications
