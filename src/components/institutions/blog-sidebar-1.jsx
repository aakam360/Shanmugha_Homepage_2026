"use client";

// import React, { useEffect } from "react";
// import { blog_data } from "../../../data";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchnews,
//   selectnews,
// } from "../../../redux/features/homepageEventsSlice";
// const latest_blog = blog_data.slice(0, 3);

// const SidebarOne = () => {
//   const dispatch = useDispatch();

//   const news = useSelector(selectnews);

//   useEffect(() => {
//     dispatch(fetchnews());
//   }, [dispatch]);

//   return (
//     <div className="edu-blog-sidebar">
//       <div className="edu-blog-widget widget-latest-post">
//         <div className="inner">
//           <h4 className="widget-title">Latest News</h4>
//           <div className="content latest-post-list">
//             {news
//               .slice(-4)
//               .reverse()
//               .map((blog) => (
//                 <div key={blog.id} className="latest-post">
//                   <div className="post-content">
//                     <h6 className="title">
//                       <p>
//                         {blog.title} : {blog.content}
//                       </p>
//                     </h6>
//                     <ul className="blog-meta">
//   <li>
//     <i className="icon-27"></i>
//     {blog.selectedDate?.split(' ').slice(0, 4).join(' ')}
//   </li>
// </ul>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarOne;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchnews,
  selectnews,
} from "../../../redux/features/homepageEventsSlice";

const SidebarOne = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectnews);

  useEffect(() => {
    dispatch(fetchnews());
  }, [dispatch]);

  return (
    <div className="edu-blog-sidebar">
      <style jsx>{`
        .scroll-container {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .scroll-content {
          display: flex;
          flex-direction: column;
          animation: scroll-up 150s linear infinite;
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .latest-post {
          margin-bottom: 20px;
        }

        .title {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }

        .blog-meta {
          list-style: none;
          padding: 0;
          font-size: 12px;
          color: #555;
        }

        .blog-meta li {
          display: flex;
          align-items: center;
        }

        .blog-meta i {
          margin-right: 5px;
        }
      `}</style>

      <div className="edu-blog-widget widget-latest-post">
        <div className="inner">
          <h4 className="widget-title">Latest News</h4>
          <div className="scroll-container">
            <div className="scroll-content">
              {[...news].reverse().map((blog) => (
                <div key={blog.id} className="latest-post">
                  <div className="post-content">
                    <h6 className="title">
                      <p>
                        {blog.title} : {blog.content}
                      </p>
                    </h6>
                    <ul className="blog-meta">
                      <li>
                        <i className="icon-27"></i>
                        {blog.selectedDate?.split(" ").slice(0, 4).join(" ")}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarOne;

