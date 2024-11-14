import { useLoaderData } from "react-router-dom";

const NewsContent = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="col-span-6">
            Newscontent
        </div>
    );
};

export default NewsContent;