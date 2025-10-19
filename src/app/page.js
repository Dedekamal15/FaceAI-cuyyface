import Camera from "./components/Camera";
import Footer from "./components/Footer";
import Navheader from "./components/Navheader";

export default function Home() {
  return (
    <main className="bg-grey-900 min-h-screen py-16" style={{filter: 'drop-shadow(0 0 70px rgba(105, 105, 105, 0.3))'}}>
      <div className="max-w-2xl mx-auto space-y-8 px-4">
       <Navheader />
       <Camera />
       <Footer />
      </div>
    </main>
  );
}