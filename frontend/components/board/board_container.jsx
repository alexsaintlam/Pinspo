import { connect } from 'react-redux';
import Board from './board';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}