// children
import LoginButton from "../LoginButton";
import UserButton from "../UserButton";

const LoginContainer = ({user}) => (
  !user?<LoginButton />:<UserButton {...user}/>
);

LoginContainer.defaultProps = {
  user: '',
}

export default LoginContainer;
