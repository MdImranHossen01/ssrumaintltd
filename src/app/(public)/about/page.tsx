import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Target, 
  Eye, 
  Truck, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  ArrowRight,
  HardHat,
  CheckCircle2,
  Users,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Company Profile 2026 | S S Ruma International Ltd',
  description: 'S S Ruma International Ltd is a dynamic and reliable construction & supply company in Bangladesh specializing in residential, commercial, and government projects.',
};

const servicesList = [
  {
    id: 1,
    title: 'Construction of Small Roads & Culverts',
    desc: 'Precision road laying, paving, and durable culvert building for rural and urban infrastructure development.'
  },
  {
    id: 2,
    title: 'Drainage System Construction & Maintenance',
    desc: 'High-grade storm water & wastewater drainage network engineering, channelization, and routine maintenance.'
  },
  {
    id: 3,
    title: 'Land Filling & Development Works',
    desc: 'Large-scale soil compaction, land levelling, site preparation, and foundation readiness for major construction projects.'
  },
  {
    id: 4,
    title: 'Geo Tube & Geo Bag Filling with Sand',
    desc: 'Coastal and riverbank erosion control solutions using heavy-duty geo textiles and sand bags.'
  },
  {
    id: 5,
    title: 'Supply of Construction Materials & Safety Items',
    desc: 'Prompt distribution of cement, steel, sand, aggregates, personal protective equipment (PPE), and safety gear.'
  },
  {
    id: 6,
    title: 'Bridge Construction & Development',
    desc: 'Structural bridge erection, concrete piling, expansion, and heavy-duty structural development across riverways.'
  }
];

const equipmentList = [
  { slNo: 1, name: 'Mixer Machine with Hopper', qty: '02 Nos', origin: 'Japan', condition: 'Good Condition' },
  { slNo: 2, name: 'Mixer Machine with Hopper', qty: '02 Nos', origin: 'India', condition: 'Good Condition' },
  { slNo: 3, name: 'Vibrator (Diesel)', qty: '03 Nos', origin: 'Italy', condition: 'Good Condition' },
  { slNo: 4, name: 'Mechanical Plate Vibrator', qty: '01 Nos', origin: 'England', condition: 'Good Condition' },
  { slNo: 5, name: 'Power Pump', qty: '01 Set', origin: 'Italy', condition: 'Good Condition' },
  { slNo: 6, name: 'Power Rammer & Thread Cutter', qty: '01 Set', origin: 'England', condition: 'Good Condition' },
  { slNo: 7, name: 'Welding Machine', qty: '01 Set', origin: 'Japan', condition: 'Good Condition' },
  { slNo: 8, name: 'Winch Machine', qty: '01 Nos', origin: 'England', condition: 'Good Condition' },
  { slNo: 9, name: 'Reversible Plate Compactor', qty: '02 Nos', origin: 'England', condition: 'Good Condition' },
  { slNo: 10, name: 'Barge', qty: '01 Nos', origin: 'Japan', condition: 'Good Condition' },
  { slNo: 11, name: 'Theodolite', qty: '02 Set', origin: 'Japan', condition: 'Good Condition' },
  { slNo: 12, name: 'Levelling Instrument', qty: '04 Set', origin: 'Japan', condition: 'Good Condition' },
  { slNo: 13, name: 'Pile Driving Equipment', qty: '02 Set', origin: 'Local', condition: 'Good Condition' },
  { slNo: 14, name: 'Diesel Generator', qty: '02 Set', origin: 'Japan', condition: 'Good Condition' },
  { slNo: 15, name: 'Motor Cycle', qty: '05 Nos', origin: 'Japan', condition: 'Good Condition' },
];

export default function AboutCompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* Profile Cover / Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-slate-900 text-white overflow-hidden py-20 md:py-28 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-900/40 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-red-100 border border-white/20">
                <HardHat className="h-4 w-4" /> OFFICIAL COMPANY PROFILE 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                S S RUMA <br className="hidden md:block" />
                <span className="text-red-200">INTERNATIONAL LTD.</span>
              </h1>
              <p className="text-red-100 text-base md:text-lg max-w-xl leading-relaxed">
                Reliable Construction & Material Supply Solutions across Bangladesh. Committed to Quality, Trust, and Long-Term Structural Value.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-white text-red-700 hover:bg-slate-100 font-bold shadow-md">
                  <a href="#ceo-message">CEO Message</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium">
                  <Link href="/team">Our Team Roster</Link>
                </Button>
              </div>
            </div>

            {/* Red & Charcoal Geometric Accent Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl w-full max-w-md shadow-2xl text-slate-100">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/15">
                <Building2 className="h-7 w-7 text-red-300" />
                <div>
                  <h3 className="font-bold text-lg">Contact Information</h3>
                  <p className="text-xs text-red-200">Head Office Details</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-red-300 shrink-0" />
                  <span>+880 1911 170535 / +880 1738 888456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-red-300 shrink-0" />
                  <span>ruma2014s@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-red-300 shrink-0" />
                  <span>www.ssrumaintltd.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-red-300 shrink-0 mt-0.5" />
                  <span>116/117, DIT Extention Road, Fokirapul, Motijheel, Dhaka-1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hi There! Intro Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-red-600 font-extrabold tracking-wider text-xs uppercase px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50">
            Welcome Note
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-3 mb-6">
            Hi There!
          </h2>
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden text-left">
            <div className="relative z-10 space-y-4 text-base md:text-lg leading-relaxed font-normal">
              <p>
                Welcome to <strong>S S Ruma International Ltd.</strong> We&apos;re glad you&apos;re here. This profile offers a quick look at who we are, what we do, and how we deliver reliable construction and supply solutions across Bangladesh.
              </p>
              <p>
                From building homes and corporate spaces to executing government contracts, our focus is simple—quality work, honest communication, and on-time delivery. We combine practical experience with a strong supply network to keep projects moving smoothly from start to finish.
              </p>
              <p>
                Take a moment to explore our services, capabilities, and completed work. If you&apos;re planning a project, we&apos;d be happy to discuss how we can support you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-red-600 uppercase tracking-wider">
                <Building2 className="h-4 w-4" /> About Our Enterprise
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                About S S Ruma International Ltd.
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                <p>
                  <strong>S S Ruma International Ltd.</strong> is a dynamic and reliable construction and supply company in Bangladesh, committed to delivering high-quality services across residential, commercial, and government sectors. With a strong focus on excellence, the company specializes in house construction, corporate building development, and the execution of government tenders and contracts.
                </p>
                <p>
                  Driven by professionalism and technical expertise, S S Ruma International Ltd. ensures that every project is completed with precision, safety, and efficiency. The company maintains a well-organized supply chain, providing essential construction materials such as cement, steel, sand, and other structural components to support smooth project execution.
                </p>
                <p>
                  Over time, the company has built a reputation for trust, timely delivery, and cost-effective solutions. Its experienced team works closely with clients to understand their requirements and transform ideas into durable and functional structures.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-950 text-red-600 rounded-xl">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Quality Assurance</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Strict material selection and structural safety standards on every site.</p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Robust Supply Chain</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">On-demand delivery of raw materials, cement, sand, and steel.</p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-950 text-red-600 rounded-xl">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Government Tenders</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Experienced handling of public infrastructure contracts and civil works.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Profile & Message Section */}
      <section id="ceo-message" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 dark:bg-red-950/50 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
              CEO Message
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 dark:bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
            {/* CEO Image */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-red-600 shadow-2xl group">
                <Image
                  src="/ceo.webp"
                  alt="Sarmin Sultana Ruma - CEO S S Ruma International Ltd"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-wide">
                  SARMIN SULTANA RUMA
                </h3>
                <p className="text-xs font-bold text-red-600 dark:text-red-400 tracking-wider uppercase mt-1">
                  Chief Executive Officer (CEO)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">S S Ruma International Ltd.</p>
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              <p className="italic text-lg font-medium text-slate-900 dark:text-slate-100 border-l-4 border-red-600 pl-4 py-1">
                &ldquo;At S S Ruma International Ltd., we believe that every project we undertake is more than just construction—it is a commitment to quality, trust, and long-term value.&rdquo;
              </p>
              <p>
                From residential homes to corporate buildings and government contracts, our focus is always on delivering excellence through professionalism and precision. We continuously work to enhance our capabilities by adopting modern construction methods, ensuring safety standards, and strengthening our supply chain. Our dedicated team plays a vital role in transforming ideas into strong, sustainable structures that meet our clients&apos; expectations.
              </p>
              <p>
                Over the years, the trust and support of our clients and partners have been the foundation of our growth. We are grateful for that confidence and remain committed to maintaining transparency, reliability, and timely delivery in every project. Looking ahead, our vision is to contribute meaningfully to the infrastructure development of Bangladesh while upholding the highest standards of integrity and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Mission & Vision
            </h2>
            <p className="text-slate-500 text-sm mt-2">Guiding Principles driving our construction & supply operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-red-600 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="space-y-4 relative z-10">
                <div className="p-3 bg-white/15 w-fit rounded-2xl border border-white/20">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-red-50 text-sm md:text-base leading-relaxed">
                  Our mission at S S Ruma International Ltd. is to deliver high-quality construction and supply services with reliability, efficiency, and professionalism. We aim to meet client expectations through timely project execution, cost-effective solutions, and strict adherence to safety and quality standards. By utilizing skilled manpower, modern techniques, and a strong supply chain, we ensure smooth operations in every project.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="space-y-4 relative z-10">
                <div className="p-3 bg-red-600 w-fit rounded-2xl">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Our vision is to become one of the most trusted and leading construction and supply companies in Bangladesh. We aspire to contribute significantly to the nation&apos;s infrastructure development by delivering innovative and sustainable solutions. Through continuous improvement, advanced technologies, and a dedicated team, we aim to set new standards in quality and service across diverse sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-red-600 bg-red-50 dark:bg-red-950/50 px-3 py-1 rounded-full uppercase tracking-wider">
              Core Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-red-500/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-extrabold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  0{service.id}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Strength & Infrastructure</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                Our Capabilities
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                At S S Ruma International Ltd., we offer comprehensive construction and supply solutions tailored to diverse project needs. Our capabilities include end-to-end project management, from planning and design coordination to execution and final delivery. With a skilled workforce and reliable logistics, we ensure efficient operations and consistent quality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-600 shrink-0" /> End-to-end project management
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-600 shrink-0" /> Skilled engineering & field workforce
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-600 shrink-0" /> Government tender & public civil works
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-600 shrink-0" /> Fast-track raw material supply network
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List of Equipment Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Machinery Inventory</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                List of Equipment & Tools
              </h2>
            </div>
            <span className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-md">
              Total Listed Items: {equipmentList.length}
            </span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-900 text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="py-3.5 px-4 text-center w-16">SL No</th>
                    <th className="py-3.5 px-6">Item Name</th>
                    <th className="py-3.5 px-4 text-center">Quantity</th>
                    <th className="py-3.5 px-4 text-center">Country of Origin</th>
                    <th className="py-3.5 px-6">Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {equipmentList.map((item) => (
                    <tr key={item.slNo} className="hover:bg-white dark:hover:bg-slate-900/60 transition-colors">
                      <td className="py-3 px-4 text-center font-bold text-slate-400">{item.slNo}</td>
                      <td className="py-3 px-6 font-semibold text-slate-900 dark:text-slate-100">{item.name}</td>
                      <td className="py-3 px-4 text-center font-medium text-red-600 dark:text-red-400">{item.qty}</td>
                      <td className="py-3 px-4 text-center font-mono text-xs">{item.origin}</td>
                      <td className="py-3 px-6 text-emerald-600 dark:text-emerald-400 font-medium text-xs">
                        <span className="inline-flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> {item.condition}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Team Redirect CTA Banner */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-600 rounded-2xl shrink-0">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Looking for Our Team & Staff List?</h3>
              <p className="text-xs text-slate-400 mt-1">View our 10+ engineers, site supervisors, and key personnel on a dedicated page.</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold shrink-0">
            <Link href="/team">Explore Team Members <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Let's Work Together CTA / Footer */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-red-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            At S S Ruma International Ltd., we are ready to turn your ideas into reality with quality construction and reliable supply solutions. Whether it&apos;s a home, corporate project, or government work, our team is here to support you. Let&apos;s collaborate to build strong, lasting results together.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-red-700 hover:bg-slate-100 font-bold px-8 shadow-xl">
              <Link href="/contact">Contact Our Office</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold">
              <a href="tel:+8801911170535">Call +880 1911 170535</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
