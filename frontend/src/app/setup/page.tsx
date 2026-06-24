"use client";

import { Button, Input, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui";
import { FormEvent, useState, useRef } from "react";
import { SetupSchema } from "@/validation";
import { toast } from "react-toastify";
import { useSetupProfile } from "@/hooks";

export default function SetupPage() {
  const { mutate, isPending, error } = useSetupProfile();

  const formRef = useRef<HTMLFormElement>(null);

  const [step, setStep] = useState<number>(1);
  const [showTerms, setShowTerms] = useState<boolean>(false);
  const totalSteps: number = 3;

  const handleNextStep = () => {
    const root = formRef.current;
    if (!root) return;

    const inputs = root.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      `[data-step="${step}"] input, [data-step="${step}"] select`
    );

    let ok = true;

    inputs.forEach((el) => {
      if (el.checkValidity()) return;
      el.reportValidity();
      ok = false;
    });

    if (ok) setStep((s) => (s < totalSteps ? s + 1 : s));
  };

  const handlePrevStep = () => step > 1 && setStep((s) => s - 1);

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const raw = Object.fromEntries(new FormData(e.currentTarget));

  const validate = SetupSchema.safeParse({
    ...raw,
    agreedToTermsAndConditions: raw.agreedToTermsAndConditions === "on",
  });

  if (!validate.success) {
    toast.error(validate.error.issues[0].message);
    return;
  }
  mutate(validate.data);
};

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 py-12 select-none">
      <div className="w-full max-w-xl bg-card border border-border/80 rounded-2xl p-8 shadow-xl shadow-primary/5 transition-all">
        
        {/* Header Information */}
        <div className="mb-8 text-center sm:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-primary block mb-1">
            Account Configuration
          </span>
          <h1 className="text-2xl font-black text-foreground tracking-tight mb-2">Complete Your Profile</h1>
          <p className="text-sm text-muted-foreground">Let's get to know you better to personalize your study workspace.</p>
        </div>

        {/* Multi-Step Node Progress Bar Tracker */}
        <div className="relative flex items-center justify-between w-full mb-10 px-4">
          {/* Background Connecting Line Segments */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-300 ease-out" 
            style={{ 
              width: step === 1 ? "0%" : step === 2 ? "50%" : "100%" 
            }}
          />

          {/* Step 1 Node */}
          <div className="relative z-10 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
              step >= 1 ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/30" : "bg-card text-muted-foreground border-muted"
            }`}>
              1
            </div>
            <span className={`text-[11px] font-bold mt-1.5 transition-colors duration-300 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>Personal</span>
          </div>

          {/* Step 2 Node */}
          <div className="relative z-10 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
              step >= 2 ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/30" : "bg-card text-muted-foreground border-muted"
            }`}>
              2
            </div>
            <span className={`text-[11px] font-bold mt-1.5 transition-colors duration-300 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>Details</span>
          </div>

          {/* Step 3 Node */}
          <div className="relative z-10 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
              step >= 3 ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/30" : "bg-card text-muted-foreground border-muted"
            }`}>
              3
            </div>
            <span className={`text-[11px] font-bold mt-1.5 transition-colors duration-300 ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>Preferences</span>
          </div>
        </div>

        {/* Global Hook Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex gap-3 items-center text-destructive text-sm animate-fade-in">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-medium">{error.message || "An error occurred while saving your profile. Please check your network and try again."}</span>
          </div>
        )}

        <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
          <fieldset disabled={isPending} className="space-y-6 disabled:opacity-85">
            {/* Section 1: Personal Info */}
            <div data-step="1" className={`space-y-4 animate-fade-in ${step === 1 ? 'block' : 'hidden'}`}>
              <div className="border-b border-border/60 pb-2 mb-4">
                <h2 className="text-lg font-bold tracking-tight">Personal Information</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">First Name</label>
                  <Input id="firstName" type="text" name="firstName" placeholder="John" required className="h-10 border-border/80 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Last Name</label>
                  <Input id="lastName" type="text" name="lastName" placeholder="Doe" required className="h-10 border-border/80 focus:border-primary" />
                </div>
              </div>
            </div>

            {/* Section 2: Personal Details */}
            <div data-step="2" className={`space-y-4 animate-fade-in ${step === 2 ? 'block' : 'hidden'}`}>
              <div className="border-b border-border/60 pb-2 mb-4">
                <h2 className="text-lg font-bold tracking-tight">Demographics</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Date of Birth</label>
                  <Input id="dateOfBirth" type="date" name="dateOfBirth" required className="h-10 border-border/80 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Gender</label>
                  <select id="gender" name="gender" required className="w-full h-10 px-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm cursor-pointer">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Learning Goals */}
            <div data-step="3" className={`space-y-4 animate-fade-in ${step === 3 ? 'block' : 'hidden'}`}>
              <div className="border-b border-border/60 pb-2 mb-4">
                <h2 className="text-lg font-bold tracking-tight">Study Preferences</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">What's your main study goal?</label>
                  <select id="goal" name="goal" required className="w-full h-10 px-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm cursor-pointer">
                    <option value="">Select a goal</option>
                    <option value="exam-prep">Exam Preparation</option>
                    <option value="skill-development">Skill Development</option>
                    <option value="hobby">Hobby Learning</option>
                    <option value="professional">Professional Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Terms Acceptance Element */}
                <div className="bg-muted/40 border border-border/60 rounded-xl p-4 flex items-start gap-3 mt-4">
                  <input type="checkbox" name="agreedToTermsAndConditions" id="agreedToTermsAndConditions" required className="mt-1 rounded border-border text-primary focus:ring-primary cursor-pointer w-4 h-4 accent-primary" />
                  <label htmlFor="agreedToTermsAndConditions" className="text-sm cursor-pointer text-muted-foreground leading-normal">
                    I agree to the <button type="button" onClick={() => setShowTerms(true)} className="text-primary hover:underline font-bold">Terms and Privacy Policy</button> before finishing configuration.
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Multi-step Footer Action Nav Controls */}
          <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handlePrevStep}
              disabled={isPending}
              className={`h-10 px-5 border-border ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              Back
            </Button>

            {step < totalSteps ? (
              <Button 
                type="button" 
                onClick={handleNextStep}
                disabled={isPending}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/10 h-10 px-6 font-semibold"
              >
                Continue
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={isPending}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 h-10 px-6 font-semibold flex items-center justify-center gap-2 min-w-[150px]"
              >
                {isPending ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Saving...
                  </>
                ) : (
                  "Complete Setup"
                )}
              </Button>
            )}
          </div>
        </form>

        {/* Terms and Conditions Modal */}
        <Dialog open={showTerms} onOpenChange={setShowTerms}>
          <DialogContent className="max-w-xl max-h-[75vh] overflow-y-auto rounded-2xl border-border/60">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold tracking-tight">Terms and Privacy Policy</DialogTitle>
              <DialogDescription>Please review our basic usage protocols.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed py-2">
              <p>1. By using StudyFlow, you agree to comply with our localized platform terms.</p>
              <p>2. We value data sovereignty and will protect your data metrics with industry standards.</p>
              <p>3. Do not exploit or systematically harvest our curated workspace tools.</p>
              <p>4. This is an active production ecosystem, please keep backup points for critical educational assets.</p>
            </div>
            <div className="pt-4 border-t border-border/60 flex justify-end">
              <Button onClick={() => setShowTerms(false)} className="bg-primary text-primary-foreground hover:bg-primary/90 px-5">Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}