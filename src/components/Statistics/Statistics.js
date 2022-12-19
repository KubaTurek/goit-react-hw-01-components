import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {stats.map(singleData => (
          <li
            key={singleData.id}
            className={css.item}
            style={{ backgroundColor: `#${randomColor}` }}
          >
            <span className={css.label}>{singleData.label}</span>
            <span className={css.percentage}>{singleData.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
