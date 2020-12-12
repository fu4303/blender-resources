import { useState } from "react";

const Filters = ({ setStatePosts, posts, categories }) => {
  const [freeFilter, setFreeFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onlyFree = () => {
    setFreeFilter((free) => !free);
    if (freeFilter) {
      setStatePosts(posts);
    } else {
      setStatePosts(posts.filter((p) => p.data.free));
    }
  };

  const filterBy = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "Only free":
        onlyFree();
        break;
      case "All":
        setFreeFilter(false);
        setStatePosts(posts);
        break;
      default:
        setFreeFilter(false);
        setStatePosts(posts.filter((p) => p.data.category === category));
        break;
    }
  };

  return (
    <div className="mt-5">
      {["All", "Only free", ...categories].map((category) => {
        return (
          <button
            className={`inline-flex items-center px-2.5 py-0.5 mr-10 rounded-full text-xs font-medium ${
              category === selectedCategory
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => filterBy(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
