
import "./delimiter.sass";

type DelimiterProps = {
  message1: string,
  message2?: string,
  message3?: string
}

const Delimiter: React.FC<DelimiterProps> = ({ message1, message2, message3 }) => {
  return (
    <div className="container">
      <div className="message-container">
        <p className="message">{message1}</p>
      </div>
      {message2 && (
        <div className="message-container"><p className="message">{message2}</p></div>
      )}
      {message3 && (
        <div className="message-container"><p className="message">{message3}</p></div>
      )}
    </div>
  );
};

export default Delimiter;