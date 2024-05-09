import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    headerContent: React.ReactNode;
    bodyContent: React.ReactNode;
    footerContent: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, headerContent, bodyContent, footerContent }) => {

    return isOpen && (
        <div className="modal">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                {
                    headerContent && (
                        <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                            {headerContent}
                        </div>
                    )
                }
                {
                    bodyContent && (
                        <div className="p-4 md:p-5">
                            {bodyContent}
                        </div>
                    )
                }
                {
                    footerContent && (
                        <div className="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                            {footerContent}
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Modal;