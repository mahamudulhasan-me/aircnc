import qs from "query-string";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();
  const handleCategoryData = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = { ...currentQuery, category: label };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      {
        skipNull: true,
      }
    );
    navigate(url);
  };
  return (
    <div
      onClick={handleCategoryData}
      className="cursor-pointer flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 text-neutral-500 border-transparent "
    >
      <Icon size={28} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
