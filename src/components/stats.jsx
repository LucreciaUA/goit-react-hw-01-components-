import css from './stats.module.css'

export const Statistics = ({ stats, title }) => {
    
   return (<>
    <section className={css.statistics}>
    
     {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.statList}>
    {stats.map((el)=> (<li className={css.item} id={el.id} key={el.id}>
        <span className={css.label}>{el.label}</span>
        <span className={css.percentage}>{el.percentage}</span>
    </li>))}

    
  </ul>
</section>
    </>)
}