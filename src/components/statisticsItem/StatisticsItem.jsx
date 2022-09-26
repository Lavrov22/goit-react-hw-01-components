import PropTypes from 'prop-types';
import { Item, Label, Percentage } from "components/statisticsItem/StatisticsItem.styled";

export const StatisticsItem = ({ stat: {id, label, percentage } }) => {
    return <Item label={label}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
          </Item>
} 

StatisticsItem.propTypes = {    
    stat: PropTypes.shape({
      id:  PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,})
}