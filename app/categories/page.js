import CategoriesProp from "../components/CategoriesProp";

const Categories = () => {

    return ( 
        <main className="grid gap-y-20">
            <h1 className="text-3xl font-bold pl-12 py-6 text-transparent bg-clip-text bg-gradient-to-t from-[#ee0979] to-[#ff6a00]">Categories</h1>
            <CategoriesProp headline={"Alternative"} className="bg-pink-600"/>
            <CategoriesProp headline={"Alternative"} />
            <CategoriesProp headline={"Alternative"} />
            <CategoriesProp headline={"Alternative"} />
            <CategoriesProp headline={"Alternative"} />
            <CategoriesProp headline={"Alternative"} />
            <CategoriesProp headline={"Alternative"} />
        </main>
     );
}
 
export default Categories;