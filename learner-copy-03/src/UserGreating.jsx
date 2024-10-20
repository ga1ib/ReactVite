import Proptypes from 'prop-types';
function UserGreating(props){

const welcomeMsg =<h2 className="welcome-msg">Welcome {props.username} !</h2>
const loginPrmt =  <h2 className="login-prmt">Please log in to continue</h2>

return (props.isLoggedIn ? welcomeMsg : loginPrmt );
}
UserGreating.Proptypes={
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,
}
 UserGreating.defaultProps={
    isLoggedIn:false,
    username : "Guest",
    
 }

export default UserGreating;