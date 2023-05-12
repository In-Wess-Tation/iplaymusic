import FeaturedCards from "./components/footer, header og nav/FeaturedCards";


export default async function Home() {

  return (
    <main className="grid">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ee0979] to-[#ff6a00] pl-12 py-2 w-[40%]">Featured</h1>
        <FeaturedCards />
    </main>
  )
}
