import css from './Statistics.module.css';
import data from './data.json';
import PropTypes from 'prop-types';

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

const DataHtml = ({ stats }) => {
  return (
    <ul className={css.list}>
      {data.map(singleData => (
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
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <DataHtml />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
