"use client";

import { useEffect, useState } from "react";

const GITHUB_USERNAME = "22devpatel007-coder";

export default function useGithubContributions() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    weeks: [],
    totalContributions: 0,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        if (!res.ok) throw new Error("Failed to fetch contributions");
        const data = await res.json();

        // data.contributions is a flat array of { date, count, level }
        // group into weeks (columns) like GitHub's graph
        const days = data.contributions || [];
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
          weeks.push(days.slice(i, i + 7));
        }

        const totalContributions = days.reduce((sum, d) => sum + d.count, 0);

        if (!cancelled) {
          setState({ loading: false, error: null, weeks, totalContributions });
        }
      } catch (err) {
        if (!cancelled) {
          setState((prev) => ({ ...prev, loading: false, error: err.message }));
        }
      }
    }

    fetchContributions();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}