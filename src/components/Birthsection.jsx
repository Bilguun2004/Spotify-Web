import "../styles/register.scss"
import Select from 'react-select';

const options = [
  { value: "january", label: "January" },
  { value: "february", label: "february" },
  { value: "march", label: "March" },
  { value: "april", label: "April" },
  { value: "may", label: "May" },
  { value: "june", label: "June" },
  { value: "july", label: "July" },
  { value: "august", label: "August" },
  { value: "september", label: "September" },
  { value: "october", label: "October" },
  { value: "november", label: "November" },
  { value: "december", label: "December" }
];

const Birthsection = () => {
  return (
    <div className="Birthsection">
      <span className="Birthsection-text">What's your date of birth</span>
      <div className="Birthsection-section">
          <div className="Birthsection-section-day">
              <span className="Birthsection-section-day-top">
                Day
              </span>
              <input className="Birthsection-section-day-bottom" placeholder="DD"></input>
          </div>

          <div className="Birthsection-section-month">
              <span className="Birthsection-section-month-top">
                Month
              </span>
              <Select className="Birthsection-section-month-bottom" options={options} />
          </div>

          <div className="Birthsection-section-year">
              <span className="Birthsection-section-year-top">
                Year
              </span>
              <input className="Birthsection-section-year-bottom" placeholder="YYYY"></input>
          </div>
      </div>
    </div>
  );
};
export default Birthsection;
