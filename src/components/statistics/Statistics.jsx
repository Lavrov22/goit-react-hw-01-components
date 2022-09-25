import PropTypes from 'prop-types';
import { StatisticsItem } from "components/statisticsItem/StatisticsItem";
import { Section, Title, List } from "components/statistics/Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return <Section>
        {title && (<Title>{title}</Title>)}
        <List>
            {stats.map(stat =><StatisticsItem key={stat.id} stat={stat}/>)}
        </List>
        </Section>
} 

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}