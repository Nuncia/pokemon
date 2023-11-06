import { Chart as ChartJS, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

// Registro de componentes para el gráfico
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    LineController,
    CategoryScale,
    Tooltip,
    Legend
);

const Grafico = ({data}) => {
    let datos = {};
    
    const disponerDatos = () => {
        const values = data.map((stat) => stat.base_stat);
        const labels = data.map((stat) => stat.stat.name);
        
        datos = {
            labels: labels,
            datasets: [
                {
                    label: 'Habilidades',
                    data: values,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    borderWidth: 2, 
                }
            ]
        }
        console.log(datos)
    }

    useEffect(() => {
        disponerDatos();
        console.log(data)
   }, [data])
    
  return (
    <Bar data={data}/>
  )
}

Grafico.propTypes = {
    data: PropTypes.array,
};

export default Grafico