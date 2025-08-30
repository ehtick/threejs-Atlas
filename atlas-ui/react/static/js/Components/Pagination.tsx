// atlas-ui/react/static/js/Components/Pagination.tsx
import React from "react";

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
        {page !== 1 && (
          <button onClick={() => (window.location.href = "/galaxy/1")} className={`${baseClasses} ${inactiveClasses}`} title="First page">
            <span className="hidden sm:inline">First</span>
            <span className="sm:hidden">«</span>
          </button>
        )}

        {prevPage && (
          <button onClick={() => (window.location.href = `/galaxy/${prevPage}`)} className={`${baseClasses} ${inactiveClasses}`} title="Previous page">
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">‹</span>
          </button>
        )}

        {(() => {
          const pages = [];
          const range = 2;
          const start = Math.max(1, page - range);
          const end = Math.min(finish, page + range);

          if (start > 1) {
            pages.push(
              <button key={1} onClick={() => (window.location.href = "/galaxy/1")} className={`${baseClasses} ${inactiveClasses}`}>
                1
              </button>
            );
            if (start > 2) {
              pages.push(
                <span key="start-ellipsis" className="px-2 text-gray-400">
                  ...
                </span>
              );
            }
          }

          for (let i = start; i <= end; i++) {
            if (i === page) {
              pages.push(
                <span key={i} className={`${baseClasses} ${activeClasses} cursor-default`}>
                  {i}
                </span>
              );
            } else {
              pages.push(
                <button key={i} onClick={() => (window.location.href = `/galaxy/${i}`)} className={`${baseClasses} ${inactiveClasses} cursor-pointer`}>
                  {i}
                </button>
              );
            }
          }

          if (end < finish) {
            if (end < finish - 1) {
              pages.push(
                <span key="end-ellipsis" className="px-2 text-gray-400">
                  ...
                </span>
              );
            }
            pages.push(
              <button key={finish} onClick={() => (window.location.href = `/galaxy/${finish}`)} className={`${baseClasses} ${inactiveClasses}`}>
                {finish}
              </button>
            );
          }

          return pages;
        })()}

        {nextPage && (
          <button onClick={() => (window.location.href = `/galaxy/${nextPage}`)} className={`${baseClasses} ${inactiveClasses}`} title="Next page">
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">›</span>
          </button>
        )}

        {page !== finish && (
          <button onClick={() => (window.location.href = `/galaxy/${finish}`)} className={`${baseClasses} ${inactiveClasses}`} title="Last page">
            <span className="hidden sm:inline">Last</span>
            <span className="sm:hidden">»</span>
          </button>
        )}
      </div>

      <div className="text-center mt-4 text-sm text-gray-400">
        Page {page} of {finish}
      </div>
    </div>
  );
};

export default Pagination;
