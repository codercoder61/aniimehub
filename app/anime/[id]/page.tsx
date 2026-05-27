'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpisodePlayer from '@/components/EpisodePlayer';
import { useAuth } from '@/lib/auth-context';
import { Heart, Flag, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useParams } from 'next/navigation';

export interface Episode {
  id: string;
  animeId: number;
}

export interface Anime {
  id: string;
  title: string;
  poster: string;
  description: string;
  genres: string;
  airDate: string;
  duration: string;
  season: string;
  trailer: string;
  episodes: number;
}

export default function AnimeDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [anime, setAnime] = useState<Anime | null>(null);
  const [animeEpisodes, setAnimeEpisodes] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const [animeLoading, setAnimeLoading] = useState(true);
  const [episodesLoading, setEpisodesLoading] = useState(true);
  const [playerLoading, setPlayerLoading] = useState(false);

  const [isFavorited, setIsFavorited] = useState(false);

  const {
    isFavorited: isAuthFavorited,
    toggleFavorite,
    addToWatchHistory,
    isAuthenticated,
  } = useAuth();

  const sendEmail = async () => {
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `User reported anime with id=${id}`,
      }),
    });

    alert('Anime reported');
  };

  // Fetch anime details
  useEffect(() => {
    if (!id) return;

    const fetchAnime = async () => {
      try {
        setAnimeLoading(true);

        const res = await axios.get(
          `https://pneuexpress.online/anime/api.php?action=anime&id=${id}`
        );

        setAnime(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setAnimeLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  // Fetch episodes
  useEffect(() => {
    if (!id) return;

    const fetchAnimeEpisodes = async () => {
      try {
        setEpisodesLoading(true);

        const res = await axios.get(
          `https://pneuexpress.online/anime/api.php?action=episodes&animeId=${id}`
        );

        setAnimeEpisodes(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setEpisodesLoading(false);
      }
    };

    fetchAnimeEpisodes();
  }, [id]);

  // Set first episode
  useEffect(() => {
    if (anime && animeEpisodes.length > 0) {
      setSelectedEpisode(animeEpisodes[0]);
      setIsFavorited(isAuthFavorited(anime.id));
    }
  }, [anime, animeEpisodes, isAuthFavorited]);

  // Watch history
  useEffect(() => {
    if (selectedEpisode && anime && isAuthenticated) {
      addToWatchHistory(anime.id, selectedEpisode.id, 0);
    }
  }, [selectedEpisode, anime, isAuthenticated, addToWatchHistory]);

  // Main loader
  if (animeLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Anime not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main style={{ marginTop: '50px' }} className="flex-1">
        <div className="container mx-auto px-4">
          <div
            style={{ direction: 'rtl' }}
            className="flex flex-col md:flex-row gap-8 mb-12"
          >
            {/* Poster */}
            <div>
              <img
                src={`https://pneuexpress.online/anime/image.php?url=${anime.poster}`}
                alt={anime.title}
                className="w-48 h-72 object-cover rounded-lg border-4 border-card shadow-2xl"
              />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {anime.title}
              </h1>

              <p className="text-lg text-foreground leading-relaxed max-w-2xl">
                {anime.description}
              </p>

              <p className="text-lg text-foreground">
                {anime.airDate}
              </p>

              <p className="text-lg text-foreground">
                {anime.duration}
              </p>

              <p className="text-lg text-foreground">
                {anime.season}
              </p>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {anime.genres.split(',').map((g) => (
                  <span
                    key={g}
                    className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {g.trim()}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={anime.trailer}
                  target="_blank"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  العرض التشويقي
                </a>

                <button
                  onClick={() => {
                    toggleFavorite(anime.id);
                    setIsFavorited(!isFavorited);
                  }}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors border ${
                    isFavorited
                      ? 'bg-accent/20 border-accent text-accent'
                      : 'border-border/50 text-foreground hover:border-primary/50'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorited ? 'fill-current' : ''
                    }`}
                  />

                  {isFavorited
                    ? 'مفضل'
                    : 'أضف إلى قائمة الأنمي المفضلة'}
                </button>

                <button
                  onClick={sendEmail}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors border border-border/50 text-foreground hover:border-primary/50"
                >
                  <Flag className="w-5 h-5 fill-current" />
                  أبلغ عن عدم توفر الخوادم
                </button>
              </div>
            </div>
          </div>

          {/* Player */}
          <section id="player" className="mb-16">
            {playerLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : (
              selectedEpisode && (
                <EpisodePlayer episode={selectedEpisode} />
              )
            )}
          </section>

          {/* Episodes */}
          <section dir="rtl" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              ({anime.episodes})
            </h2>

            {episodesLoading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {animeEpisodes.map((episode, index) => (
                  <button
                    key={episode.id}
                    onClick={() => {
                      setPlayerLoading(true);

                      document
                        .getElementById('player')
                        ?.scrollIntoView({
                          behavior: 'smooth',
                        });

                      setSelectedEpisode(episode);

                      // fake delay until player loads
                      setTimeout(() => {
                        setPlayerLoading(false);
                      }, 800);
                    }}
                    className={`p-4 rounded-lg border-2 ${
                      selectedEpisode?.id === episode.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border/50 bg-card hover:border-primary/50'
                    }`}
                  >
                    حلقة {index + 1}
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
