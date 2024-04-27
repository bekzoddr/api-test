import React, { useRef } from "react";
import { useGetCategoryQuery } from "../../context/categoryApi";

const Categories = () => {
  let { data, isLoading, isError } = useGetCategoryQuery();
  const ref = useRef(() => {});
  console.log(data);
  const title = useRef();
  let categories = data?.data?.map((el, inx) => (
    <div key={el.id}>
      {inx + 1}. {el.title}
    </div>
  ));
  const handleCategory = (e) => {
    e.preventDefault();

    console.log(title.current.value);
  };
  return (
    <div>
      <h2>Categories</h2>
      <form onSubmit={handleCategory} action="">
        <input ref={title} type="text" />
        <button>Create</button>
      </form>
      {isLoading ? <h2>Loading...</h2> : <></>}

      <div>{categories}</div>
    </div>
  );
};

export default Categories;
