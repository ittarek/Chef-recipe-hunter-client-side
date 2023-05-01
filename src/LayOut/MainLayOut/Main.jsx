import React from 'react';
import Header from '../../ShardComponet/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../ShardComponet/Footer/Footer';


const Main = () => {
          return (
                    <>

                <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                             
                    </>
          );
};

export default Main;