import { connect } from 'react-redux';
import Splash from './splash';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(mSTP)(Splash);