import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from "./components/layout/Layout";
import Components from "./pages/Components";
import Blocks from "./pages/Blocks";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
    <div className="font-primarylw dark bg-black text-white">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/components" element={<Components />} />
                        <Route path="/blocks" element={<Blocks />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;
