import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import AppRouters from './features/routers/app'
import './styles/core.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppRouters />
        </MantineProvider>
    </React.StrictMode>
)
