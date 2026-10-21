import { BookOpen, Mail, Palette } from "lucide-react";
import EfemerideCard from "../components/cartelera/EfemerideCard";
import PostCard from "../components/cartelera/PostCard";
import QuickLinkCard from "../components/cartelera/QuickLinkCard";
import SchoolCalendar from "../components/cartelera/SchoolCalendar";
import UrgentBanner from "../components/cartelera/UrgentBanner";
import { addDaysIso, eventCalendarDate, monthQueryRange, splitIsoDate, todayCalendarDate } from "@/lib/date";
import { listPublishedEvents } from "@/lib/events";
import { listPublishedPosts } from "@/lib/posts";
import type { EventApiResponse } from "@/types/event";
import type { PostApiResponse } from "@/types/post";

const ENLACES = [
    { icon: Mail, title: "Correo Institucional", href: "#", iconColor: "text-tertiary", bgColor: "bg-tertiary-container/20" },
    { icon: BookOpen, title: "Libros Didácticos", href: "/material/libros-didacticos", iconColor: "text-primary", bgColor: "bg-primary-container/20" },
    { icon: Palette, title: "Para Pintar", href: "/material/para-pintar", iconColor: "text-tertiary", bgColor: "bg-tertiary-container/20" },
];

const EPHEMERIS_LIMIT = 3;

async function fetchPublishedPosts(): Promise<PostApiResponse[]> {
    try {
        const page = await listPublishedPosts(0, 6);
        return page.content;
    } catch {
        return [];
    }
}

async function fetchPublishedEvents(
    params: Parameters<typeof listPublishedEvents>[0]
): Promise<EventApiResponse[]> {
    try {
        return await listPublishedEvents(params);
    } catch {
        return [];
    }
}

export default async function CarteleraPage() {
    const today = todayCalendarDate();
    const year = Number(today.slice(0, 4));
    const month = Number(today.slice(5, 7)) - 1;
    const monthRange = monthQueryRange(year, month);

    const [posts, monthEvents, ephemerides, featuredEvents] = await Promise.all([
        fetchPublishedPosts(),
        fetchPublishedEvents(monthRange),
        fetchPublishedEvents({
            from: `${year}-01-01T00:00:00Z`,
            to: `${year}-12-31T23:59:59Z`,
            kind: "EPHEMERIS",
        }),
        fetchPublishedEvents({
            from: `${today}T00:00:00Z`,
            to: `${addDaysIso(today, 120)}T23:59:59Z`,
            featured: true,
        }),
    ]);

    const ephemerisWithImage = ephemerides.filter((event) => Boolean(event.imageUrl));
    const now = new Date().toISOString();
    const upcomingEphemerides = ephemerisWithImage.filter((event) => event.endsAt >= now);
    const visibleEphemerides = (upcomingEphemerides.length > 0 ? upcomingEphemerides : ephemerisWithImage)
        .slice(0, EPHEMERIS_LIMIT);

    const urgentEvent = featuredEvents[0];

    return (
        <main className="pt-24 pb-24 font-['Plus_Jakarta_Sans']">
            {urgentEvent && (
                <UrgentBanner
                    notice={{
                        active: true,
                        text: urgentEvent.description ?? urgentEvent.title,
                    }}
                />
            )}

            <div className="max-w-7xl mx-auto px-6">
                <div className="mt-12 mb-16 text-center flex flex-col items-center gap-4">
                    <div className="inline-block bg-secondary-container/50 text-on-secondary-container px-4 py-1.5 rounded-full text-sm font-bold tracking-wide w-max border border-secondary-container">
                        Publicaciones
                    </div>
                    <h1 className="font-extrabold text-4xl md:text-5xl text-primary tracking-tight">
                        Cartelera Informativa
                    </h1>
                    <p className="text-on-surface-variant text-lg max-w-2xl">
                        Mantente al día con las novedades, fechas importantes y recursos de nuestra institución.
                    </p>
                </div>

                {posts.length > 0 && (
                    <section className="mb-20">
                        <div className="mb-6 flex items-end justify-between gap-4">
                            <h2 className="font-extrabold text-2xl md:text-3xl text-on-surface">
                                Últimas publicaciones
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </section>
                )}

                <div className="mb-20">
                    <SchoolCalendar initialEvents={monthEvents} />
                </div>

                {visibleEphemerides.length > 0 && (
                    <section className="mb-20">
                        <h2 className="font-extrabold text-2xl md:text-3xl text-on-surface mb-6">Efemérides</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {visibleEphemerides.map((event) => {
                                const { day, month: monthLabel } = splitIsoDate(eventCalendarDate(event));
                                return (
                                    <EfemerideCard
                                        key={event.id}
                                        image={event.imageUrl ?? ""}
                                        day={day}
                                        month={monthLabel}
                                        title={event.title}
                                        description={event.description ?? ""}
                                    />
                                );
                            })}
                        </div>
                    </section>
                )}

                <section>
                    <h2 className="font-extrabold text-2xl md:text-3xl text-on-surface mb-6">Enlaces de Interés</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {ENLACES.map((enlace, idx) => (
                            <QuickLinkCard key={idx} {...enlace} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
