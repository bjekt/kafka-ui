import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding: 8px 16px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.default.color.normal};
  margin-bottom: 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TopicLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 13px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.tag.backgroundColor.green};
  color: ${({ theme }) => theme.default.color.normal};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.tag.backgroundColor.blue};
  }
`;

export const ClusterLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.default.color.normal};
  opacity: 0.6;
`;