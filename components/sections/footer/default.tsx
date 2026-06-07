'use client'
import {Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import TaiheLogo from "../../logos/taihe";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";

const policyContent: Record<string, { title: string; content: string }> = {
  privacy: {
    title: "隐私政策",
    content: `湖北态禾农业股份有限公司（以下简称"我们"）高度重视用户的隐私保护。本隐私政策旨在帮助您了解我们如何收集、使用、存储和保护您的个人信息。

一、信息收集
我们可能收集以下类型的信息：
1. 您主动提供的信息，如姓名、联系电话、电子邮箱、通信地址等；
2. 您在使用我们服务过程中产生的信息，如浏览记录、订单信息等；
3. 设备信息，如设备型号、操作系统版本、唯一设备标识符等。

二、信息使用
我们收集的信息将用于以下目的：
1. 为您提供、维护和改进我们的服务；
2. 处理您的订单和交易；
3. 向您发送与产品相关的重要通知；
4. 根据您的偏好提供个性化的服务和内容；
5. 预防和检测欺诈行为，保障交易安全。

三、信息保护
我们采取严格的安全措施保护您的个人信息：
1. 使用加密技术保障数据传输和存储的安全；
2. 建立内部信息安全管理制度，限制员工访问个人信息的权限；
3. 定期进行安全审计和风险评估。

四、信息共享
未经您的同意，我们不会向任何第三方共享、转让或公开披露您的个人信息，除非：
1. 根据法律法规要求或政府部门的要求；
2. 为保护我们或用户的合法权益所必需；
3. 在涉及合并、收购或破产清算时，且要求新的持有方继续受本政策约束。

五、您的权利
您有权：
1. 访问、更正或删除您的个人信息；
2. 撤回您对信息收集和使用的同意；
3. 注销您的账户。

六、未成年人保护
我们非常重视对未成年人个人信息的保护。若您是未满18周岁的未成年人，请在监护人的陪同下阅读本政策，并在征得监护人同意后使用我们的服务或提供个人信息。

七、政策的更新
我们可能适时修订本政策，更新后的内容将通过网站公告等方式通知您。



更新日期：2026年6月7日`,
  },
  terms: {
    title: "使用条款",
    content: `欢迎使用湖北态禾农业股份有限公司（以下简称"我们"或"公司"）提供的网站及相关服务。请您仔细阅读以下使用条款。

一、服务说明
1. 我们通过网站提供农业产品信息展示、在线咨询、采购意向提交等服务。
2. 我们保留随时修改、暂停或终止部分或全部服务的权利。
3. 您使用我们的服务即表示同意接受本条款的约束。

二、用户账户
1. 您需要提供真实、准确、完整的注册信息。
2. 您应妥善保管账户信息，对账户下的一切行为负责。
3. 如您发现账户存在安全隐患，请立即通知我们。

三、用户行为规范
您在使用本服务时，应遵守法律法规，不得从事以下行为：
1. 发布虚假信息或误导性内容；
2. 侵犯他人知识产权或其他合法权益；
3. 利用技术手段干扰或破坏系统正常运行；
4. 未经授权访问系统或获取他人信息；
5. 从事任何违法或不道德的行为。

四、知识产权
1. 本网站的所有内容（包括但不限于文字、图片、商标、设计、软件等）均受知识产权法保护，归我们或相关权利人所有。
2. 未经书面许可，任何人不得擅自使用、复制、传播或修改本网站的内容。

五、交易规则
1. 网站上展示的产品信息、价格、规格等仅供参考，实际交易以双方确认的订单为准。
2. 我们保留根据市场情况调整产品价格和信息的权利。
3. 订单提交后，我们将与您确认具体交易细节。

六、免责声明
1. 因不可抗力导致的服务中断或数据损失，我们不承担责任。
2. 用户因使用本服务而产生的任何直接或间接损失，我们仅在法律允许的范围内承担有限责任。
3. 本网站可能包含指向第三方网站的链接，我们对这些网站的内容和隐私政策不承担责任。

七、隐私保护
我们重视您的隐私保护，相关信息处理请参阅我们的隐私政策。

八、条款变更
我们保留随时修改本条款的权利，变更后的条款将在网站上公布并生效。继续使用本服务即视为接受修改后的条款。

九、争议解决
因本条款引起的或与本条款有关的任何争议，双方应友好协商解决；协商不成的，任何一方均可向公司所在地有管辖权的人民法院提起诉讼。

十、其他
1. 本条款的解释权归湖北态禾农业股份有限公司所有。
2. 本条款自您在网站使用我们服务之日起生效。

更新日期：2026年6月7日`,
  },
};

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: React.ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  className?: string;
}

export default function FooterSection({
  logo = <TaiheLogo />,
  name = siteConfig.name,
  columns = [
    {
      title: "快速导航",
      links: [
        { text: "首页", href: "/" },
        { text: "关于我们", href: "/about" },
        { text: "产品中心", href: "/products" },
        { text: "基地展示", href: "/orchard" },
      ],
    },
    {
      title: "更多链接",
      links: [
        // { text: "合作案例", href: "/cases" },
        { text: "新闻资讯", href: "/news" },
        { text: "招商合作", href: "/cooperation" },
        { text: "联系我们", href: "/contact" },
      ],
    },
  ],
  copyright = "©2026湖北态禾农业股份有限公司. 保留所有权利.",
  policies = [
    { text: "隐私政策", href: "#privacy" },
    { text: "使用条款", href: "#terms" },
  ],
  className,
}: FooterProps) {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const handlePolicyClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const key = href.replace("#", "");
    if (policyContent[key]) {
      setOpenPolicy(key);
    }
  };

  const currentPolicy = openPolicy ? policyContent[openPolicy] : null;

  return (
    <footer className={cn("relative overflow-hidden bg-background border-t border-border pt-16 pb-8 w-full", className)}>
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-foreground/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-container mx-auto ">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-3 px-4">
              <div className="flex items-center gap-3 mb-6">
                {logo}
                <h3 className="text-xl font-bold text-foreground">{name}</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                湖北态禾农业专注桃树、梨树规模化种植，源头种植，品质可控，稳定供货，诚信经营。
              </p>
              
              {/* 联系方式 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" asChild size="sm">
                  <a href="/contact">立即咨询</a>
                </Button>
              </div>
            </FooterColumn>
            
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold mb-4 text-foreground">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors block mb-3"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          
          <FooterBottom className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="text-muted-foreground text-sm">{copyright}</div>
            <div className="flex items-center gap-6">
              {policies.map((policy, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handlePolicyClick(e, policy.href)}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  {policy.text}
                </button>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>

      {/* 条款模态框 */}
      <Dialog open={!!openPolicy} onOpenChange={(open) => !open && setOpenPolicy(null)}>
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {currentPolicy?.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {currentPolicy?.title}详细内容
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[65vh] overflow-y-auto pr-2">
            <div className="whitespace-pre-line text-muted-foreground text-sm leading-relaxed space-y-4">
              {currentPolicy?.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
