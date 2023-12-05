import css from './friendlist.module.css'
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'


export const Friends = ({friend}) => {
    return (
        <>
        <ul className={css.friendList}>
                {
                    friend.map((el) => (
                        <FriendListItem
                            key={el.key}
                            avatar={el.avatar} 
                            name={el.name} 
                            isOnline={el.isOnline}  />
                    ))
            }
        </ul>
        </>
    )
}

Friends.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};