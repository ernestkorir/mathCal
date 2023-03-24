import './CalculatorRow.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function CalculatorRow(props) {
  CalculatorRow.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    inputData: PropTypes.instanceOf(Object).isRequired,
    setInputData: PropTypes.func.isRequired,
  };

  const { data, inputData, setInputData } = props;

  return (
    <div className="calculator__row">
      {data.map((dataItem, index) => (
        <button
          type="button"
          onClick={(e) => {
            const result = calculate(inputData, e.target.name);
            setInputData({
              total: result.total,
              next: result.next,
              operation: result.operation,
            });
          }}
          key={index}
          name={dataItem}
        >
          {dataItem}
        </button>
      ))}
    </div>
  );
}

export default CalculatorRow;
