import React from 'react';
import { FaDownload, FaEdit } from 'react-icons/fa';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function Admin() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['Nov 2022', 'Dic 2022', 'Ene 2023', 'Feb 2023', 'Mar 2023'];

  const data = {
    labels,
    datasets: [
      {
        label: 'JobReady',
        data: [0, 23, 30, 47, 120],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Usuarios Totales',
        data: [10, 20, 30, 120, 220],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <main className="bg-white my-14 mx-80 min-h-[100vh]">
      <h1 className="text-black text-4xl font-semibold">Administración!</h1>
      <section>Bienvenido al panel de administración</section>
      <br />
      {/* create section with stats associated to users registered*/}
      <section className="text-black my-3">
        <h2 className="text-xl font-semibold my-2">Estadísticas</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col bg-yellow-200 p-4 rounded-lg">
            <span className="text-gray-500">Usuarios</span>
            <span className="text-2xl font-semibold">120</span>
          </div>
          <div className="flex flex-col bg-yellow-200 p-4 rounded-lg">
            <span className="text-gray-500">JobReady</span>
            <span className="text-2xl font-semibold">47</span>
          </div>
          <div className="flex flex-col bg-green-200 p-4 rounded-lg">
            <span className="text-gray-500">Habilidad 1°</span>
            <span className="text-2xl font-semibold">Js</span>
          </div>
          <div className="flex flex-col bg-green-200 p-4 rounded-lg">
            <span className="text-gray-500">Habilidad 2°</span>
            <span className="text-2xl font-semibold">Node</span>
          </div>
          <div className="flex flex-col bg-green-200 p-4 rounded-lg">
            <span className="text-gray-500">Habilidad 3°</span>
            <span className="text-2xl font-semibold">React</span>
          </div>
          <div className="flex flex-col bg-green-200 p-4 rounded-lg">
            <span className="text-gray-500">Habilidad 4°</span>
            <span className="text-2xl font-semibold">Docker</span>
          </div>
          <div className="flex flex-col bg-green-200 p-4 rounded-lg">
            <span className="text-gray-500">Habilidad 5°</span>
            <span className="text-2xl font-semibold">Rust</span>
          </div>
        </div>
        <div>
          <Bar options={options} data={data} />
        </div>
      </section>
      <hr />
      <section className="text-black">
        <div className="my-3">
          <h2 className="text-xl font-semibold my-2">Reportes</h2>
          <p>
            Listado completo de todos los postulantes registrados en la
            plataforma.
          </p>
          <button
            type="button"
            className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaDownload className="w-5 h-5 mr-2 -ml-1" />
            Listado de Perfiles
          </button>
        </div>
        <hr />
        <div className="my-3">
          <h2 className="text-xl font-semibold my-2">Mantenedores</h2>
          <button
            type="button"
            className="w-100 text-white mt-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            disabled
          >
            <FaEdit className="w-5 h-5 mr-2 -ml-1" />
            Campos de Formulario
          </button>
          <br />
          <button
            type="button"
            className="text-white mt-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            disabled
          >
            <FaEdit className="w-5 h-5 mr-2 -ml-1" />
            Cargos
          </button>
          <button
            type="button"
            className="text-white mt-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            disabled
          >
            <FaEdit className="w-5 h-5 mr-2 -ml-1" />
            Habilidades
          </button>
          <button
            type="button"
            className="text-white mt-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            disabled
          >
            <FaEdit className="w-5 h-5 mr-2 -ml-1" />
            Paises
          </button>
          <button
            type="button"
            className="text-white mt-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            disabled
          >
            <FaEdit className="w-5 h-5 mr-2 -ml-1" />
            Ciudades
          </button>
        </div>
      </section>
    </main>
  );
}

export default Admin;
