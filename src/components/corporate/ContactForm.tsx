"use client";

import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const Swal = (await import('sweetalert2')).default;

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',
        confirmButtonColor: 'var(--color-primary, #3b82f6)',
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      Swal.fire({
        title: 'Thank You!',
        text: 'Your inquiry has been submitted. Our corporate team will reach out to you shortly.',
        icon: 'success',
        confirmButtonColor: 'var(--color-primary, #3b82f6)',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      Swal.fire({
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: 'var(--color-primary, #3b82f6)',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-card/40 backdrop-blur-md border border-border/80 p-6 md:p-8 rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-background border border-border/80 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="form-email"
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-background border border-border/80 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="form-subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Subject
        </label>
        <input
          id="form-subject"
          type="text"
          placeholder="Business Proposal / Service Inquiry"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-background border border-border/80 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="form-message"
          required
          rows={5}
          placeholder="Describe your requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-background border border-border/80 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-primary hover:bg-primary/95 text-primary-foreground rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
}
