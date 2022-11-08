
import PropTypes from 'prop-types'
import css from '../statistics/statistics.module.css'

export default function Statistics ({title, items }){
    return (
        <section className={css.statistics}>
        {title && <h2 className= {css.title} >{title}</h2>}
        <ul className={css.statList}>
          {items.map(item => (
            <li
            className={`${css.item} ${css[item.id]}`}
            key={item.id}
            >
              <span className={css.lable}>{item.label}:  </span>
              <span className={css.percentage}>  
                  {item.percentage}%
              </span>
            </li>
          ))}
        </ul>
        </section>
      );
}

  
  Statistics.prototype = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    title: PropTypes.string,
  };


 