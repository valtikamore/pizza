import React from 'react';
import ReactPaginate from "react-paginate";

import styles from './styles.module.scss'

interface IProps {
 onPageChange: (e:any) => void
}
export const Pagination:React.FC<IProps> = ({onPageChange}) => {
 return (
<ReactPaginate
    className={styles.pagination}
    breakLabel={'...'}
    nextLabel={'>'}
    previousLabel={'<'}
    pageRangeDisplayed={3}
    pageCount={3}
    renderOnZeroPageCount={null}
    onPageChange={(e) => onPageChange(e)}
/>);
};
