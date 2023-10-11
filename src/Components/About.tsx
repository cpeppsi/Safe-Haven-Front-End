import React from 'react';
import NavigationBar from './Navbar';
import Card from 'react-bootstrap/Card';
import AboutText from './AboutText';

function About() {
  return (
    <div className='container-lg font-nice'>
      {<NavigationBar />}
      <div style={{ position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1510613439354-64547973b449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3862&q=80"
          alt="Woman with dog"
          className="object-fit-cover img-fluid m0"
        />
        <div
          className='p-2'
          style={{
            position: 'absolute',
            bottom: '0px',
            zIndex: '1',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            textAlign: 'center',
            color: 'black',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          Photo by <a href="https://unsplash.com/photos/q_TH75_MFTc">Erica Magugliani</a> on{' '}
          <a href="https://unsplash.com/s/photos/pet?orientation=landscape&license=free">Unsplash</a>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          margin: 'auto',
          textAlign: 'center',
          backgroundColor: '#B5EB8D',
          backgroundImage: 'repeating-linear-gradient(30deg, #ffffff 0, #ffffff 1px, #a7e57b 0, #a7e57b 2%)',
        }}
      >
        <Card
          style={{
            display: 'inline-block',
            border: '2px solid #217605',
            margin: '15px',
            backgroundColor: '#217605',
            width: '70%',
            padding: '15px',
          }}
        >
          {<AboutText />}
        </Card>
      </div>
    </div>
  );
}

export default About;
