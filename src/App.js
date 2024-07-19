import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import MyPage from "./pages/mypage";
import Quest from "./pages/quest";
import ChatModel from "./pages/chatmodel";
import Chat from "./pages/chat";
import './App.css';
import Navigation from "./component/common/navigation";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <RootLayout>

    <BrowserRouter>
    <Navigation/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mypage" element={<MyPage />}/>
          <Route path="/quest" element={<Quest />}/>
          <Route path="/chatmodel" element={<ChatModel />}/>
          <Route path="/chat" element={<Chat />}/>
        </Routes>
    </BrowserRouter>
    </RootLayout>
  );
}

export default App;
