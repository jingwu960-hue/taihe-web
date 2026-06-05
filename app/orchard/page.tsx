import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const baseInfo = [
  { title: "种植面积", value: "5000亩", icon: "🌾" },
  { title: "年产量", value: "3500万斤", icon: "📦" },
  { title: "合作农户", value: "200+", icon: "👥" },
  { title: "种植年限", value: "15年", icon: "⏳" },
];

const techSystems = [
  { title: "智能灌溉系统", description: "采用滴灌技术，精准控制水分，节约用水，提高效率" },
  { title: "环境监测系统", description: "实时监测温度、湿度、光照等环境参数，为果树生长提供最佳条件" },
  { title: "科学施肥系统", description: "采用测土配方施肥技术，精准施肥，提高肥料利用率" },
  { title: "病虫害绿色防控", description: "采用生物防治和物理防治方法，减少农药使用" },
];

const storageSystem = [
  { title: "恒温冷库", description: "拥有5000平方米恒温冷库，可储存鲜果500万斤" },
  { title: "冷链运输", description: "配备专业冷链运输车队，确保新鲜直达" },
  { title: "质量检测", description: "每批水果都经过严格质量检测，确保品质" },
  { title: "智能仓储", description: "采用现代化仓储管理系统，高效运作" },
];

export default function Orchard() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">基地展示</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            态禾农业现代化种植基地，让您了解我们的实力
          </p>
        </div>
      </section>

      {/* 基地概况 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 bg-gradient-to-br from-primary/20 to-brand-foreground/20 rounded-xl flex items-center justify-center">
              <div className="text-8xl">🌳</div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">基地概况</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                态禾农业种植基地位于湖北省，这里气候温和，四季分明，光照充足，雨量充沛，为果树生长提供了得天独厚的自然条件。
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                基地总占地面积5000亩，其中桃树种植面积2500亩，梨树种植面积2000亩，其他水果500亩。我们采用现代化种植技术，科学管理，确保水果的品质和产量。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {baseInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <div className="text-xl font-bold text-primary">{info.value}</div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 种植实景 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">种植实景</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从春天花开到秋天果实累累，见证水果的成长过程
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-brand-foreground/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">{item === 1 ? "🌸" : item === 2 ? "🌳" : "🍎"}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="font-semibold">
                    {item === 1 ? "春季花开" : item === 2 ? "夏季生长" : "秋季收获"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 种植技术体系 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">种植技术体系</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              采用现代化种植技术，科学管理，确保品质
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {techSystems.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    {index === 0 && "💧"}
                    {index === 1 && "📊"}
                    {index === 2 && "🧪"}
                    {index === 3 && "🐛"}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{system.title}</h3>
                  <p className="text-muted-foreground">{system.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 仓储冷链体系 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">仓储冷链体系</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              完善的仓储冷链体系，确保水果新鲜品质
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {storageSystem.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    {index === 0 && "❄️"}
                    {index === 1 && "🚛"}
                    {index === 2 && "🔬"}
                    {index === 3 && "📦"}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{system.title}</h3>
                  <p className="text-muted-foreground">{system.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
