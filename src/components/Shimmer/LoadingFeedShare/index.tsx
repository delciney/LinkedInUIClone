import React from "react";

import { Container } from "./styles";
import Panel from "../../Panel";
import Skeleton from "../../Skeleton";

const LoadingFeedShare: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="row-skeleton"></Skeleton>
        <Skeleton className="row-skeleton"></Skeleton>
      </Panel>
    </Container>
  );
};

export default LoadingFeedShare;
