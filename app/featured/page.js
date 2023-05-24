import FeaturedCards from "../components/FeaturedCards";
import HeadlinePage from "../components/HeadlinePage";


const Featured = () => {
  return (
    <main className="grid">
      <HeadlinePage headline={"Featured"} />
      <FeaturedCards heading={"the greatest showman"}/>
    </main>
  );
}

export default Featured;