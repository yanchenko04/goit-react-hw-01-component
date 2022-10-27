
import PropTypes from 'prop-types'

export default function Statistics ({title, items }){
    return (
        <section class="statistics">
        {title && <h2 class= "title" >{title}</h2>}
        <ul class="stat-list">
          {items.map(item => (
            <li
            class="item"
            key={item.id}
            >
              <span class="label">{item.label}: </span>
              <span class="percentage">
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


 