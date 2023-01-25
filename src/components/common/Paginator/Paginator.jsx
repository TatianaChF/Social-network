import styles from "./paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(pageNumber => {
                return <span className={currentPage === pageNumber ? styles.pageChoice : ""}
                             onClick={() => {
                                 onPageChanged(pageNumber);
                             }}>{pageNumber}</span>
            })}

        </div>
    )
}
export default Paginator;