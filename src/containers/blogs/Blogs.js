import React, {useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import { motion } from "framer-motion"
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  if (!blogSection.display) {
    return null;
  }
  return (
      <motion.div 
        className="main" id="blogs"
        // 2. Define the initial state (before animation)
        initial={{ opacity: 0, y: 20 }}
        // 3. Define the animation state (when in view)
        whileInView={{ opacity: 1, y: 0 }}
        // 4. Add a transition
        transition={{ duration: 0.5 }}
        // 5. Ensure it only runs once
        viewport={{ once: true }}
      >
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog, i) => {
              return (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
  );
}
