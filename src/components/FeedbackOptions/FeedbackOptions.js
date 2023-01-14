import import PropTypes from 'prop-types';

export const FeedbackOptions = ({options,onBtnClick}) => (
    <div>
        {options.map(option => (
            <button type='button' key={option} onClick={() => onBtnClick(option)}>
                {option}
            </button>
        ))}
    </div>
)

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick
}