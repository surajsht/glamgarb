import { categories } from "../Data";

const Categories = () => {
  return (
    <div className="container mb-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((cat) => {
        let { id, title, icon } = cat;

        return (
          <div
            key={id}
            className="flex cursor-pointer items-center justify-center space-x-4 bg-slate-100 py-6 duration-300 ease-out hover:shadow-lg"
          >
            <img src={icon} alt={title} className="h-8 w-8" />
            <h2 className="text-xl font-medium"> {title} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
