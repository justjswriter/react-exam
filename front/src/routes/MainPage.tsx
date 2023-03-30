import StockInfo from "../components/StockInfo/StockInfo";
import StockInfoBarChart from "../components/StockInfoBarChart/StockInfoBarChart";
import StockInfoLineChart from "../components/StockInfoLineChart/StockInfoLineChart";

const MainPage = () => {
  return (
    <div className="page">
      <p className="page-name">Главная страница</p>
      <StockInfo />
      <div className="chart-container">
        <StockInfoBarChart />
        <StockInfoLineChart />
      </div>
    </div>
  );
};

export default MainPage;
