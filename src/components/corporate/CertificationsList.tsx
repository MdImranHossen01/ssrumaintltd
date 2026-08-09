"use client";

import React, { useState } from 'react';
import { FileText, Download, Award, X } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  desc: string;
  status: string;
  mockUrl: string;
  regNo: string;
}

const certificates: Certificate[] = [
  { id: 'trade-license', name: 'Trade License', desc: 'Official government license authorizing corporate business operations.', status: 'Active', mockUrl: '/assets/docs/trade-license-mock.pdf', regNo: 'SSR-2026-84920' },
  { id: 'tin', name: 'TIN Certificate', desc: 'Taxpayer Identification Number registration issued by the NBR.', status: 'Active', mockUrl: '/assets/docs/tin-mock.pdf', regNo: 'SSR-2026-10492' },
  { id: 'bin-vat', name: 'BIN/VAT Registration', desc: 'Business Identification Number for value added tax compliance.', status: 'Active', mockUrl: '/assets/docs/bin-mock.pdf', regNo: 'SSR-2026-95821' },
  { id: 'rjsc', name: 'RJSC Certificate', desc: 'Certificate of incorporation registered under the Registrar of Joint Stock Companies.', status: 'Active', mockUrl: '/assets/docs/rjsc-mock.pdf', regNo: 'SSR-2026-48301' },
  { id: 'membership', name: 'Membership Certificates', desc: 'Official trade association and chambers of commerce certificates.', status: 'Active', mockUrl: '/assets/docs/membership-mock.pdf', regNo: 'SSR-2026-72948' },
  { id: 'iso', name: 'ISO Certificate', desc: 'International Organization for Standardization compliance quality certificate.', status: 'Upcoming', mockUrl: '#', regNo: 'SSR-2026-38491' },
];

export default function CertificationsList() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleDownload = (cert: Certificate) => {
    if (cert.status === 'Upcoming') return;
    // Create a mock download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPpNDcKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nIC9QYWdlcyAyIDAgUiA+PiBlbmRvYmoKMiAwIG9iagogIDw8IC9UeXBlIC9QYWdlcyAvS2lkcyBbIDMgMCBSIF0gL0NvdW50IDEgPj4gZW5kb2JqCjMgMCBSIHR5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWyAwIDAgNTk1IDg0MiBdID4+IGVuZG9iag==';
    link.download = `${cert.name.toLowerCase().replace(/[\s/]+/g, '_')}_certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative overflow-hidden bg-card/40 backdrop-blur-md border border-border/80 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${cert.status === 'Active'
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : 'bg-amber-500/10 text-amber-500'
                  }`}>
                  {cert.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {cert.desc}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              {cert.status !== 'Upcoming' ? (
                <button
                  onClick={() => handleDownload(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-200"
                  title="Download PDF"
                >
                  <Download className="h-3.5 w-3.5" /> Download PDF
                </button>
              ) : (
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold py-2 px-3 rounded-lg bg-muted text-muted-foreground/50 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / PDF Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-card rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> {selectedCert.name} Preview
              </h4>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 bg-muted p-8 overflow-y-auto flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-full max-w-2xl bg-white aspect-[1/1.414] shadow-xl p-12 flex flex-col justify-between border-8 border-neutral-200 text-black relative">
                {/* Decorative border */}
                <div className="absolute inset-4 border-2 border-neutral-300 pointer-events-none" />
                <div className="text-center space-y-4 relative z-10">
                  <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono">Government Registered Entity</span>
                  <h2 className="text-2xl font-serif font-bold text-neutral-800">S S RUMA INTERNATIONAL LTD</h2>
                  <p className="text-xs text-neutral-500">2nd floor, Jaman Tower, Dhaka-1000, Bangladesh</p>
                  <div className="h-px bg-neutral-300 w-1/3 mx-auto my-6" />
                  <h3 className="text-xl font-bold tracking-wide text-neutral-700">{selectedCert.name.toUpperCase()}</h3>
                </div>

                <div className="my-8 space-y-3 text-xs text-neutral-600 pl-8 relative z-10">
                  <p><strong>Registration No:</strong> {selectedCert.regNo}</p>
                  <p><strong>Issued Authority:</strong> Government of the People&apos;s Republic of Bangladesh</p>
                  <p><strong>Status:</strong> Active / Verified Compliance</p>
                  <p><strong>Verification Date:</strong> August 4, 2026</p>
                </div>

                <div className="flex justify-between items-end border-t border-neutral-200 pt-8 relative z-10">
                  <div className="text-[9px] text-neutral-400 font-mono">Secure Hash: 8NPJc9Fu0V4mYA7B</div>
                  <div className="text-center">
                    <div className="w-24 h-8 border-b border-neutral-400 mb-1" />
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest">Authorized Sign</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border bg-card flex justify-end gap-3">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-sm rounded-lg bg-muted hover:bg-neutral-800 text-muted-foreground hover:text-white transition-all duration-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(selectedCert);
                  setSelectedCert(null);
                }}
                className="px-4 py-2 text-sm rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2 transition-all duration-200"
              >
                <Download className="h-4 w-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
