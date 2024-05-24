import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PierChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PierChartCard name="Lojas" labels={['Uberlandia', 'Araguari']} series={[40, 60]} />
          <PierChartCard name="Pagamento" labels={['Uberlandia', 'Resende']} series={[50, 50]} />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
