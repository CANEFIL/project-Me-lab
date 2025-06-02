import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-white via-zinc-200 to-zinc-300 min-h-screen">
      <MainMenu />
      <Hero />
      <section className="container mx-auto mt-50">
        <h2 className="text-4xl font-bold mb-8 text-center text-zinc-700">
          Featured Cards
        </h2>
        <p className="text-zinc-700 text-center font-semibold text-xl mb-25">
          Explore our featured cards showcasing the best of ProjectMe Lab.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          <Cards
            title="Card 1"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
          <Cards
            title="Card 2"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
          <Cards
            title="Card 3"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
          <Cards
            title="Card 4"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
          <Cards
            title="Loyality"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
          <Cards
            title="Card 6"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
        </div>
      </section>
      <section className="bg-lime-400 mt-30 py-20 text-zinc-700 w-full">
        <div className="container px-4 text-center mx-auto">
          <blockquote className="mx-auto max-w-2xl">
            <p className="text-4xl md:text-4xl">description</p>
            <footer className="mt-8">
              <p className="text-lg font-semibold">Author</p>
              <p className="text-sm text-zinc-700">Position</p>
            </footer>
          </blockquote>
        </div>
      </section>
      <footer className="py-20 w-full ">
        <div className="container grid gap-50 md:grid-cols-3 mx-auto">
          <div>
            <h3 className="text-2xl tracking-wider text-center text-zinc-700">
              ProjectMe Lab
            </h3>
          </div>
          <div>
            <h4 className="text-lg uppercase tracking-wider text-center">
              Privacy
            </h4>
            <nav className="mt-4 flex flex-col space-y-2 text-md text-zinc-700 text-center">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="hover:underline">
                Terms and Conditions
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-lg uppercase tracking-wider text-center">
              Social
            </h4>
            <nav className="mt-4 flex flex-col space-y-2 text-md text-zinc-700 text-center">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">LinkedIn</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
