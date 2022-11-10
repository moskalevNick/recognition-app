import styles from './CardContainer.module.css';
import React, { useState } from 'react';
import { Card } from '../Card/Card';
import classNames from 'classnames';
import { ClientType } from '../../modules/TodayModule/TodayModule';
import uuid from 'react-uuid';

type CardContainerType = {
  clients: ClientType[];
  withLongNavbar?: boolean;
  withShortNavbar?: boolean;
};

export const CardContainer: React.FC<CardContainerType> = ({
  clients,
  withLongNavbar = false,
  withShortNavbar = false,
}) => {
  const containerClasses = classNames(
    styles.wrapper,
    withShortNavbar && styles.wrapperMinus190,
    withLongNavbar && styles.wrapperMinus278,
  );
  const [showInfo, setShowInfo] = useState<null | { id: string; x: number; y: number }>(null);

  return (
    <div className={containerClasses} onClick={() => setShowInfo(null)}>
      {clients.map((client) => (
        <Card
          client={client}
          key={uuid()}
          clients={clients}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
      ))}
    </div>
  );
};
