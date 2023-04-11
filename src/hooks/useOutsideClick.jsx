/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export default function useOutsideClick(ref, isOpen, closeFunction) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && isOpen) {
                setTimeout(() => {
                    closeFunction();
                }, 10);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, isOpen]);
}
