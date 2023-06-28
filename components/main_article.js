import React from "react";
import Mcard from "./main_card";

const Articles = ({ articles }) => {
  // Get the last blog from the articles array
  const lastBlog = articles[articles.length - 1];

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {lastBlog && (
            <Mcard
              article={lastBlog}
              key={`article__left__${lastBlog.attributes.slug}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
