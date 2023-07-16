import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LoanModal(props) {
    const { isOpen, onClose, title, children } = props;
  
    const modalClasses = classNames(
      'fixed',
      'inset-0',
      'z-50',
      'overflow-auto',
      'bg-gray-800',
      'bg-opacity-40',
      { hidden: !isOpen }
    );
  
    const contentClasses = classNames(
      'bg-white',
      'rounded-lg',
      'p-4',
      'mx-auto',
      'mt-20',
      { hidden: !isOpen }
    );
  
    return (
      <div className={modalClasses}>
        <div className={contentClasses}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">{title}</h2>
            <button type="button" onClick={onClose}>
              <svg
                className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
  }
  
  LoanModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };