import { useLocalStorage } from 'lib/hooks/useLocalStorage';
import { useCallback } from 'react';

export interface RecentlyViewedTopic {
  topicName: string;
  clusterName: string;
  viewedAt: number;
}

const MAX_RECENTLY_VIEWED = 5;

export const useRecentlyViewedTopics = () => {
  const [recentTopics, setRecentTopics] = useLocalStorage<
    RecentlyViewedTopic[]
  >('recentlyViewedTopics', []);

  const addRecentlyViewedTopic = useCallback(
    (clusterName: string, topicName: string) => {
      setRecentTopics((prev) => {
        const filtered = prev.filter(
          (t) => !(t.topicName === topicName && t.clusterName === clusterName)
        );

        const newEntry: RecentlyViewedTopic = {
          topicName,
          clusterName,
          viewedAt: Date.now(),
        };

        return [newEntry, ...filtered].slice(0, MAX_RECENTLY_VIEWED);
      });
    },
    [setRecentTopics]
  );

  return { recentTopics, addRecentlyViewedTopic };
};
