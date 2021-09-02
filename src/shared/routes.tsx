import Home from './Home';
import About from './About';
const routes = [
    {
        path: "/",
        exact:true,
        component: Home,
    },
    {
        path: "/about",
        exact:true,
        component: About,
        loadData: About.loadData
    }
]
export default routes