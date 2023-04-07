import { Home } from "../components/Home";
import { Movies } from "../components/Movies";
import { Multfilms } from "../components/Mulfilms";
import { Series } from "../components/Series";

export const routes = [
    {
        id: 1,
        element: <Home />,
        to: '/homepage'
    },
    {
        id: 2,
        element: <Movies />,
        to: '/movies'
    },
    {
        id: 3,
        element: <Series />,
        to: '/series'
    },
    {
        id: 4,
        element: <Multfilms />,
        to: '/multfilms'
    }
]