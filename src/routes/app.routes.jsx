import { Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';

import { CreateMovie } from '../pages/CreateMovie';

import { Movie } from '../pages/Movie';

import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createM" element={<CreateMovie />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/Profile" element={<Profile />} />
        </Routes>
    )
}