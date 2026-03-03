import React from 'react';
import { useRecentlyViewedTopics } from 'lib/hooks/useRecentlyViewedTopics';
import { clusterTopicPath } from 'lib/paths';

import * as S from './RecentlyViewedTopics.styled';

const RecentlyViewedTopics: React.FC = () => {
  const { recentTopics } = useRecentlyViewedTopics();

  if (recentTopics.length === 0) {
    return null;
  }

  return (
    <S.Section>
      <S.Title>Recently Viewed Topics</S.Title>
      <S.List>
        {recentTopics.map((topic) => (
          <li key={`${topic.clusterName}-${topic.topicName}`}> 
            <S.TopicLink
              to={clusterTopicPath(topic.clusterName, topic.topicName)}
            >
              {topic.topicName}
              <S.ClusterLabel>({topic.clusterName})</S.ClusterLabel>
            </S.TopicLink>
          </li>
        ))}
      </S.List>
    </S.Section>
  );
};

export default RecentlyViewedTopics;