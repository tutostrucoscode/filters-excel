import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import Loading from '../loading/loading'
import NotFound from '../../pages/not-found'
import { Path } from '../../constants'
import Dashboard from '../../pages/dashboard'
import Filters from '../../pages/filters'
import CreateTemplates from '../../pages/create-templates'

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route
                        path={Path.Index}
                        element={<Navigate to={Path.Dashboard} replace={true} />}
                    />
                    <Route path={Path.Dashboard} element={<Dashboard />} />
                    <Route path={Path.Filters} element={<Filters />} />
                    <Route path={Path.Templates} element={<CreateTemplates />} />
                </Routes>
                <Toaster position="bottom-right" />
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRouters
