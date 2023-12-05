import css from './friendListItem.module.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return(
        <>
        <li className={css.item} >
  <span className={`${css.status} ${isOnline ? css.online : css.offline}`} ></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
</li>
        </>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};