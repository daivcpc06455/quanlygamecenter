import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import tự động các thành phần của chart.js
import 'bootstrap/dist/css/bootstrap.min.css';

const Statistics = () => {
  // State để lưu trữ biểu đồ hiện tại
  const [currentChart, setCurrentChart] = useState('day');

  // Dữ liệu cho biểu đồ so sánh giữa các ngày trong tháng
  const dailyData = {
    labels: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
      '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
    ],
    datasets: [
      {
        label: 'Doanh thu theo ngày (Triệu VND)',
        data: [
          5, 7, 10, 15, 6, 8, 12, 14, 9, 7, 8, 6, 9, 13, 10, 14, 15, 16, 18,
          12, 14, 11, 10, 7, 6, 8, 9, 10, 12, 15
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ so sánh giữa các tháng trong năm
  const monthlyData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
      {
        label: 'Doanh thu theo tháng (Triệu VND)',
        data: [150, 120, 180, 200, 175, 210, 220, 180, 190, 230, 210, 240],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ so sánh giữa các năm
  const yearlyData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Doanh thu theo năm (Tỷ VND)',
        data: [2.5, 3.0, 3.5, 4.0, 4.5],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Cấu hình biểu đồ
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Doanh thu',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Thời gian',
        },
      },
    },
  };

  // Hàm để render biểu đồ dựa trên loại biểu đồ được chọn
  const renderChart = () => {
    if (currentChart === 'day') {
      return <Bar data={dailyData} options={options} />;
    } else if (currentChart === 'month') {
      return <Bar data={monthlyData} options={options} />;
    } else if (currentChart === 'year') {
      return <Bar data={yearlyData} options={options} />;
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Thống kê doanh thu</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Thống kê theo ngày</div>
            <div className="card-body">
              <h5 className="card-title">Tổng số phòng đặt: 100</h5>
              <p className="card-text">Doanh thu: 150 triệu VND</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Thống kê theo tháng</div>
            <div className="card-body">
              <h5 className="card-title">Tổng số phòng đặt: 1000</h5>
              <p className="card-text">Doanh thu: 2 tỷ VND</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Thống kê theo năm</div>
            <div className="card-body">
              <h5 className="card-title">Tổng số phòng đặt: 10,000</h5>
              <p className="card-text">Doanh thu: 50 tỷ VND</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown menu để chọn biểu đồ */}
      <div className="mt-4">
        <div className="dropdown text-center">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="chartDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Chọn loại biểu đồ
          </button>
          <ul className="dropdown-menu" aria-labelledby="chartDropdown">
            <li>
              <button className="dropdown-item" onClick={() => setCurrentChart('day')}>
                Biểu đồ theo ngày
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setCurrentChart('month')}>
                Biểu đồ theo tháng
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setCurrentChart('year')}>
                Biểu đồ theo năm
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hiển thị biểu đồ tương ứng */}
      <div className="mt-5">{renderChart()}</div>
    </div>
  );
};

export default Statistics;
