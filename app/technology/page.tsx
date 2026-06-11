import { Sprout, Droplets, Thermometer, Dna } from "lucide-react";

import Footer from "../../components/sections/footer/default";
import Navbar from "../../components/sections/navbar/default";
import { LayoutLines } from "../../components/ui/layout-lines";

export default function Technology() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <section className="max-w-container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">种植技术</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们采用先进的种植技术，确保水果的品质和产量
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted/50 rounded-lg p-6">
            <Sprout size={48} className="shrink-0 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">有机种植</h3>
            <p className="text-muted-foreground">
              采用有机肥料，拒绝化学农药，保证水果的天然品质和健康安全。
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <Droplets size={48} className="shrink-0 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">智能灌溉</h3>
            <p className="text-muted-foreground">
              采用滴灌技术，精准控制水分供应，提高水资源利用效率。
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <Thermometer size={48} className="shrink-0 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">环境监测</h3>
            <p className="text-muted-foreground">
              实时监测温度、湿度、光照等环境参数，为果树生长提供最佳条件。
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <Dna size={48} className="shrink-0 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">品种改良</h3>
            <p className="text-muted-foreground">
              与科研机构合作，不断改良品种，提升水果品质和产量。
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
