import React, { Component } from 'react';

import './style.css';

const servicesList = [
    {   
        id: 1,
        serviceName: 'Ручное Бронирование',
<<<<<<< HEAD
        count: 10
=======
        count: 17
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
    },
    {
        id: 2,
        serviceName: 'Пакетные Туры',
<<<<<<< HEAD
        count: 5
=======
        count: 6
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
    },
    {
        id:3,
        serviceName: 'Отели',
<<<<<<< HEAD
        count: 15
=======
        count: 7
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
    },
];
class ServicesList extends Component {
    calculateWidth(count){
        return count*100/this.props.total
    }
    render() {
        return (
            <div className="services-list">
                <h5>Услуг</h5>
              <ul>
                {
                    servicesList.map((item)=> (<li key={item.id}>
                                                <span 
                                                    style={{
                                                        width: `${this.calculateWidth(item.count)}%`
                                                    }}
<<<<<<< HEAD
                                                    className={item.id === 1 ? "first-service-name service-name"
                                                    : "service-name"}>{item.serviceName}
=======
                                                    className="service-name">{item.serviceName}
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
                                                </span>
                                                <span className="service-count">{item.count}</span>
                                               </li>))
                }
              </ul>
              <h4>Всего: <span className="services-total">{this.props.total}</span></h4>
            </div>
        );
    }
}

export default ServicesList;