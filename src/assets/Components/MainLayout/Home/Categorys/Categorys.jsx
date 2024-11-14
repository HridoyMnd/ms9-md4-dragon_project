import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const Categorys = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res) => res.json())
        .then(data => setCategories(data.data.news_category))

    }, [])
    console.log(categories);
    return (
        <div className="col-span-3 flex flex-col space-y-3">
            {
                categories.map((category, idx) => 
                    <button className=" text-gray-500 bg-gray-50 btn text-lg font-semibold">{category.category_name}</button>
                )
            }
        </div>
    );
};

export default Categorys;