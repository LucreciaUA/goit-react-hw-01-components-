import css from './friendlist.module.css'

export const Friends = ({friend}) => {
    return (
        <>
        <ul className={css.friendList}>
                {
                    friend.map((el) => (
                        <li className={css.item} id={el.id} key={el.id} >
  <span className={`${css.status} ${el.isOnline ? css.online : css.offline}`} ></span>
  <img className={css.avatar} src={el.avatar} alt={el.name} width="48" />
    <p className={css.name}>{ el.name}</p>
</li>
                    ))
            }
        </ul>
        </>
    )
}