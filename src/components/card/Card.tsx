import React, { useContext, useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import { FaUserEdit } from 'react-icons/fa';
import { User, UserActions } from '../../hooks';
import { UserContext } from '../../providers';
import { EditableText } from '../input';
import './Card.scss';

export interface CardProps {
  user: User;
}

export function Card({ user }: CardProps) {
  // we only care about utilizing the dispatch, pull it from the context instead of passing it down
  const [, dispatch] = useContext(UserContext);
  // maintain updates in localUser state; push to global state when changed
  const [localUser, setLocalUser] = useState<User>(user);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  /**
   * Update the state user once actor has stopped editing and user objects are different
   */
  useEffect(() => {
    // Wait until the user has finished editing, otherwise the card could move positions during an edit >:O
    if (!isEditing && !isEqual(user, localUser)) {
      dispatch({ type: UserActions.UPDATE_USER, payload: localUser });
    }
  }, [isEditing, user, localUser, dispatch]);

  return (
    <div className="card-container">
      <div className="card-header">
        <FaUserEdit size='1.5em' className="card-icon" onClick={() => setIsEditing(!isEditing)} />
        <EditableText
          typography="h5"
          isEditable={isEditing}
          defaultValue={user.name}
          inputStyle={nameInputStyle}
          onChange={event => setLocalUser({ ...localUser, name: event.target.value })}
        />
        <img className="card-image" alt="User " src={user.image}></img>
      </div>
      <div className="card-details">
        <EditableText
          typography="p"
          isEditable={isEditing}
          defaultValue={user.email}
          inputStyle={{ ...detailsInputStyle, width: '75%' }}
          onChange={event => setLocalUser({ ...localUser, email: event.target.value })}
        />
        <EditableText
          typography="p"
          isEditable={isEditing}
          defaultValue={user.phoneNumber}
          inputStyle={detailsInputStyle}
          onChange={event => setLocalUser({ ...localUser, phoneNumber: event.target.value })}
        />
        <EditableText
          typography="p"
          isEditable={isEditing}
          defaultValue={user.location}
          inputStyle={detailsInputStyle}
          onChange={event => setLocalUser({ ...localUser, location: event.target.value })}
        />
      </div>
    </div>
  );
}

// duplicate override styles for the card details inputs
const detailsInputStyle: React.CSSProperties = {
  margin: '9px auto'
}

const nameInputStyle: React.CSSProperties = {
  flex: '1 0 auto',
  margin: '-0.75em auto 0.5em auto',
  width: '66%',
  backgroundColor: 'inherit',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '1.33',
  letterSpacing: '-0.5',
  textAlign: 'center'
}
