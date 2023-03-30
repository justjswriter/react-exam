import { useAppSelector } from "../../hooks";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const StockInfoLineChart = () =>{
    const operData = useAppSelector((state) => state.operations.data);
    const myChart = operData[0] ? (
        <Line data={{
            labels: operData.map((oper) => new Date(oper.date).toLocaleDateString()),
            datasets: [{
                label: "Покупки",
                data: operData.map((oper) => {
                    if(oper.type === "buy"){
                        return oper.product_amount
                    }
                }),
                backgroundColor: "#112D4E",
                fill: true,
            },
            {
                label: "Продажа",
                data: operData.map((oper) => {
                    if(oper.type === "sell"){
                        return oper.product_amount
                    }
                }),
                backgroundColor: "red",
                fill: true,
            }
            ]
        }}></Line>
    ) : null;
    return(
        <div>
            <h3>График покупки/продажи</h3>
            <h2>{myChart}</h2>
        </div>
    )
}

export default StockInfoLineChart