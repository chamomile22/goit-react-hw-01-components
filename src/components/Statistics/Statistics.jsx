import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css["stat-list"]}>
        {stats.map(item => {
          return (
            <StatisticsItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};
