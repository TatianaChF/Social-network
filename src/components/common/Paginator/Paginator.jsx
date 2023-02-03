import styles from "./paginator.module.css";
import {useState} from "react";
import cn from "classnames";

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionSize * portionNumber;

    return (
        <div className={styles.paginator}>
            { portionNumber > 1 &&
                <button onClick={ () => { setPortionNumber(portionNumber - 1) } } >LEFT</button> }

            { pages
                .filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
                .map(pageNumber => {
                return <span key={pageNumber} className={cn({
                    [styles.selectedPage]: currentPage === pageNumber
                }, styles.pageNumber) }
                             onClick={() => {
                                 onPageChanged(pageNumber);
                             }}>{pageNumber}</span>
            }) }

            { portionCount > portionNumber &&
                <button onClick={ () => { setPortionNumber(portionNumber + 1) } } >RIGHT</button> }

        </div>
    )
}
export default Paginator;