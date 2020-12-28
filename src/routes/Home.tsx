const Fade = require("react-reveal/Fade");

const Home = () => (
  <>
    <Fade>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-200">
        Selamat Datang
      </h1>
      <p className="text-gray-200 pb-4 md:text-xl lg:text-2xl max-w-3/4">
        Website ini nantinya akan berisikan semua project yang saya buat
      </p>
      <button className="p-2 border-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-lg">
        Projects saya
      </button>
    </Fade>
  </>
);

export default Home;
