import PropTypes from "prop-types"
import s from './Statistics.module.css'

const Statistics = ({title, stats}) => {
    const elements = stats.map(item => (
        <li key={item.id} className={s.item}>
            <span className={s.label}>{item.label}</span>
            <span className={s.value}>{ item.percentage}%</span>
    </li>))
    return (
        <section className={s.section}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.list}>
                {elements}
            </ul>
       </section>
    )
}

export default Statistics
Statistics.defaultProps = {
    stats : []}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))

}