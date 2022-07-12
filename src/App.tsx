import React from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="hero-container">
        <Hero image='banner-1.jpg' />
        <Hero image='banner-2.jpg' />
      </div>
      <div className='container content-section'>
        <div className="row">
          <Card title='KM Sport' theme='white' className='col-lg-6 col-md-12 col-xs-12'>
            <div>
            Състезателната дейност в съвременния олимпийски и масов спорт изисква прецизно дозиране и планиране на тренировъчното натоварване. Много често тренировъчния процес се налага да бъде моделиран от разстояние по редица причини. Програмирането на тренировъчния процес е тематика, проучвана, анализирана и тествана през годините.
            </div>
          </Card>
          <br />
          <Card title='Тренировъчен процес' theme='blue' className='col-lg-6 col-md-12 col-xs-12'>
            <div>
            Условията за провеждане на възможно най-безопасната подготовка за състезателите, техните треньори и цялостния екип на един състезател или отбор, би била по-практична, детайлна и ефективна с програма, позволяваща от разстояние да се осъществява тренировъчен процес, както и да се редакитра в случай на необходимост.
            </div>
          </Card>
        </div>
      </div>
      <div className='container content-section'>
          <div className="row">
            <Card title='Целеви групи' theme='blue' className='col-lg-4 col-md-12 col-xs-12'>
              <div>
                <ul>
                  <li>Спортисти (любители);</li>
                  <li>Професионални спортисти;</li>
                  <li>Треньори (всички спортове);</li>
                  <li>Спортни клубове и организации;</li>
                  <li>Спортни федерации;</li>
                  <li>Университети и колежи;</li>
                </ul>
              </div>
            </Card>
            <Card title='Предимства' theme='white' className='col-lg-6 col-md-12 col-xs-12'>
              <div>
              <ul>
                  <li>Прецизност на подготовката;</li>
                  <li>Непрекъснатост на контрола;</li>
                  <li>Получаване на информация за протичане на подготовката в реално време, независимо от местонахождението на треньора, състезателя и ръководителя на спортния клуб или федерация;</li>
                  <li>Автоматизирано въвеждане на данни;</li>
                </ul>
              </div>
            </Card>
            <Card title='Полезни връзки' theme='blue' className='col-lg-2 col-md-12 col-xs-12'>
              <div>
                <li>facebook</li>
                <li>twitter</li>
                <li>instagram</li>
                <li>pinterest</li>
                <li>tik-tok</li>
                <li>youtube</li>
              </div>
            </Card>
          </div>
        </div>
    </div>
  );
}

export default App;
