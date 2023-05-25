import CategoriesProp from "../components/CategoriesProp";
import HeadlinePage from "../components/HeadlinePage";

const Categories = () => {

    return (
        <main className="grid gap-y-4 h-screen">
            <HeadlinePage headline={"Categories"}/>
            <CategoriesProp headline={"Alternative"} bgprimary="bg-[#FF1168]" />
            <CategoriesProp headline={"Blues"} bgprimary="bg-[#E54028]" />
            <CategoriesProp headline={"Classical"} bgprimary="bg-[#F18D05]" />
            <CategoriesProp headline={"Country"} bgprimary="bg-[#F2BC06]" />
            <CategoriesProp headline={"Dance"} bgprimary="bg-[#5EB11C]" />
            <CategoriesProp headline={"Electronic"} bgprimary="bg-[#3A7634]" />
            <CategoriesProp headline={"Fitness"} bgprimary="bg-[#0ABEBE]" />
            <CategoriesProp headline={"Hip-Hop/Rap"} bgprimary="bg-[#00A1CB]" />
            <CategoriesProp headline={"Industrial"} bgprimary="bg-[#115793]" />
        </main>
    );
}

export default Categories;