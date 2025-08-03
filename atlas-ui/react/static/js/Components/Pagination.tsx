import React from 'react';

interface PaginationProps {
  page: number;
  prevPage?: number;
  nextPage?: number;
  finish: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, prevPage, nextPage, finish }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
  const activeClasses = "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg";
  const inactiveClasses = "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20";

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-4 sm:p-6 mb-8">
      <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
        
        {/* First page */}
        {page !== 1 && (
          <a 
            href="/galaxy?page=1" 
            className={`${baseClasses} ${inactiveClasses}`}
            title="First page"
          >
            <span className="hidden sm:inline">First</span>
            <span className="sm:hidden">«</span>
          </a>
        )}

        {/* Previous page */}
        {prevPage && (
          <a 
            href={`/galaxy?page=${prevPage}`} 
            className={`${baseClasses} ${inactiveClasses}`}
            title="Previous page"
          >
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">‹</span>
          </a>
        )}

        {/* Page numbers around current page */}
        {(() => {
          const pages = [];
          const range = 2; // Show 2 pages before and after current page
          const start = Math.max(1, page - range);
          const end = Math.min(finish, page + range);

          // Add ellipsis at the beginning if needed
          if (start > 1) {
            pages.push(
              <a 
                key={1}
                href="/galaxy?page=1" 
                className={`${baseClasses} ${inactiveClasses}`}
              >
                1
              </a>
            );
            if (start > 2) {
              pages.push(
                <span key="start-ellipsis" className="px-2 text-gray-400">
                  ...
                </span>
              );
            }
          }

          // Add page numbers in range
          for (let i = start; i <= end; i++) {
            pages.push(
              <a
                key={i}
                href={i === page ? undefined : `/galaxy?page=${i}`}
                className={`${baseClasses} ${i === page ? activeClasses : inactiveClasses} ${
                  i === page ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                {i}
              </a>
            );
          }

          // Add ellipsis at the end if needed
          if (end < finish) {
            if (end < finish - 1) {
              pages.push(
                <span key="end-ellipsis" className="px-2 text-gray-400">
                  ...
                </span>
              );
            }
            pages.push(
              <a 
                key={finish}
                href={`/galaxy?page=${finish}`} 
                className={`${baseClasses} ${inactiveClasses}`}
              >
                {finish}
              </a>
            );
          }

          return pages;
        })()}

        {/* Next page */}
        {nextPage && (
          <a 
            href={`/galaxy?page=${nextPage}`} 
            className={`${baseClasses} ${inactiveClasses}`}
            title="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">›</span>
          </a>
        )}

        {/* Last page */}
        {page !== finish && (
          <a 
            href={`/galaxy?page=${finish}`} 
            className={`${baseClasses} ${inactiveClasses}`}
            title="Last page"
          >
            <span className="hidden sm:inline">Last</span>
            <span className="sm:hidden">»</span>
          </a>
        )}
      </div>

      {/* Page info */}
      <div className="text-center mt-4 text-sm text-gray-400">
        Page {page} of {finish}
      </div>
    </div>
  );
};

export default Pagination;