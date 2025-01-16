import PropTypes from "prop-types";

const Popup = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; // Render nothing if the popup is not open

    return (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-70 flex items-center justify-center">
            <div className="relative bg-white w-1/3 rounded-lg shadow-lg">
                {/* Popup Header */}
                <div className="flex justify-between items-center px-4 py-2 border-b">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.63603 5.63604C6.02656 5.24552 6.65972 5.24552 7.05025 5.63604L12 10.5858L16.9497 5.63604C17.3403 5.24552 17.9734 5.24552 18.364 5.63604C18.7545 6.02657 18.7545 6.65973 18.364 7.05025L13.4142 12L18.364 16.9497C18.7545 17.3403 18.7545 17.9734 18.364 18.364C17.9734 18.7545 17.3403 18.7545 16.9497 18.364L12 13.4142L7.05025 18.364C6.65972 18.7545 6.02656 18.7545 5.63603 18.364C5.24551 17.9734 5.24551 17.3403 5.63603 16.9497L10.5858 12L5.63603 7.05025C5.24551 6.65973 5.24551 6.02657 5.63603 5.63604Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                {/* Popup Content */}
                <div className="p-4 overflow-auto h-full">{children}</div>
            </div>
        </div>
    );
};

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Popup;
