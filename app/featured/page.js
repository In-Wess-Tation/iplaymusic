import FeaturedCards from "../components/FeaturedCards";
import HeadlinePage from "../components/HeadlinePage";


const Featured = () => {
  return (
    <main className="grid">
      <HeadlinePage headline={"Featured"} />
      <FeaturedCards />
    </main>
  );
}

export default Featured;