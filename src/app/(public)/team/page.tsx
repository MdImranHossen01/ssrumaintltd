import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, GraduationCap, ArrowRight, ShieldCheck, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Our Team & Leadership | S S Ruma International Ltd',
  description: 'Meet the CEO and dedicated professional team, engineers, managers, and staff powering S S Ruma International Ltd across Bangladesh.',
};

interface Employee {
  slNo: number;
  name: string;
  designation: string;
  education: string;
  department: string;
  imagePath?: string; // Add image path here when ready (e.g. "/team/employee1.jpg")
}

const employees: Employee[] = [
  {
    slNo: 1,
    name: 'Ashikur Rahman',
    designation: 'General Manager',
    education: 'MSS',
    department: 'Executive Management'
  },
  {
    slNo: 2,
    name: 'Foysal Ahmed Sohel',
    designation: 'Project Engineer',
    education: 'BSc in Civil Engineering',
    department: 'Engineering & Construction'
  },
  {
    slNo: 3,
    name: 'Al Amin',
    designation: 'Site Engineer',
    education: 'Diploma in Electrical Engineering',
    department: 'Engineering & Site Work'
  },
  {
    slNo: 4,
    name: 'Md. Sifar',
    designation: 'Site Supervisor',
    education: 'HSC',
    department: 'Field Supervision'
  },
  {
    slNo: 5,
    name: 'Md. Mohibullah',
    designation: 'Accountant',
    education: 'BSS',
    department: 'Accounts & Finance'
  },
  {
    slNo: 6,
    name: 'Sk Shimul',
    designation: 'Purchase Officer',
    education: 'BA',
    department: 'Supply Chain & Procurement'
  },
  {
    slNo: 7,
    name: 'Boni Eamin',
    designation: 'Asst. Purchase Officer',
    education: 'BA',
    department: 'Supply Chain & Procurement'
  },
  {
    slNo: 8,
    name: 'Moniruzzaman Munna',
    designation: 'Office Assistant',
    education: 'JSC',
    department: 'General Operations'
  },
  {
    slNo: 9,
    name: 'Md Hasib',
    designation: 'Office Assistant',
    education: 'JSC',
    department: 'General Operations'
  },
  {
    slNo: 10,
    name: 'Md Sabbir',
    designation: 'Office Assistant',
    education: 'JSC',
    department: 'General Operations'
  }
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-slate-900 text-white py-16 md:py-24 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Meet Our Leadership & Team
          </h1>
          <p className="text-red-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our success is driven by experienced leadership, skilled engineers, managers, and dedicated operations staff committed to excellence across Bangladesh.
          </p>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-50 dark:bg-red-950/50 px-3 py-1 rounded-full">
              Executive Leadership
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
              Chief Executive Officer (CEO)
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-52 h-64 shrink-0 rounded-2xl overflow-hidden border-4 border-red-600 shadow-2xl">
              <Image
                src="/ceo.webp"
                alt="Sarmin Sultana Ruma - CEO"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  SARMIN SULTANA RUMA
                </h3>
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider mt-1">
                  Chief Executive Officer (CEO)
                </p>
                <p className="text-xs text-slate-400">S S Ruma International Ltd.</p>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed italic border-l-2 border-red-600 pl-4 py-1">
                &ldquo;Every project we undertake is a commitment to quality, trust, and long-term value. From residential homes to corporate buildings and government contracts, our focus is always on delivering excellence.&rdquo;
              </p>

              <div className="pt-2">
                <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                  <Link href="/about#ceo-message">Read Full CEO Message <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid with Blank Frames */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Employee Roster & Key Roles
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-2">
              Official list of key personnel serving at S S Ruma International Ltd.
            </p>
          </div>

          {/* Cards Layout with Blank Frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {employees.map((member) => (
              <div
                key={member.slNo}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Photo Frame */}
                <div className="relative h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={member.imagePath || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop'}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info Bar */}
                <div className="p-6 flex items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {member.designation}
                    </p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                      {member.department}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>



        </div>
      </section>
    </div>
  );
}
