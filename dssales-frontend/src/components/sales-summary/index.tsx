import React from 'react';
import './styles.css';
import SalesSummaryCard from './sales-summary-card';
import AvatarIcon from '../../assets/avatar-icon.svg';
import BarChartIcon from '../../assets/bar-chart-icon.svg';
import DoneIcon from '../../assets/done-icon.svg';
import SyncIcon from '../../assets/sync-icon.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Média" icon={DoneIcon} />
      <SalesSummaryCard value={630} label="Quantidade" icon={SyncIcon} />
      <SalesSummaryCard value={130} label="Mínima" icon={BarChartIcon} />
      <SalesSummaryCard value={230} label="Máxima" icon={AvatarIcon} />
    </div>
  );
}

export default SalesSummary;
