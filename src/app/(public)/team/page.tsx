import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, GraduationCap, ArrowRight, ShieldCheck, User } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-red-100 mb-4 border border-white/20">
            <Users className="h-3.5 w-3.5" /> S S RUMA INTERNATIONAL LTD WORKFORCE
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {employees.map((member) => (
              <div
                key={member.slNo}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full group-hover:bg-red-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center border border-red-200 dark:border-red-800">
                      #{member.slNo}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      {member.department}
                    </span>
                  </div>

                  {/* Blank Photo Frame for User to add photos */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-dashed border-red-600/40 bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:border-red-600 transition-colors">
                      {member.imagePath ? (
                        <Image
                          src={member.imagePath}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <User className="h-8 w-8 text-slate-400 dark:text-slate-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <GraduationCap className="h-4 w-4 text-slate-400 shrink-0" />
                  <span>Qualification: <strong className="text-slate-700 dark:text-slate-200 font-medium">{member.education}</strong></span>
                </div>
              </div>
            ))}
          </div>

          {/* Official Table View */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
            <div className="bg-slate-900 text-white p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Official Employee Register</h3>
                <p className="text-xs text-slate-400 mt-1">S S Ruma International Ltd. Authorized Records</p>
              </div>
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-md">
                Total Employees: 10
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-xs uppercase font-bold text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="py-3.5 px-4 text-center w-16">SL No</th>
                    <th className="py-3.5 px-6">Name of Employee</th>
                    <th className="py-3.5 px-6">Designation</th>
                    <th className="py-3.5 px-6">Key Education</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {employees.map((emp) => (
                    <tr key={emp.slNo} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-3.5 px-4 text-center font-bold text-slate-500">{emp.slNo}</td>
                      <td className="py-3.5 px-6 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-dashed border-red-400 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                          <User className="h-4 w-4" />
                        </div>
                        {emp.name}
                      </td>
                      <td className="py-3.5 px-6 text-red-600 dark:text-red-400 font-medium">{emp.designation}</td>
                      <td className="py-3.5 px-6 font-mono text-xs bg-slate-50 dark:bg-slate-800/40">{emp.education}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Link href="/about" className="flex items-center gap-2">
                View Full Company Profile & Equipment List <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
