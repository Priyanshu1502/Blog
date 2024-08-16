import React from "react";

const about = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Simply Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Simply Blog, your go-to destination for clear,
              engaging, and insightful content on a diverse range of topics. At
              Simply Blog, we believe that the best stories and ideas are those
              that are shared simply and authentically.
            </p>
            <p>
              Our team of passionate writers is dedicated to delivering
              high-quality articles that inform, entertain, and inspire. Whether
              you're looking for tips on everyday living, deep dives into
              trending topics, or thoughtful reflections on life’s complexities,
              Simply Blog offers a refreshing take that’s easy to read and hard
              to forget.{" "}
            </p>
            <p>
              Join us on this journey of discovery and stay connected with the
              stories that matter most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
