import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, theme } from 'antd';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import './App.css';

const { Content } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout className="layout">
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              padding: 24,
              minHeight: 280
            }}
          >
            <Routes>
              <Route path="/" element={<ClientList />} />
              <Route path="/add" element={<ClientForm />} />
              <Route path="/edit/:id" element={<ClientForm />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

