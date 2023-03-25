import {resolve} from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import {expand} from 'dotenv-expand';
import {Configuration} from '../server/config';

const env: Configuration | any = expand(dotenv.config()).parsed;

const cwd = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
    root: `${cwd}/client`,
    plugins: [react()],
    server: {
        port: parseInt(env?.FRONTEND_PORT || '3000'),
        proxy: {
            '/api': {
                target: `http://${env.HTTP_HOST}:${env.HTTP_PORT}`,
                changeOrigin: true,
            },
        },
    },
    build: {
        outDir: '../.local/client',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            lodash: 'lodash-es',
            $types: `${cwd}/client/src/types.d.ts`,
            '$types/api': `${cwd}/client/src/api.d.ts`,
            $application: `${cwd}/client/src/application`,
            $components: `${cwd}/client/src/components`,
            $queries: `${cwd}/client/src/queries`,
            $pages: `${cwd}/client/src/pages`,
            $utils: `${cwd}/client/src/utils`,
            $hooks: `${cwd}/client/src/hooks`,
            $controllers: `${cwd}/client/src/controllers`,
            '$entities.types': `${cwd}/entities.types.ts`,
            $ztypes: `${cwd}/ztypes`,
            $: `${cwd}/client/src`,
        },
    },
});
