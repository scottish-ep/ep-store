import React from "react";
// const Pagination=({ postsPerPage, totalPosts, paginate}) =>{
//     const pageNumbers =[];
//     for (let i=1; i<= Math.ceil(totalPosts / postPerPage); i++){
//         pageNumbers.push(i);
//     }
//     return(
//         <nav>
//             <ul className="pagination">
//                 {pageNumbers.map(number =>(
//                     <li key={number} className='page-item'>
//                         <a onClick={() => paginate(number)} href="!#" className="page-link">
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   console.log(pages)
   
    return (
      <div>
        <div>Pagination</div>
      </div>
    );
   };
   
   export default Pagination;