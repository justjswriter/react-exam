import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchOperations } from "../../slices/operationSlice";

const OperationTable = () => {
  const dispatch = useAppDispatch();
  const operations = useAppSelector((state) => state.operations.data);
  useEffect(() => {
    dispatch(fetchOperations());
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td>Тип операции</td>
          <td>Наименование продукта</td>
          <td>Количества продукта</td>
          <td>Цена продукта</td>
          <td>Всего</td>
          <td>Дата операции</td>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  );
};

export default OperationTable;
