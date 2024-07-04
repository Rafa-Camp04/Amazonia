import './Modal.css';

const Overlay = ({ isOpen, onClick }) => {
  if (!isOpen) return null;
  return <div className="overlay" onClick={onClick}></div>;
};

export default Overlay;