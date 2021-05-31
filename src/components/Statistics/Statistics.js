import React from "react";
import PropTypes from "prop-types";
import randomColor from "randomcolor";

import "./Statistics.scss";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="statistics-title">{title}</h2>}
    <ul className="statistics-stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li
          style={{ backgroundColor: randomColor() }}
          key={id}
          className="statistics-item"
        >
          <span className="statistics-label">{label} </span>
          <span className="statistics-percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.defaultProps = {
  title: "",
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
