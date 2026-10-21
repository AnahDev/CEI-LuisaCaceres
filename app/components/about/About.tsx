import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import Reveal from '../ui/Reveal';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  iconColor?: string;
  bgColor?: string;
}

export interface StatItem {
  value: string;
  label: ReactNode;
}

export interface AboutProps {
  badge?: string;
  title: ReactNode;
  paragraphs: string[];
  features?: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
  stat?: StatItem;
  reverse?: boolean;
}

export default function About({
  badge,
  title,
  paragraphs,
  features,
  imageSrc,
  imageAlt,
  stat,
  reverse = false,
}: AboutProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal
          variant={reverse ? 'right' : 'left'}
          className={reverse ? 'lg:order-2' : 'lg:order-1'}
        >
          <div className="flex flex-col gap-7">
            {badge && (
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary-container px-4 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-on-secondary-container">
                <Star className="size-4 fill-current" aria-hidden="true" />
                {badge}
              </span>
            )}

            <h2 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-balance text-on-surface md:text-5xl">
              {title}
            </h2>

            <div className="space-y-5 text-base font-medium leading-relaxed text-on-surface-variant md:text-lg">
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {features && features.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-3">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="card-clay flex items-center gap-3 px-4 py-3"
                      style={{ borderRadius: '1rem' }}
                    >
                      <span
                        className={`grid size-11 place-items-center rounded-xl ${
                          feature.bgColor ?? 'bg-primary-container'
                        } ${feature.iconColor ?? 'text-primary'}`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-base font-extrabold text-on-surface">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal
          variant={reverse ? 'left' : 'right'}
          delay={120}
          className={reverse ? 'lg:order-1' : 'lg:order-2'}
        >
          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rotate-3 rounded-[2.25rem] bg-sun-container shadow-[0_18px_40px_-30px_rgba(62,42,0,0.5)]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-5 -z-10 size-24 rounded-full border-[3px] border-dashed border-tertiary/35"
            />

            <div className="group relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-[2rem] border-[6px] border-surface-container-lowest bg-surface-container-high shadow-[0_30px_60px_-34px_rgba(31,48,56,0.55)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {stat && (
              <div className="absolute -bottom-6 -left-3 z-10 flex -rotate-3 items-center gap-3 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest px-5 py-4 shadow-[0_18px_36px_-22px_rgba(31,48,56,0.5)] sm:-left-6">
                <span className="grid size-11 place-items-center rounded-xl bg-sun-container text-on-sun-container">
                  <Sparkles className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-display text-3xl font-extrabold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant">
                    {stat.label}
                  </span>
                </span>
              </div>
            )}

            <div className="absolute -right-2 top-5 z-10 hidden rotate-6 items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest px-3.5 py-2 text-xs font-extrabold text-on-surface shadow-sm sm:flex">
              <Sparkles className="size-4 text-tertiary" aria-hidden="true" />
              Aprender jugando
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
