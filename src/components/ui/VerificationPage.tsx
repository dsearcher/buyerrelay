'use client';
import { Button, Card, CardBody } from '@heroui/react';

export function VerificationPage() {
  return (
    <main className="min-h-screen bg-bg-primary p-8">
      <div className="mx-auto max-w-[1280px] space-y-8">
        {/* Font verification */}
        <h1 className="font-heading text-[56px] font-[800] leading-[1.1] tracking-[-0.03em] text-text-primary">
          BuyerRelay <span className="gradient-text">Foundation</span>
        </h1>
        <p className="font-body text-[18px] leading-[1.6] text-text-secondary">
          This page verifies all foundation elements are working correctly.
        </p>

        {/* Brand color verification */}
        <div className="flex flex-wrap gap-4">
          <div className="h-16 w-16 rounded-[--radius-card] bg-primary" title="primary" />
          <div className="h-16 w-16 rounded-[--radius-card] bg-primary-light" title="primary-light" />
          <div className="h-16 w-16 rounded-[--radius-card] bg-accent" title="accent" />
          <div className="h-16 w-16 rounded-[--radius-card] bg-success" title="success" />
          <div className="h-16 w-16 rounded-[--radius-card] bg-bg-dark" title="bg-dark" />
        </div>

        {/* Shadow verification */}
        <div className="flex flex-wrap gap-8">
          <div className="h-24 w-24 rounded-[--radius-card] bg-bg-elevated shadow-[--shadow-brand-sm]" />
          <div className="h-24 w-24 rounded-[--radius-card] bg-bg-elevated shadow-[--shadow-brand-md]" />
          <div className="h-24 w-24 rounded-[--radius-card] bg-bg-elevated shadow-[--shadow-brand-lg]" />
        </div>

        {/* HeroUI component verification */}
        <div className="flex gap-4">
          <Button color="primary" radius="full" className="bg-primary">Book a Demo</Button>
          <Button variant="bordered" radius="full">See It In Action</Button>
        </div>

        {/* Card verification */}
        <Card className="rounded-[--radius-card] p-8 shadow-[--shadow-brand-md]">
          <CardBody>
            <h2 className="font-heading text-[28px] font-[700] tracking-[-0.01em]">HeroUI Card</h2>
            <p className="text-text-secondary">Card with brand radius (16px) and blue-tinted shadow.</p>
          </CardBody>
        </Card>

        {/* Responsive test markers */}
        <div className="text-text-muted text-sm">
          <span className="md:hidden">Viewport: Mobile (&lt;768px)</span>
          <span className="hidden md:inline lg:hidden">Viewport: Tablet (768-1023px)</span>
          <span className="hidden lg:inline">Viewport: Desktop (1024px+)</span>
        </div>
      </div>
    </main>
  );
}
