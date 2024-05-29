import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  return (
    <div className="mx-auto my-auto px-1 py-0">
      <ul className="flex space-x-1 justify-start items-center flex-wrap">
        <li className="decoration-blue-500 hover:text-blue-500 hover:cursor-pointer hover:underline">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <FaChevronRight />
              <li className={isLast ? 'font-bold' : 'decoration-blue-500 hover:text-blue-500 hover:cursor-pointer hover:underline'}>
                {isLast ? (
                  <span>{value}</span>
                ) : (
                  <Link to={to}>{value}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb
