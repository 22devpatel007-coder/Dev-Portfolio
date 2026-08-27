"use client";

import { useEffect, useState } from "react";

const GITHUB_USERNAME = "22devpatel007-coder";

export default function useGithubStats() {
  const [stats, setStats] = useState({
    loading: true,
    error: null,
    publicRepos: null,
    followers: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        if (!res.ok) throw new Error("GitHub API error");
        const data = await res.json();

        if (!cancelled) {
          setStats({
            loading: false,
            error: null,
            publicRepos: data.public_repos,
            followers: data.followers,
          });
        }
      } catch (err) {
        if (!cancelled) {
          setStats((prev) => ({ ...prev, loading: false, error: err.message }));
        }
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
}